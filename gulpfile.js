var gulp       = require("gulp"),

    //CSS PreCompile Dependencies
    sass       = require("gulp-sass"),

    //Javascript Compile Dependencies
    browserify = require("browserify"),
    babelify   = require("babelify"),
    source     = require("vinyl-source-stream"),
    uglify     = require("gulp-uglify"),

    //Live Reload Dependencies
    connect = require( 'gulp-connect' );

//Up a server


//Build the Application using the other tasks
gulp.task("build", ["react", "sass", "copy"], function () {
  console.log("Finished!");
});

gulp.task("watch", function () {
  gulp.watch("app/src/assets/sass/**/*", ["sass"]);
  gulp.watch("app/src/assets/react/**/*", ["react"]);
  gulp.watch("app/src/index.html", ["copy"]);
});

// Do the React Compile Black Magic
gulp.task("react", function () {
  return browserify("./app/src/react/main.js")
    .transform("babelify")
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(connect.reload());
});

//SASS
gulp.task("sass", function (){
  gulp.src("src/assets/sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(connect.reload());
});

//COPY
gulp.task("copy", function () {
  // index.html > dist
  gulp.src("app/src/index.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});


//Init serve
gulp.task("serve", ["build"], function() {
  connect.server({
    port: 3000,
    root: "dist",
    livereload : true
  });

  gulp.run("watch");
});
