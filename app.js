'use strict';

const prerender = require('./app/schedule/prerender');

module.exports = app => {
  app.beforeStart(function* () {
    app.cache = yield prerender.task();
  });
};
