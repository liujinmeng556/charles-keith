const proxy = require('http-proxy-middleware'); //做服务器代理、跨域代理

module.exports = (app) => {
    app.use(proxy("/api", {
        target: "https://www.charleskeith.cn",
        changeOrigin: true,

    }))
}
