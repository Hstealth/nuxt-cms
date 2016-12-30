module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '屏趣',
    meta: [
      { charset: 'utf-8' },
      {'http-equiv':'content-type','content':'text/html;charset=utf-8'},
      {'http-equiv':'X-UA-Compatible','content':'IE=edge,chrome=1'},
      {'http-equiv':'Access-Control-Allow-Origin','content':'*'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css:[],
  build:{
      loaders:[
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
          {
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
          loader: 'file-loader',
          query: {
            name: '[name].[ext]?[hash]'
          }
        }
      ],
      vendor: [/*'element-ui'*/]
  },
  plugins:[/* '~plugins/element-ui' */],
  /*
  ** Global CSS
  */
  //css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}