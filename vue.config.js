module.exports = {
  proxyTable: {
    '/api': {  //使用"/api"来代替线上服务器地址
      target: 'http://127.0.0.1:3000/', //源地址
      changeOrigin: true, //改变源
      pathRewrite: {
        '^/api': '' //路径重写
      }
    }
  }
}
