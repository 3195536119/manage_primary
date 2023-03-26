import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/login',
  name: 'Login',
  component: () => import('../components/login')
},{
  path:'/'
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
