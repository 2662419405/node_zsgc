const mongoose = require("mongoose");

//数据库的地址
const DB_URL = "mongodb://localhost:27017/yuan";
mongoose.connect(DB_URL);

const models = {
  yuan: {
    // 姓名
    name: { type: String, require: true },
    // 年龄
    age: { type: Number, require: true },
    // 金钱
    money: { type: String, require: true },
    // 手机号
    phone: { type: String, require: true },
  },
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getNames: function (name) {
    return mongoose.model(name);
  },
};
