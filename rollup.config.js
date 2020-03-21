// rollup.config.js
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;

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
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("dist")

    //livereload("dist")
  ]
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}
