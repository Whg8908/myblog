/**
 * Created by Whg on 2017/11/8.
 */




var express = require('express')
var router = express.Router()

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

    //注册成功
    responseData.message = '注册成功'
    res.json(responseData)

})

module.exports = router
