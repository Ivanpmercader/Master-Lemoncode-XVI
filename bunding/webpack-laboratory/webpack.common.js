import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

//With this path and context rules, we can change the root path of the project when webpack analyze the files
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.tsx"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin(),] //Permit to use the paths in tsconfig.json
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource"
            },
            {
                test: /\.(svg)$/,
                type: "asset/inline"
            },
            {
                test: /\.txt/,
                type: 'asset',
                parser: {
                 dataUrlCondition: {
                   maxSize: 4 * 1024 // 4kb
                 }
                },
            },
            {   
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking"
        })
    ]
}