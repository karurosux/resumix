'use strict';

const base = require('./deploy-base');
const gulp = require('gulp');

const dependencies = base({
  server: 'carlos-cv',
  tmpPrefix: 'carlos_cv_',
});

gulp.task('default', dependencies);