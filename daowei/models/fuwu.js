const mongoose = require('mongoose')

const wufuSchema = new mongoose.Schema({
	title:{type:String,unique:true},
	orderCount:{type:Number,unique:true},
	positiveRate:{type:String}

},
	{
		collection:"fuwus"
	})

module.exports = mongoose.model('wufu',wufuSchema)
