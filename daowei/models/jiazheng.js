const mongoose = require('mongoose')

const jiaSchema = new mongoose.Schema({
	title:{type:String},
	name:{type:String},
	desc:{type:String},
	price:{type:Number},
	oldPrice:{type:Number},
	count:{type:Number},
	commentCount:{type:Number},
	accept:{type:String},
	praise:{type:String},
	company:{type:String},
	profile:{type:String},
	comments:{type:Array},
},
	{
		collection:'jiazheng'
	})

module.exports = mongoose.model('jiazheng',jiaSchema)
