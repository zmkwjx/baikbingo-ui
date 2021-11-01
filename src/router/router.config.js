export default [
  {
    path: "/",
    component: () => import("@/layout/main/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views/home/index.vue")
      },
      {
        path: "/docs",
        name: "docs",
        meta: {
          title: "说明手册"
        },
        component: () => import("@/views/docs/index.vue")
      },
      {
        path: "/development",
        name: "development",
        meta: {
          title: "开发面板"
        },
        component: () => import("@/views/development/index.vue")
      }
    ]
  }
];
