var path = require("path");
var webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const PRODUCTION = process.env.ENV === "production";

module.exports = {
    entry: "./src/main.jsx",
    output: { path: path.join(__dirname, "static/js/"), filename: "bundle.js" },
    plugins: PRODUCTION ? [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new UglifyJsPlugin(),
    ] : [],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                passPerPreset: true,
                plugins: [
                    "transform-decorators-legacy",
                ],
                presets: [
                    "react",
                    "stage-0",
                    ["env", {
                        "modules": false,
                        "targets": {
                            "browsers": ["last 2 versions"]
                        }
                    }]
                ]
            }
        }]
    }
}
