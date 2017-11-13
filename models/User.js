/**
 * Created by Whg on 2017/11/8.
 */


var mongoose = require('mongoose')
var usersSchema = require('../schemas/users')

module.exports = mongoose.model('User', usersSchema)
