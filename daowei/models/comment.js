const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	iconUrl:{type:String},
	area:{type:String},
	city:{type:String},
	comment:{type:String},
	createtime:{type:String},
	nick:{type:String},
	star:{type:String}
},{
	collection:'comments'
})

module.exports = mongoose.model('comment',commentSchema)