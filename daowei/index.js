require('./tools/db')
var app = express()
var ShopModel = require('./models/shop')

var express = require('express')

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


app.listen(3001)