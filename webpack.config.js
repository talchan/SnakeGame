const path = require('path');
module.exports = {
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        path: path.join(__dirname,'docs'),
        filename: '[name].js' 
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
    port            : 8080,                             // ポートを指定
    progress        : true,                             // 変換の進捗をコンソールに表示
    clientLogLevel  : 'info',                           // バンドル作成に関するログのレベル(none, error, warning, info)
    contentBase     : path.join(__dirname, 'docs/'),  // サーバの基準パス(ドキュメントルート)
    watchContentBase: true,
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}