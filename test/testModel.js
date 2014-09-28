var mongoose = require('mongoose')
var Movie = require('../models/movie')

//var db = mongoose.createConnection('localhost', 'gokk')
mongoose.connect('mongodb://localhost/gokk')

var feiche = {
					id : new mongoose.Types.ObjectId,
					title : '极品飞车',
					year : 2015,
					type : '剧情,动作,惊悚,犯罪',
					actor : '亚伦·保尔 / 达科塔·约翰逊 / 伊莫琴·普茨 / 迈克尔·基顿 / 多米尼克·库珀 / 拉米·马雷克 / 瑟·梅杰尔 / 卡迪小子 / 哈里森·吉尔伯特森 / 尼克·齐兰德 / 卡梅拉·孙巴多 / 拉蒙·罗德里格兹 / 史蒂文·韦格 / 利比·布兰顿 / 贾登·亚历山大',
					country : '美国',
					poster : '/img/6.jpg',
					url : 'http://www.baidu.com',
					desc : '纽约基斯科山，小青年托比·马歇尔（亚伦·保尔 Aaron Paul 饰）和伙伴们共同经营一家改装车行，他同时也是一名技术精湛的赛车高手。虽然刚刚在一场比赛中赢得奖金，但是车行的经营状况还是到了令人堪忧的底部。恰在此时，拥有专业赛车手资格的土豪迪诺·布鲁斯特（多米尼克·库珀 Dominic Edward Cooper 饰）找上门来。迪诺此前撬走了托比的女友，两人可谓不共戴天。但是迪诺此次给他带来一单不小的改装生意，托比和伙伴们成功打造出一辆时速超过370公里的福特野马，而嫉妒心炽盛的迪诺为了最强赛车手的名号向托比发起挑战。为了丰厚的报酬，托比和好友利托·比特共同参赛。谁知迪诺导致利托死亡，事后还嫁祸托比。 　　出狱后，托比借来他的那辆得意之作福特野马，发誓要为利托讨回公道……'
				
			};

var movie = new Movie(
	{
		columnName:'综艺',
		movies : [
			feiche	
		]
	}
);

/*movie.save();*/
//新增测试
/*Movie.findById('5428158a121d856c230f6ed1',function(err, data){
	data.addMovie(feiche,function() {
		console.log(true)
	})
})*/
//删除测试
/*Movie.findById('5427bc696c05b3ec16c820a1',function(err, data){
	data.removeMovieByMovieID('542823405270f4941ca4b3fa',function() {
		console.log(true);
	})
})*/

//查询测试
/*Movie.findById('5427bc696c05b3ec16c820a1',function(err, data){
	data.removeMovieByMovieID('5427bc696c05b3ec16c820a0',function() {
		console.log(true);
	})
})*/
//查询所有栏目
/*Movie.findColumn(function(err, data) {
console.log(data);
}) */