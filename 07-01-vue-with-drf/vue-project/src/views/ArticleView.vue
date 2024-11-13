<template>
  <div>
    <h1>Article Page</h1>
    <ArticleList/>
  </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue';
import { useCounterStore } from '@/stores/counter';
import { onMounted } from 'vue';
const store = useCounterStore()
onMounted(() => {
  store.getArticles()
})
</script>

<style>

</style>
