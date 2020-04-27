const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: ["webpack.js", ".web.js", ".ts",".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test:/\.css$/i,
                exclude: /styles/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.css$/i,
                include: /styles/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"                        
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html"
        })
    ]
}