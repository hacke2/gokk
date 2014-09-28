var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Movie = require('./models/movie')


var port = 3000
var app = express()



app.set('views','./views/pages')
app.set('view engine','jade')
//表单数据格式化
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }))
//静态资源地址
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'res')))
app.listen(port)
mongoose.connect('mongodb://localhost/gokk')
console.log('gokk started on port '+port)

app.get('/',function(req,res){

	Movie.findAll(function(err, data){

		res.render('index',{
			title:'go下载',
			columns : data
		})
	})
	

})

app.get('/detail/:columnID/:movieID',function(req,res){
	var columnID = req.params.columnID;
	var movieID = req.params.movieID;

	Movie.findById(columnID,function(err, column){
		column.findMovieByID(movieID, function(movie) {
			res.render('detail',{
				title:'go下载',
				movie : movie
			})
		})
	})
})

app.get('/admin',function(req,res){
	
	Movie.findColumn(function(err, columns) {
			res.render('admin',{
				title:'新增电影',
				movie:{
					id:'',
					title:'',
					actor:'',
					type:'',
					year:'',
					poster:'',
					country:'',
					url:'',
					desc:''
				},
				columns : columns
			})
	})
})

app.get('/admin/list',function(req,res){

	res.render('list',{
		title:'站长推荐'
	})

})

app.post('/admin/movie/new',function(req,res){
	
	var columnID = req.body.columnID;
	var movie = req.body.movie;
	if(movie.id == '') {
		movie.id = new mongoose.Types.ObjectId;
	}

	Movie.findById(columnID,function(err, column){
		if(err) console.error(err);
		column.addMovie(movie, function() {
			res.redirect('/detail/'+columnID+'/'+movie.id)
		})
	})

})