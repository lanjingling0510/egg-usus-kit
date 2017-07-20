'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      console.log('请求index....');
      if (!ctx.app.cache) {
        yield ctx.render('index.tpl');
        return;
      }

      ctx.body = ctx.app.cache;
    }
  }
  return HomeController;
};
