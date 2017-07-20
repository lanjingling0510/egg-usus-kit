'use strict';

const usus = require('usus');
const configuration = {
  inlineStyles: true,
};

let chrome;

function* launchChrome() {
  if (!chrome) {
    chrome = yield usus.launchChrome();
    configuration.chromePort = chrome.port;
  }
}

function unLaunchChrome() {
  console.log('杀掉chrome进程...');
  chrome.kill();
  chrome = null;
}

module.exports = {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  schedule: {
    interval: '10s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },

  * task(ctx) {
    console.log('预渲染页面...');

    let template;

    try {
      yield launchChrome();
      template = yield usus.render(
        'http://127.0.0.1:7001/prerender',
        configuration
      );
    } catch (err) {
      unLaunchChrome();
      yield launchChrome();
      template = yield usus.render(
        'http://127.0.0.1:7001/prerender',
        configuration
      );
    }

    if (ctx) ctx.app.cache = template;
    return template;
  },
};
