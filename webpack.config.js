const path = require("path");
const outputPath = `${__dirname}/dist`;
require('@babel/register'); // development.jsでES6を使えるようにする

//モジュールの出力の仕方をmodule.exports = {}の中に記述します
module.exports = {
    //実行環境
    mode: "development",

    //エントリーポイントの指定
    entry: './src/index.js',
    output: {
        //どこにバンドルしたjsファイルを出力するか
        path: outputPath,

        //出力先のファイル名
        filename: "bundle.js"
    },
    //モジュール(ファイル)の拡張子ごとにbundleするloaderを割り当てる
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                }
            },
          },
          {
            test: /\.css/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { url: false }
              }
            ]
          }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: outputPath
    }
}