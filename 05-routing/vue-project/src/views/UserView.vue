
<template>
  <div>
    <h1>UserView</h1>
    <h2>{{ $route.params.id }}번 User 페이지</h2>
    <h2>{{ userId }}번 User 페이지</h2>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const userId = ref(route.params.id)
</script>

<style scoped>
</style>
