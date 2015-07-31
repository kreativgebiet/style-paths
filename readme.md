# style-paths

Find the paths of every bower_component with a .sass or .scss file (for use with sass' includePath option)

## Installation

```
npm install --save-dev style-paths
```

## Usage

For example usage with `gulp-sass` use this plugin for getting the path array for the `includePath` option that `gulp-sass` offers.

```js
gulp.task('styles', function() {
  gulp.src('style.scss')
    .pipe(sass({
      includePaths: stylePaths(['scss, sass'])
    }))
    .pipe(gulp.dest('./'));
});
```

##### This snippet is supported by [Kreativgebiet](http://kreativgebiet.com)
