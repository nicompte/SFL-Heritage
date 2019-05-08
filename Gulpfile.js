var gulp = require('gulp'),
  browserify = require('browserify'),
  del = require('del'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream'),
  stylus = require('gulp-stylus'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin');

var paths = {
  css: ['./styles/**/*.styl'],
  r_js: ['./scripts/index.jsx'],
  js: ['./scripts/**/*.js'],
};

gulp.task('clean', async done => {
  await del(['build']);
  done();
});

gulp.task('css', gulp.series('clean', function () {
  return gulp.src(paths.css)
    .pipe(stylus({ 'include css': true }))
    .pipe(gulp.dest('styles'));
}));

gulp.task('cssmin', gulp.series('css', function () {
  return gulp.src('styles/main.css')
    .pipe(cssmin())
    .pipe(gulp.dest('styles'));
}));

gulp.task('js', gulp.series('clean', function () {
  return browserify({
    entries: [paths.r_js],
    transform: [reactify],
    extensions: '.jsx'
  })
    .bundle()
    .pipe(source('scripts/bundle.js'))
    .pipe(gulp.dest('.'));
}));

gulp.task('uglify', gulp.series('js', function () {
  return gulp.src('scripts/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
}));

gulp.task('watch', function () {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.r_js, ['js']);
});

gulp.task('default', gulp.parallel('css', 'js'));
gulp.task('build', gulp.parallel('cssmin', 'uglify'));
