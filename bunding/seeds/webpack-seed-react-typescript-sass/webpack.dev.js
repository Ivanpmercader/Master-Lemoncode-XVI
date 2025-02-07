import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import Dotenv from "dotenv-webpack";

export default merge(common, {
    mode: "development",  //Webpack Reference, Important!
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                    modules: {
                        exportLocalsConvention: "camelCase",
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    },
                    },
                },
                "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/, //Remember that if you have libraries that have css files in node_modules, you need to include this folder
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: "./dev.env",
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        devMiddleware: {
            stats: "errors-only",
        },
    },
});