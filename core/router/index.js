import { createRouter, createWebHashHistory } from 'vue-router'

// 默认主路由。
const rPath= [
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
        component: ()=> import("../pago/lingvo/Tangut.vue"),
        children: [
          {
            path: "u",
            component: {template: `<h1>Uez</h1>`}
          },
          {
            path: "nula",
            component: {template: `<h1>????</h1>`}
          }
        ]
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
        path: "nv/:uid?",
        name: "nvs",
        component: ()=> import("../pago/lingvo/Nv.vue")
      },
      {
        path: "ph/:uid?",
        name: "phagpa",
        component: {template: `<h1>女书</h1>`}
      },
      {
        path: "square/:uid?",
        name: "square",
        component: {template: `<h1>喃</h1>`}
      },
      {
        path: "seal/:uid?",
        name: "seal",
        component: {template: `<h1>篆</h1>`}
      }
    ]
  },
  {
    path: "/search/:q?",
    name: "serci",
    alias: "/go/search",
    component: ()=> import("../pago/serci/Serci.vue")
  },
  {
    path: "/spli",
    name: "splicing",
    alias: "/go/spli",
    // component: ()=> import("../pago/ilo/Splikado.vue")
    component: {template: `<h1>Splicing.</h1>`}
  },
  {
    path: "/about",
    name: "pri",
    alias: "/go/about",
    component: ()=> import("../pago/pri/Pri.vue")
  },
  {
    path: "/cca",
    name: "copyright",
    component: ()=> import("../pago/pri/Cca.vue")
  }
]

const router= createRouter({
  history: createWebHashHistory(),
  routes: rPath
})

export default router