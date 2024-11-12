<template>
  <div>
    <form @submit.prevent="createTodo(todoText)" ref="formElem">
      <input type="text" v-model="todoText">
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const todoText = ref('')
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
// 중앙 저장소에 addTodo 액션을 직접 호출해도 되지만
// 굳이 createTodo를 만들어서 호출하는 이유는
// addTodo 호출 전 후로 추가 로직을 작성할 수 있기 때문
const createTodo = function(todoText){
  store.addTodo(todoText)
  formElem.value.reset()
}
// input 데이터 초기화
const formElem = ref(null)

</script>

<style scoped>
</style>