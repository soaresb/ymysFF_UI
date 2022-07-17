module.exports = {
    // options...
    devServer: {
        proxy: 'http://localhost',
    },
    configureWebpack: {
        devServer: {
            headers: { "Access-Control-Allow-Origin": "*" }
        }
      },
      css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "src/styles/bootstrap/_variables.scss";
                    @import "src/styles/bootstrap/_bootswatch.scss";
                `
            }
        }
    },
  }