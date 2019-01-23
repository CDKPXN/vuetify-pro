import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 初始化路由，这里采用的hash模式
// 使用的路由定义在path文件中

// 在SPA应用中，更建议使用hash模式：
// 1、hash 模式下，仅 hash 符号之前的内容会被包含在请求中，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
// 2、history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，。如果后端缺少路由处理，将返回 404 错误。

Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "hash",
  linkActiveClass: "active",
  routes: paths
});
// router gards
router.beforeEach((to, from, next) => {
  window.console.log(to, from);
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  window.console.log(to, from);
  NProgress.done();
});

export default router;
