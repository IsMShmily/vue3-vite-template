import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '@/views/Tabs/TabsView.vue'
import HomeView from '@/views/Tabs/home/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        {
          name: 'home',
          path: '/home',
          component: HomeView,
        },
        {
          name: 'me',
          path: '/me',
          component: () => import('@/views/Tabs/me/MeView.vue'),
        },
        {
          name: 'order',
          path: '/order',
          component: () => import('@/views/Tabs/order/OrderView.vue'),
        },
      ],
    },
  ],
})

export default router
