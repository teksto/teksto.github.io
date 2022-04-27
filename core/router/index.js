import { createRouter, createWebHistory } from 'vue-router'
import HejmPago from '../pagoz/Hejm.vue'

// Lingvo mod.
const lingvo= [
  {
    path: "tg",
    name: "tangut",
    component: ()=> import("../pagoz/lingvo/Tg.vue"),
    children:[
      {
        path: "u/:uid?",
        component: ()=> import("../pagoz/lingvo/Tg.vue")
      }
    ]
  },
  {
    path: "nv/:uid?",
    name: "nv",
    meta: {
      title: '女书',
      level: 3,
      hidden: false
    },
    component: ()=> import("../pagoz/lingvo/Nv.vue")
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hejm',
      alias: "/go/home",
      redirect: {name: "tangut"},
      component: HejmPago,
      children: lingvo
    },
    {
      path: '/serci/:q?',
      name: 'serci',
      component: ()=> import('../pagoz/Serci.vue')
    },
    {
      path: '/pri/:pg?',
      name: 'pri',
      component: ()=> import('../pagoz/Pri.vue')
    }
  ]
})

export default router
