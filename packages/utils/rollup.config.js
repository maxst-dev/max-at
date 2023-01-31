// import commonjs from "rollup-plugin-commonjs";
// import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

process.env.BABEL_ENV = "production";
const extensions = [".js", ".jsx", ".ts", ".tsx"];
export default {
  input: "./src/index.ts",
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript(),
    // commonjs({
    //   include: "node_modules/**",
    // }),
    // babel({
    //   extensions,
    //   exclude: ["node_modules/**"],
    //   runtimeHelpers: true,
    // }),
  ],
  output: [
    {
      // sourcemap: true,
      file: pkg.main,
      format: "cjs",
    },
    {
      // sourcemap: true,
      file: pkg.module,
      format: "esm",
    },
  ],
};
