
<template>
  <div>
    <h1>UserView</h1>
    <RouterLink :to="{ name: 'user-profile'}">Profile</RouterLink>
    <RouterLink :to="{ name: 'user-posts'}">Posts</RouterLink>
    <h2>{{ $route.params.id }}번 User 페이지</h2>
    <h2>{{ userId }}번 User 페이지</h2>
    <button @click="goHome">Home !</button>
    <button @click="routeUpdate">100번 유저 페이지</button>
    <hr>
    <RouterView/>
  </div>
</template>

<script setup>
import {onBeforeUpdate, ref} from 'vue'
import { useRoute, RouterLink, RouterView, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
const route = useRoute()
const userId = ref(route.params.id)
const router = useRouter()
const goHome = function() {
  router.push({ name: 'home'})
}
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('정말 떠나실건가요 ?')
  if (answer===false) {
    return false
  }
})

const routeUpdate = function () {
  router.push({ name:'user', params:{ id: 100 } })
}

onBeforeRouteUpdate((to, from) => {
  userId.value = to.params.id
})
</script>

<style scoped>
</style>
