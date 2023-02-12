import { createRouter, createWebHistory } from 'vue-router'
import hejm from '../hejm/Hejm.vue'

const lingvo= [
  {
    path: "/tg",
    name: "tangut",
    component: ()=> import('../hejm/lingvo/Tangut.vue')
  },
  {
    path: "/nv",
    name: "nvs",
    component: ()=> import('../hejm/lingvo/Nvs.vue')
  },
  {
    path: "/q/:q?",
    name: "Qserci",
    component: ()=> import('../hejm/lingvo/Q.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hejm',
      component: hejm,
      // children: lingvo
    },
    ...lingvo,
    {
      path: '/serci/:q?',
      component: ()=> import('../hejm/Serci.vue')
    },
    {
      path: '/pri/:mark?',
      name: 'pri',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../hejm/Pri.vue')
    }
  ]
})

export default router
