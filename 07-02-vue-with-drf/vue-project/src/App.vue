<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'ArticleView' }">Articles</RouterLink>
    |
      <RouterLink :to="{ name: 'SignUpView' }">SignUpPage</RouterLink>
    </nav>
    |
      <RouterLink :to="{ name: 'LogInView' }">LogInPage</RouterLink>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
