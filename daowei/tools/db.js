var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/daowei')

mongoose.connection.on('open',function () {
  console.log('到位数据库连接成功')
})