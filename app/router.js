'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/prerender', 'prerender.index');
};
