import { createRouter, createWebHistory } from 'vue-router'
import BoardList from '@/views/board/BoardList.vue'
import SignUp from '@/views/member/SignUp.vue'
import Login from '@/views/member/Login.vue'
import Notice from '@/views/notice/NoticeList.vue'
import KakaoMap from '@/views/trip/KakaoMap.vue'
import Airplane from '@/views/airplane/Airplane.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/KakaoMap',
      name: 'KakaoMap',
      component: KakaoMap
    },
    {
      path: '/Airplane',
      name: 'Airplane',
      component: Airplane
    }
  ]
})

export default router
