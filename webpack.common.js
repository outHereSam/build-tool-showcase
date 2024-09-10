import { resolve } from "path";
// import path from 'path'

export const entry = "./src/index.js";
export const output = {
  filename: "bundle.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
};
export const module = {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },
    },
  ],
};
export const mode = "production";
export const devtool = "source-map";
export const devServer = {
  static: "./dist",
};
