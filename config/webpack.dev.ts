import "dotenv/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const dev = (): Configuration | DevServerConfiguration => {
  return merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  });
};

export default dev;
