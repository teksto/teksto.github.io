import { createRouter, createWebHashHistory } from 'vue-router'

// 补充路由。
// const rPath= []

// 默认主路由。
const router= createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "hejm",
      alias: "/go/home",
      redirect: {name: "tangut"},
      component: ()=> import("../pago/Hejm.vue"),
      children: [
        {
          path: "tg/:uid?",
          name: "tangut",
          component: ()=> import("../pago/lingvo/Tg.vue"),
          children: [
            {
              path: "u/:uid?",
              component: {template: `<h1>:{{$route.params.uid}}</h1>`}
            },
            {
              path: "nula",
              component: {template: `<h1>Nula'z</h1>`}
            }
          ]
        },
        {
          path: "nv/:uid?",
          name: "nv",
          component: ()=> import("../pago/lingvo/Nv.vue")
        },
        {
          path: "kh/:uid?",
          name: "khitan",
          component: {template: `<h1>Khitan</h1>`}
        },
        {
          path: "jc/:uid?",
          name: "jurchen",
          component: {template: `<h1>Jurchen</h1>`}
        },
        {
          path: "ph/:uid?",
          name: "phagpa",
          component: {template: `<h1>八思巴字母</h1>`}
        },
        {
          path: "square/:uid?",
          name: "square",
          component: {template: `<h1>喃字族整理中……</h1>`}
        },
        {
          path: "seal/:uid?",
          name: "seal",
          component: {template: `<h1>篆文内容整理中……</h1>`}
        },
        {
          path: "jzp/",
          name: "jzp",
          component: {template: `<h1>简字谱字体设计中……</h1>`}
        },
      ]
    },
    {
      path: "/search/:q?",
      name: "serci",
      alias: "/go/search",
      component: ()=> import("../pago/Serci.vue")
    },
    {
      path: "/about",
      name: "pri",
      alias: "/go/about",
      component: ()=> import("../pago/Pri.vue")
    },
    {
      path: "/cca",
      name: "copyright",
      component: ()=> import("../pago/alia/Cca.vue")
    }
  ]
})

export default router