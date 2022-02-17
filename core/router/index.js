import { createRouter, createWebHistory } from 'vue-router'
import HejmPago from '../pago/Hejm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HejmPago
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Pri.vue')
      component: { template: `<h1>Pri</h1>` }
    }
  ]
})

export default router
