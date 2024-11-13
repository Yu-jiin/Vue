import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'

  // DRF로 전체 게시글 요청을 보내고, 응답을 받아 articles에 저장하는 함수
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`
    })
      .then(res => {
        // 응답받은 배열 저장 
        // pinia-plugin-persistedstate에 의해 브라우저 Local Stoarge에 저장
        articles.value = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
 
  
  return { articles, API_URL, getArticles }
}, { persist: true })
