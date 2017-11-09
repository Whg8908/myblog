/**
 * Created by Whg on 2017/11/8.
 */


var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('main/index')
})

module.exports = router
