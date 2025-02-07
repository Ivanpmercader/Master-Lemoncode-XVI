

import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";

export default merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
        cacheGroups: {
            vendor: {
            chunks: "all",
            name: (module) => {
                const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1];
                return packageName
                ? `vendor/${packageName.replace("@", "")}`
                : null;
            },
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
            },
        },
        },
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/, //If we want install libraries in node_modules, for example bootstrap, we need delete this line or uncomment next rule
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "css/[name].[chunkhash].css",
        chunkFilename: "[id].[chunkhash].css",
        }),
        new Dotenv({
            path: "./prod.env",
        }),
    ],
});