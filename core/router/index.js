import { createRouter, createWebHistory } from 'vue-router'
import HejmPago from '../pago/Hejm.vue'

// Lingvo mod.
const lingvo= [
  {
    path: "tg",
    name: "tangut",
    component: ()=> import("../pago/lingvo/Tg.vue"),
    children:[
      {
        path: "u/:uid?",
        component: ()=> import("../pago/lingvo/Nv.vue")
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
    component: ()=> import("../pago/lingvo/Nv.vue")
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
      component: ()=> import('../pago/Serci.vue')
    },
    {
      path: '/pri',
      name: 'pri',
      component: ()=> import('../pago/Pri.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Pri.vue')
      // component: {template: "<div>Nula'z</div>"}
    }
  ]
})

export default router
