module.exports = {
  chainWebpack: config => {
    config.module.rule('pug')
        .test(/\.pug$/)
        .use('pug-html-loader')
        .loader('pug-html-loader')
        .end()
  },

  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // target host
        ws: true,  // proxy websockets
        changeOrigin: true,  // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '/api'  // rewrite path
        }
      },
    },
  }

};
