const path = require('path');

module.exports = {
    entry: "./client/src/index.js", //tells where webpack to start looking for files
    output: {
        path: path.resolve(__dirname, 'public/dist'), //folder where webpack will put bundle
        filename: 'bundled.js', //what the file be named
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
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: 'development',
};