const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./client/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "./client/src/index.js"), //tells where webpack to start looking for files
    output: {
        path: path.resolve(__dirname, 'public/dist'), //folder where webpack will put bundle
        filename: 'bundled.js' //what the file be named
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 1111
    },
    mode: 'development',
};