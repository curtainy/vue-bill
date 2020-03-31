module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
      }
    }
  },
  css: {
    extract: false
  }
}