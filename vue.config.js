module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: 'localhost'
  },
  pwa: {
    name: 'Covid19 Malaysia',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    // assetsVersion: '2',
    manifestOptions: {
      start_url: "https://covid19my.netlify.app/",
      display: "standalone"
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    workboxOptions: {
      exclude: ['_redirects', 'assetlinks.json'],
    }
  }
};