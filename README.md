# egg-usus-kit



## QuickStart

<!-- add docs here for user -->
预渲染SPA应用，为了SEO和提升页面的加载速度。不改变客户端任何一行代码。


---
服务器渲染，ssr方案这两年专门解决这个问题，这种方案client代码和server代码需要共用重复的组件，开发时需要考虑公用组件在服务器环境和客户端环境下都能运行，且渲染保持一致。

而[usus](https://github.com/gajus/usus)的利用 [Chrome Debugging Protocol](https://chromedevtools.github.io/devtools-protocol/) (CDP)，旨在使用后台作业生成静态版本的网站，更多可扩展的选项是使用后台作业生成网页的静态版本，并为用户提供预呈现的渲染模板。

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org