require('./tools/db')

/*var shops = require('./models/fuwu')


shops.find({},function (err,data) {
  if(!err){console.log(data)}
})*/


/*var jia = require('./models/jiazheng')

jia.find({},function (err,data) {
	if(!err){console.log(data)}
})*/

var comment = require('./models/comment')

comment.find({},function (err,data) {
	if(!err){console.log(data)}
})