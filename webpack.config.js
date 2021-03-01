const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   context:  path.resolve(__dirname,'src'),
   mode:'development',
   entry:'./index.js' ,
   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname,'dist'),
   },
   plugins:[
    new MiniCssExtractPlugin(),
    new HtmlWbpackPlugin({
        template: './index.html'
    })
   ],
   module:{
       rules:[
           {
               test: /\.css$/,
               use: ['style-loader','css-loader']
           },
           {
               test: /\.s[ac]ss$/,
               use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
            ]
           },
           {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
    
       ]
   },
   devServer:{
        port:8080,
        overlay: true,
        open: true
   }
} 