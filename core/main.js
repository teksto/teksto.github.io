import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* router main dome.
import { createRouter,createWebHashHistory } from 'vue-router'
const router= createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "hejm",
      component: ()=> import("./pago/Hejm.vue")
    },
    {
      path: "/about",
      name: "pri",
      component: ()=> import("./pago/pri/Pri.vue")
    },
    {
      path: "/cca",
      name: "cca",
      component: ()=> import("./pago/pri/Cca.vue")
    },
  ]
})
*/

createApp(App)
  .use(router)
  .mount('#app')

// Serviceworker.
// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('sw.js')
// }