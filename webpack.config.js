const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/app.ts'),
    output: {
        filename: 'app.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};