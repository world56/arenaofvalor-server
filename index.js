const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

/**
 * @中间件
 */
app.use(cors()); // 解决跨域
app.use(express.json()); // 转json
app.use("/static", express.static(path.join(__dirname, "static")));

// 载入 admin 模块
require('./src/routes/admin')(app);

// 载入 file 模块
require('./src/routes/admin/file')(app);

// 载入 mongodb
require('./src/mongo')(app);


app.listen(4001, () => {
    console.log('监听成功');
});