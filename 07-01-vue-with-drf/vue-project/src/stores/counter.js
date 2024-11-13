import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([
    {id: 1, title: 'Article 1', content: 'Content of Article 1'},
    {id: 2, title: 'Article 2', content: 'Content of Article 2'},
  ])
  
  return { articles }
}, { persist: true })
