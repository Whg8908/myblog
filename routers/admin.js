/**
 * Created by Whg on 2017/11/8.
 */


var express = require('express')
var router = express.Router()

router.get('/user/register', function (req, res, next) {
    res.send('Admin - User')
})

module.exports = router
