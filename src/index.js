const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const cors = require('koa2-cors');
const app = new Koa();
app.use(cors());
app.use(bodyParser());

// 加载全部路由
router.use(require("./router.js"));

// 加载所有路由
app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

app.listen(10020, () => {
  console.log(`服务器运行在10020端口上`);
});
