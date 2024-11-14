import { createRouter, createWebHistory } from 'vue-router'
import ArticleView from '@/views/ArticleView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import { useCounterStore } from '@/stores/counter'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ArticleView',
      component: ArticleView
    },
    {
      path: '/articles/:id',
      name: 'DetailView',
      component: DetailView
    },
    {
      path: '/create',
      name: 'CreateView',
      component: CreateView
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView
    }
  ]
})


// 전역가드는 요기에 작성해라이
router.beforeEach((to, from) => {
  // 이동 목적지가 메인이면서 로그인 상태가 아니라면
  // 로그인 페이지로 보낸다 
  const store = useCounterStore()
  if (to.name === 'ArticleView' && !store.isLogin){
    window.alert('로그인이 필요합니다.')
    return {name: 'LogInView'}
  }
  if ((to.name === 'SignUpView' || to.name === 'LogInView') && (store.isLogin)){
    window.alert('이미 로그인이 되어있습니다..')
    return {name: 'ArticleView'}
  }
})

export default router
