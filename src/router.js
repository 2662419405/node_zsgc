const code = require("koa-router")();
// 加载mongodb数据库
const model = require("./model");
const Meituan = model.getNames("yuan");

// 查
code.get("/user", async (ctx) => {
  const obj = await Meituan.find();
  ctx.body = obj;
});

// 删

code.get("/delete", async (ctx) => {
  const params = ctx.query;
  if (params.id) {
    const obj = await Meituan.deleteOne({ _id: params.id });
    if (obj.n == 1) {
      ctx.body = {
        code: 1,
        message: "数据删除成功",
      };
    } else {
      ctx.body = {
        code: 2,
        message: "传入的id不存在",
      };
    }
  } else {
    ctx.body = {
      code: 0,
      message: "数据删除失败",
    };
  }
});

// 增加
code.get("/yan", async (ctx) => {
  const params = ctx.query;
  if (params.name && params.age && params.money && params.phone) {
    const model = new Meituan({
      name: params.name,
      age: params.age,
      money: params.money,
      phone: params.phone,
    });
    let obj = await model.save();
    ctx.body = {
      code: 1,
      message: "数据录入成功",
      obj,
    };
  } else {
    ctx.body = {
      code: 0,
      message: "数据录入失败",
    };
  }
});

module.exports = code.routes();
