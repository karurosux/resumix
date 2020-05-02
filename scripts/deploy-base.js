'use strict';
const gulp = require('gulp');
const shell = require('gulp-shell');
const callback = require('gulp-fncallback');
const fs = require('fs');
const path = require('path');
const sync = require('gulp-sync')(gulp);
const tmp = require('tmp');
const folderScanner = require('folder-scanner');
const rename = require('gulp-rename');

const log = console.log;

module.exports = (
  config = {
    tmpPrefix: 'build_',
    server: null,
    env: 'dev'
  }
) => {
  if (config.server === null) {
    throw new Error('server can not be null.');
  }

  const currentDirectory = path.join(process.cwd(), '../');
  const tmpDir = tmp.dirSync({
    prefix: config.tmpPrefix
  });

  const opt = {
    server: config.server,
    temp: tmpDir.name
  };

  gulp.task('heroku-login', shell.task('heroku login'));

  gulp.task('copy-index', () => {
    process.chdir(currentDirectory);
    return gulp
      .src(['build/index.html'])
      .pipe(rename('index.php'))
      .pipe(gulp.dest(tmpDir.name));
  });

  gulp.task('build-frontend-app', () => {
    process.chdir(currentDirectory);
    return (
      gulp
        .src(path.join(currentDirectory, 'package.json'), {
          read: false
        })
        .pipe(
          shell([`npm run build`])
        )
    );
  });

  gulp.task('configure-folder', () => {
    process.chdir(opt.temp);
    return (
      gulp
        .src(path.join(currentDirectory, 'package.json'), {
          read: false
        })
        .pipe(
          shell(['git init', `heroku git:remote -a ${opt.server}`])
        )
    );
  });

  gulp.task('copy-sources', () => {
    process.chdir(path.join(currentDirectory, 'build'));
    return gulp
      .src([
        '**/*',
        ".htaccess",
        '!./node_modules/**',
        '!./scripts/**',
        '!./.vscode/**',
        '!index.html'
      ])
      .pipe(gulp.dest(opt.temp));
  });

  gulp.task('deploy', () => {
    process.chdir(opt.temp);
    return gulp
      .src(path.join(__dirname, '../package.json'), {
        read: false
      })
      .pipe(
        shell([
          'git add .',
          'git commit -am "' + new Date().toString() + '"',
          'git push -f heroku master'
        ])
      );
  });

  gulp.task('final-clean', () => {
    process.chdir(opt.temp);
    return gulp.src('./package.json').pipe(
      callback((a, b, cb) => {
        const scanned = folderScanner.scanPath(opt.temp);
        scanned.forEach((file) => {
          log('deleting temp: -----> ', file);
          fs.unlinkSync(file);
        });
        log('Done...');
      })
    );
  });

  let response;
  try {
    response = sync.sync([
      'build-frontend-app',
      'configure-folder',
      'copy-sources',
      'copy-index',
      'deploy',
    ]);
  } catch (e) {
    log('error: ', e);
  }

  return response;
};
