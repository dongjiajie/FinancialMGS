const koa = require('koa');
const app = new koa();

app.use(function *(){
    console.log(this);
    this.body = 'Hello World';
});

app.listen(3000);

