import { ref, computed, isReadonly } from 'vue'
import { defineStore } from 'pinia'

// pinia counter.js = 중앙저장소
//           defineStor()의 반환값 이름은 use와 store 사용 권장
export const useCounterStore = defineStore('counter', () => {
  // ref() === state
  // computed() === getters
  // function() === actions

  let id = 0
  const todos = ref([
    {id: id++, text: '할 일 1', isDone: false},
    {id: id++, text: '할 일 2', isDone: false},
  ])

  // todo CREATE
  const addTodo = function (todoText) {
    todos.value.push({
      id: id++,
      text: todoText,
      isDone: false
    })
  }

  // todo DELETE
  const deleteTodo = function (todoId) {
    const index = todos.value.findIndex((todo) => todo.id === todoId)
    todos.value.splice(index, 1)
    console.log('DELETE')
  }

  // todo UPDATE 
  const updateTodo = function(todoId) {
    // map = 배열 리턴 
    todos.value = todos.value.map((todo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    console.log('update')
  }

  // 완료된 todo 개수 계산
  const doneTodosCount = computed(() => {
    const doneTodos = todos.value.filter((todo) => todo.isDone)
    return doneTodos.length
  })

  // pinia 반드시 반환값 필요 
  return { todos, addTodo, deleteTodo, updateTodo, doneTodosCount }
}, {persist: true})

// store에 state를 정의하지않으면 컴포넌트에서 새로 추가 불가능.. 