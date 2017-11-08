/**
 * Created by Whg on 2017/11/8.
 */


var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.send('首页')
})

module.exports = router
