const express = require('express');
const app = express();

var testData = require('./static/data.json'); //本地json文件数据

var apiRoutes = express.Router();
app.use('/api', apiRoutes);
module.exports = {
  publicPath: './',
  devServer: {
    before(app) {
      app.get('/api/testData', (req, res) => {
        res.json({
          errno: 0, // 这里是你的json内容
          data: testData,
        });
      });
    },
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
  },
};
