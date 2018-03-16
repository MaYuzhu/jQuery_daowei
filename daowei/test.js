require('./tools/db')

var shops = require('./models/shop')

shops.find({},function (err,data) {
  if(!err){console.log(data)}
})
