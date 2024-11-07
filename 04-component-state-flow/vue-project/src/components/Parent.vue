
<template>
<div>
  <!-- Parent 에서 ParentChild에 보낼 props 작성 -->
   <!-- my-msg(props이름) = "message"(props값) -->
  <ParentChild 
  @some-event = "someCallback"
  @emit-args = "getNumbers"
  my-msg="message" 
  :dynamic-props="name"
  />
  <ParentItem
    v-for="item in items"
    :key="item.id"
    :my-prop="item"  
  />
</div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue';
import ParentItem from '@/components/ParentItem.vue';
import {ref} from 'vue'
const name = ref('Alice')

const items = ref([
  { id: 1, name:'사과' },
  { id: 2, name:'바나나' },
  { id: 3, name:'딸기' }
])

const someCallback = function() {
  console.log('ParentChild가 소리 질러요')
}

const getNumbers = function(...args) {
  console.log(args)
  console.log(`ParentChild가 전달한 추가 인자 ${args}를 수신 완`)
}
</script>

<style scoped>

</style>
