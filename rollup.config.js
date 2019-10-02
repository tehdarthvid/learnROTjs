// rollup.config.js
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourceMap: "inline"
  },
  plugins: [
    copy({
      targets: [{ src: "build/index.html", dest: "dist" }]
    }),
    livereload()
  ]
};
