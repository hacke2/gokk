var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
	columnName:String,
	movies : Array
})

MovieSchema.methods.findMovieByID = function(movieID, callback) {
	for (var i = 0; i <  this.movies.length; i++) {
		if(this.movies[i].id == movieID) {
			callback && callback(this.movies[i]);
		}
	};
}

MovieSchema.methods.addMovie = function(movie,callback) {
	this.movies.push(movie);
	this.save(callback);
}

MovieSchema.methods.removeMovie = function(movie,callback) {
	this.movies.splice(movies.indexOf(movie),1);
	this.save(callback);
}

MovieSchema.methods.removeMovieByMovieID = function(movieID,callback) {
	var len = this.movies.length;
	for (var i = 0; i <  len; i++) {
		if(this.movies[i].id == movieID) break;
	};

	if(i != len ) {
		this.movies.splice(i,1);
		this.save(callback);
	}else {
		console.log('无此电影!')
	}
}

MovieSchema.statics = {
	findAll:function(callback){
		return this
			.find({})
			.exec(callback)
	},
	findById:function(id,callback){
		return this
		.findOne({_id:id})
		.exec(callback)
	},
	findByPara:function(para,callback){
		return this
		.find(para)
		.exec(callback)
	},
	findMovieWithLimit:function(limit, callback){
		return this
			.find({}).limit(limit)
			.exec(callback)
	},
	findColumn:function(callback){
		return this
			.find({}, '_id columnName')
			.exec(callback)
	}
}



module.exports = MovieSchema
