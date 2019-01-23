export default [
  {
    path: "*",
    meta: {
      public: true
    },
    redirect: {
      path: "/exception/404"
    }
  },

  {
    path: "/login",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Login.vue`)
  },
  {
    path: "/register",
    meta: {
      public: true
    },
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Register.vue`)
  },

  //根目录重定向到Dashboard
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      path: "dashboard/workplace"
    }
  },

  // path:前端路由（浏览器路由）
  // meta:breadcrumb为true表示该页面开启面包屑
  // name:名称
  // component:加载哪个页面文件
  {
    path: "/dashboard/analysis",
    meta: { breadcrumb: true },
    name: "Analysis",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/dashboard/Analysis.vue`)
  },

  {
    path: "/dashboard/monitor",
    meta: { breadcrumb: true },
    name: "Monitor",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/dashboard/Monitor.vue`)
  },

  {
    path: "/dashboard/workplace",
    meta: { breadcrumb: true },
    name: "Workplace",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/dashboard/Workplace.vue`)
  },

  {
    path: "/form/basic-form",
    meta: { breadcrumb: true },
    name: "BasicForm",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/BasicForm.vue`)
  },

  {
    path: "/form/step-form",
    meta: { breadcrumb: true },
    name: "StepForm",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/StepForm.vue`)
  },

  {
    path: "/form/advanced-form",
    meta: { breadcrumb: true },
    name: "AdvancedForm",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/AdvancedForm.vue`)
  },

  {
    path: "/list/search-table",
    meta: { breadcrumb: true },
    name: "SearchTable",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/list/SearchTable.vue`)
  },

  {
    path: "/list/basic-list",
    meta: { breadcrumb: true },
    name: "BasicList",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/list/BasicList.vue`)
  },

  {
    path: "/list/card-list",
    meta: { breadcrumb: true },
    name: "CardList",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/list/CardList.vue`)
  },

  {
    path: "/list/search-list",
    meta: { breadcrumb: true },
    name: "SearchList",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/list/SearchList.vue`)
  },

  {
    path: "/profile/basic-profile",
    meta: { breadcrumb: true },
    name: "BasicProfile",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/profile/BasicProfile.vue`)
  },

  {
    path: "/profile/advanced-profile",
    meta: { breadcrumb: true },
    name: "AdvancedProfile",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/profile/AdvancedProfile.vue`)
  },

  {
    path: "/result/success",
    meta: { breadcrumb: true },
    name: "Success",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/result/Success.vue`)
  },

  {
    path: "/result/fail",
    meta: { breadcrumb: true },
    name: "Fail",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/result/Fail.vue`)
  },

  {
    path: "/exception/403",
    meta: { breadcrumb: true },
    name: "403",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/exception/403.vue`)
  },
  {
    path: "/exception/404",
    meta: { breadcrumb: true },
    name: "404",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/exception/404.vue`)
  },
  {
    path: "/exception/500",
    meta: { breadcrumb: true },
    name: "500",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/exception/500.vue`)
  },

  {
    path: "/account/center",
    meta: { breadcrumb: true },
    name: "AccountCenter",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/account/AccountCenter.vue`)
  },

  {
    path: "/account/settings",
    meta: { breadcrumb: true },
    name: "AccountSettings",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/account/AccountSettings.vue`)
  }
];
