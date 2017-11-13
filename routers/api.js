/**
 * Created by Whg on 2017/11/8.
 */




var express = require('express')
var router = express.Router()
var User = require('../models/User')

//统一返回格式
var responseData

router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next()
})

/**
 * 用户注册逻辑
 *
 * 1.用户名不能为空
 * 2.密码不能为空
 * 3.两次输入密码必须一致
 *
 *  1.用户是否已经被注册
 *      数据库查询
 *
 */
router.post('/user/register', function (req, res, next) {
    var body = req.body
    var username = body.username
    var password = body.password
    var repassword = body.repassword

    //用户名是否为空
    if (username == '') {
        responseData.code = 1
        responseData.message = '用户名不能为空'
        res.json(responseData)
        return
    }


    //密码不能为空
    if (password == '' || repassword == '') {
        responseData.code = 2
        responseData.message = '密码不能为空'
        res.json(responseData)
        return
    }

    //两次输入的密码不一致
    if (password !== repassword) {
        responseData.code = 3
        responseData.message = '两次密码输入不一致'
        res.json(responseData)
        return
    }

    //用户名是否已经注册,在数据库中查询
    User.findOne({
        username: username
    }).then(function (userInfo) {
        console.log(userInfo)
        if (userInfo) {
            //表示数据库中有该记录
            responseData.code = 4
            responseData.message = '用户名已经被注册'
            res.json(responseData)
            return
        }//数据库中保存数据

        var user = new User({
            username: username,
            password: password
        })
        return user.save()
    }).then(function (newUserInfo) {
        console.log(newUserInfo)
        //注册成功
        responseData.message = '注册成功'
        res.json(responseData)
    })

})

module.exports = router
