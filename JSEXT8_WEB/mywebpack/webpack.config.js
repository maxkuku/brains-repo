// статья по настройкам
// https://habr.com/ru/post/524260/

/* базовая конфигурация */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    // точка входа
    // в папке src основная работа
    main: path.resolve( __dirname, './src/index.js' )
  },

// здесь будет bundle
// в папке dist скомпилированный исполняемый файл
// там ничего не правим
  output: {
    path: path.resolve( __dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'JSEXT8_WEB',
      template: path.resolve( __dirname, './public/template.html'),
      filename: 'index.html'
    }),
  ]
}
/* --базовая конфигурация-- */