const HtmlWebpackPlugin = require("html-webpack-plugin");
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
