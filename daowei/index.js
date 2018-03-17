require('./tools/db')
var express = require('express')
var app = express()
var ShopModel = require('./models/shop')
var FuwuModle = require('./models/fuwu')
var JiaModle = require('./models/jiazheng')

app.use(express.static('public'))

app.get('/getShop',function (req,res) {
	ShopModel.find({},function (err,list) {
	  if(err){
	  	res.send({status:'err'})
	  }else{
			res.send({status:'OK',list:list})
	  }
	})
})

app.get('/getFuwu',function (req,res) {
	FuwuModle.find({},function (err,list) {
		if(err){
			res.send({status:'err'})
		}else{
			res.send({status:'OK',list:list})
		}
	})
})

app.get('/getJia',function (req,res) {
	JiaModle.find({},function (err,list) {
		if(err){
			res.send({status:'err'})
		}else{
			res.send({status:'OK',list:list})
		}
	})
})


app.listen(3003)