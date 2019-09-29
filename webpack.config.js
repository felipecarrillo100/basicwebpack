const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    "entry": './src/index.js',
    "output": {
        path: __dirname + "/build",
        filename: "index.js"
    },
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: {minimize: true} }
                ]
            }, {
                test: /\.scss$/,
                loader: [
                    { loader: "style-loader" },
                    { loader: "css-loader"},
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|txt)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CopyWebpackPlugin(    [
            {
                from: 'public',
                flatten:false
            }
        ])
    ]
}
