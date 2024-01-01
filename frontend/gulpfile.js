const gulp = require('gulp');
const { plugins } = require('./postcss.config.js');

gulp.task('css', () => {
        const postcss = require('gulp-postcss');
        const sourcemaps = require('gulp-sourcemaps');

        return gulp
                .src('src/**/*.css')
                .pipe(sourcemaps.init())
                .pipe(postcss(plugins))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest('themes/custom/fabianmaria/css/'));
});

gulp.task('watch', () => {
        gulp.watch('src/**/*.css', gulp.series('css'));
        gulp.watch('themes/custom/fabianmaria/templates/**/*.twig', gulp.series('css'));
});