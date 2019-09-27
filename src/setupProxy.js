const proxy = require('http-proxy-middleware'); //做服务器代理、跨域代理

module.exports = function (app) {  //app是服务的实例
    app.use(   //使用中间件
        proxy(
            '/api', {   //地址
            target: 'https://www.charleskeith.cn/',
            changeOrigin: true,  //

        }));
};
