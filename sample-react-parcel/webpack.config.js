const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed;

    // create a object from the env variable
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'release'),
            libraryTarget: 'amd',
            library: 'reactApp'
        },
        module: {
            rules: [
                {
                    test: /\.js/,
                    use: ['babel-loader?cacheDirectory'],
                    exclude: /node_modules/,
                },
                { 
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                { parser: { system: false } }
            ]
        },
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ],
        devServer: {
            historyApiFallback: true,
            watchOptions: { aggregateTimeout: 300, poll: 1000 },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        },
        externals: ['react', 'react-dom', 'axios']
    }
};