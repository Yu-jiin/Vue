import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserProfile from '@/components/UserProfile.vue'
import LoginView from '@/views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      children: [
        { path: '', name: 'user', component: UserProfile },
        { path: 'profile', name: 'user-profile', component: UserProfile },
        { path: 'posts', name: 'user-posts', component: UserPosts },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        if (isAuthenticated === true) {
          console.log('이미 로그인 상태입니다.')
          return {name : 'home'}
        }
      }
    },
  ],
})

// router.beforeEach((to, from) => {
//   console.log(to)
//   console.log(from)
//   // 로그인이 되어있지않고, 이동하고자 하는 페이지가 login 아니라면
//   if(!isAuthenticated && to.name !== 'login') {
//     console.log('로그인이 필요합니다.')
//     return {name : 'login'}
//   }
// })

export default router
