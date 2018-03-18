require('./tools/db')
var express = require('express')
var app = express()
var ShopModel = require('./models/shop')
var FuwuModel = require('./models/fuwu')
var JiaModel = require('./models/jiazheng')
var commentModel = require('./models/comment')

app.use(express.static('public'))
//获取首页数据
app.get('/getShop',function (req,res) {
	ShopModel.find({},function (err,list) {
	  if(err){
	  	res.send({status:'err'})
	  }else{
			res.send({status:'OK',list:list})
	  }
	})
})
//服务商页数据
app.get('/getFuwu',function (req,res) {
	FuwuModel.find({},function (err,list) {
		if(err){
			res.send({status:'err'})
		}else{
			res.send({status:'OK',list:list})
		}
	})
})
//家政页数据
app.get('/getJia',function (req,res) {
	JiaModel.find({},function (err,list) {
		if(err){
			res.send({status:'err'})
		}else{
			res.send({status:'OK',list:list})
		}
	})
})
//家政页评论
/*app.get('/getComment',function (req,res) {
	commentModel.find({},function (err,list) {
		if(err){
			res.send({status:'err'})
		}else{
			res.send({status:'OK',list:list})
		}
	})
})*/
app.get('/getComments',function (req,res) {
	const page = req.query.page

	commentModel.find({}).limit(10).skip((page-1)*10).exec(function (err,list) {
	  if(err){
	  	res.send({status:'err'})
	  }else{
		  res.send({status:'OK',list:list})
	  }
	})
})

app.listen(3001)