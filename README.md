### 查看

**参数**: 无

**方法**: get

**例子**: http://node.shtodream.cn/user

### 删除

**参数**: id string(类型)

**方法**: get

**例子**: http://node.shtodream.cn/delete?id=5e8ab1123b9c9120859e6d24

**返回值** 
    1. code = 0 代表失败
        2. code = 2 代表id不存在
        3. code = 1 代表成功

### 增加

**参数**: name:'sh',age:'22',phone:'110',money:'1000000'

**方法**: get

**例子**: http://node.shtodream.cn/yan?name=sh&age=22&phone=110&money=10000

**返回值** 
    1. code = 0 代表失败
        2. code = 1 代表成功