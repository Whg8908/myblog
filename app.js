/**
 * Created by Whg on 2017/10/19.
 *
 * 应用程序的启用(入口)文件
 */

//加载express 模块
var express = require('express');
//加载模板
var swig = require("swig");
//创建app应用
var app = express();

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

/**
 * 首页
 */
app.get('/', function (req, res, next) {
    // res.send('<h1>欢迎光临我的博客!</h1>');
    /**
     * 读取views目录下的指定文件,解析并返回给客户端
     */
    res.render('index')
});

//监听http请求
app.listen(10086);

