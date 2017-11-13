/**
 * Created by Whg on 2017/10/19.
 *
 * 应用程序的启用(入口)文件
 */

//加载express 模块
var express = require('express');
//加载模板
var swig = require("swig");
//加载数据库
var mongoose = require('mongoose')
//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser')
//创建app应用
var app = express();

//设置静态文件托管
//当用户访问得url以/public开始,那么直接返回对应得__dirname+'/public'下的文件
app.use('/public', express.static(__dirname + '/public'))

//配置应用模板
//当前应用使用的模板引擎
//第一个参数是模板后缀
//第二个参数是解析模板内容
app.engine("html", swig.renderFile)

//设置模板文件存放的目录
//第二个参数是文件目录
app.set("views", "./views")

//注册所使用的模板引擎
//第二个参数必须和上面配置的文件后缀一样
app.set("view engine", "html")

//在开发过程中取消模板缓存

swig.setDefaults({cache: false})

//body_parser设置
app.use(bodyParser.urlencoded({extended: true}))

// /**
//  * 首页
//  */
// app.get('/', function (req, res, next) {
//     // res.send('<h1>欢迎光临我的博客!</h1>');
//     /**
//      * 读取views目录下的指定文件,解析并返回给客户端
//      */
//     res.render('index')
// });

/**
 * 根据不同的功能划分模块
 */
app.use('/admin', require('./routers/admin'))
app.use('/api', require('./routers/api'))
app.use('/', require('./routers/main'))


//连接数据库  监听http请求
mongoose.connect('mongodb://localhost:27018/blog', function (err) {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
        app.listen(10086);
    }
})


