import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// pinia counter.js = 중앙저장소
//           defineStor()의 반환값 이름은 use와 store 사용 권장
export const useCounterStore = defineStore('counter', () => {

  // ref() === state
  const count = ref(0)

  // computed() === getters
  const doubleCount = computed(() => count.value * 2)

  // function() === actions
  function increment() {
    count.value++
  }

  // pinia 반드시 반환값 필요 
  return { count, doubleCount, increment }
})

// store에 state를 정의하지않으면 컴포넌트에서 새로 추가 불가능.. 