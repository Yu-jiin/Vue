<template>
  <div>
    <span @click="store.updateTodo(todo.id)" 
          :class="{'is-done' : todo.isDone}"
    >
      {{todo.text}}
    </span>
    <!-- 얘는 직접호출 .. ! create는 간접호출  -->
    <button @click="store.deleteTodo(todo.id)">DELETE</button>
  </div>
</template>

<script setup>
// 삭제를 위한 id 전달
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()

defineProps({
  todo: Object
})
</script>

<style scoped>
.is-done {
  text-decoration: line-through;
}
</style>