/**
 * Created by Whg on 2017/11/8.
 */


var mongoose = require('mongoose')


/**
 * 定义用户的表数据结构
 * */
module.exports = new mongoose.Schema({

    username: String,       //用户名
    password: String        //密码
})
