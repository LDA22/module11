import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', component: AboutView },
    { path: '/quotes', component: HelloWorld },
    { path: '/contact', component: ContactView },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

export default router
