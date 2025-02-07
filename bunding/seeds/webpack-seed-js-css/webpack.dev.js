import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import Dotenv from "dotenv-webpack";

export default merge(common, {
    mode: "development",  //Webpack Reference, Important!
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/, //If we want install libraries in node_modules, for example bootstrap, we need delete this line or uncomment next rule
                use: ["style-loader", "css-loader"],
            },
        ]
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