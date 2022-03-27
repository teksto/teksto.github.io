import { createRouter, createWebHistory } from 'vue-router'
import HejmPago from '../pagoz/Hejm.vue'
import Tg from '../pagoz/lingvo/Tg.vue'

// Lingvo mod.
const lingvo= [
  {
    path: "tg",
    name: "tangut",
    // component: ()=> import("../pagoz/lingvo/Tg.vue"),
    component: Tg,
    children:[
      {
        path: "u/:uid?",
        // component: ()=> import("../pagoz/lingvo/Nv.vue")
        component: Tg
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
    component: Nv
  }
]

// serci mod.
const serci= {}

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
      path: '/serci',
      name: 'serci',
      component: ()=> import('../pagoz/Serci.vue')
    },
    {
      path: '/pri',
      name: 'pri',
      component: ()=> import('../pagoz/Pri.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Pri.vue')
      // component: {template: "<div>Nula'z</div>"}
    }
  ]
})

export default router
