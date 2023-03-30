/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 15:42:07
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-30 09:53:41
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/login',
  component: () => import('../views/login')
}, {
  path: '/',
  component: () => import('../components/layout.vue'),
  children: [{
    path: 'dash',
    component: () => import('../views/dash/index.vue')
  }, {
    path: 'userManage',
    component: () => import('../views/userManage.vue')
  }]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
