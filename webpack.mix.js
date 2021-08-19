const mix = require("laravel-mix");

// https://laravel-mix.com/extensions/imagemin
require("laravel-mix-imagemin");

mix
  .setPublicPath("dist")
  .copy(["src/views", "src/static"], "dist")
  .copy("src/assets/fonts", "dist/assets/fonts")
  .copy("src/assets/images/**/*.*", "dist/assets/images")
  .copy("src/assets/css/**/*.*", "dist/assets/css")
  
  .js("src/assets/js/app.js", "dist/assets/js/app.js")
  .sass("src/assets/styles/app.scss", "dist/assets/css/")
  .options({
    postCss: [
      require('autoprefixer'),
      require("tailwindcss")
    ],
  })
  .browserSync({
    server: "dist",
    port: 8080,
    files: [
      "dist/**/*.html",
      "dist/assets/css/**/*.css",
      "dist/assets/js/**/*.js",
    ],
  });
