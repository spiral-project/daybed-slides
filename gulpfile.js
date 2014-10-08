/* jshint node:true */

"use strict";

var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var connect = require("gulp-connect");
var deploy = require("gulp-gh-pages");

var opt = {
  outputFolder: "build",

  server: {
    port: 3000,
    livereload: 31357
  },

  cssAssets: [
    "src/astral/css/*.css",
    "src/css/app.css"
  ],

  fontAssets: [
    "src/astral/css/font/*"
  ],

  jsAssets: [
    "src/astral/js/**/*.*",
    "src/js/**/*.*"
  ],

  htmlAssets: [
    "src/index.html"
  ],

  app: {
    src: "src/js/app.js",
    dest: "app.js"
  },
  vendors: "vendors.js"
};

/**
 * Assets tasks
 */
gulp.task("assets", [
  "assets:html",
  "assets:css"
]);

gulp.task("assets:html", function() {
  return gulp.src(opt.htmlAssets)
    .pipe(gulp.dest(opt.outputFolder));
});

gulp.task("assets:css", function() {
  return gulp.src(opt.cssAssets)
    .pipe(gulp.dest(opt.outputFolder + "/css"));
});

gulp.task("assets:fonts", function() {
  return gulp.src(opt.fontAssets)
    .pipe(gulp.dest(opt.outputFolder + "/fonts"));
});

/**
 * JS tasks
 */

gulp.task("js", [
  "js:vendors",
  "js:app"
  ]);

gulp.task("js:app", ["js:vendors"], function() {
  return browserify("./" + opt.app.src)
    .transform("reactify")
    .external("react")
    .external("react-bootstrap")
    .external("marked")
    .bundle()
    .pipe(source(opt.app.dest))
    .pipe(gulp.dest(opt.outputFolder + "/js"));
});

gulp.task("js:vendors", function() {
  return browserify()
    .require("react")
    .require("react-bootstrap")
    .require("marked")
    .bundle()
    .pipe(source(opt.vendors))
    .pipe(gulp.dest(opt.outputFolder + "/js"));
});


/**
 * Server task
 */
gulp.task("server", function() {
  return connect.server({
    root: opt.outputFolder,
    port: opt.server.port,
    livereload: {
      port: opt.livereload
    }
  });
});

/**
 * Watch task
 * Launch a server with livereload
 */
gulp.task("watch", ["assets", "js"], function() {
  gulp.watch(opt.cssAssets,  ["assets:css"]);
  gulp.watch(opt.fontAssets, ["assets:fonts"]);
  gulp.watch(opt.jsAssets,   ["js:app"]);
  gulp.watch(opt.htmlAssets, ["assets:html"]);

  gulp.watch([opt.outputFolder + "/**/*.*"])
    .on("change", function() {
      gulp.src("").pipe(connect.reload());
    });
});

gulp.task("dist", ["assets", "js"], function() {
  return gulp.src(opt.outputFolder + "/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest(opt.outputFolder + "/js"));
});

/**
 * Deploy to gh-pages
 */
gulp.task("deploy", ["dist"], function() {
  gulp.src("./build/**/*")
      .pipe(deploy("git@github.com:spiral-project/daybed-slides.git"));
});

gulp.task("default", ["server", "watch"]);
