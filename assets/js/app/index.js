/**
 * Created by dongjj on 2017/7/11.
 */
var koa = require('koa');
var app = new koa();

app.use(function *(){
    console.log(this);
    this.body = 'Hello World';
});

app.listen(3000);

