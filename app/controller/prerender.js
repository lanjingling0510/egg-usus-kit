'use strict';

module.exports = app => {
  class PrerenderController extends app.Controller {
    * index(ctx) {
      yield ctx.render('index.tpl');
    }
  }
  return PrerenderController;
};
