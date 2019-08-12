module.exports = {
  devServer: {
    '/gauge2': {
      target: 'http://192.168.2.173:10082/gauge2/',
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        '^/gauge2': '', // 重写接口
      },
    },
  },
};
