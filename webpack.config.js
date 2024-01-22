const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new Dotenv({
      path: ".env",
    }),
  ],
};
