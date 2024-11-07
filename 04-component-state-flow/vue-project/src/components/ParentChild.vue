<template>
  <div>
    <p>{{ myMsg }}</p>
    <ParentGrandChild 
      :my-msg="myMsg"/>
  </div>
</template>

<script setup>
import ParentGrandChild from '@/components/ParentGrandChild.vue';

// Parent에서 보낸 props 선언
// 1. 문자열 배열을 사용한 선언
// js가 -을 기준으로 대문자로 바꿔서 my-msg = myMsg
// defineProps(['myMsg'])
// 2. 객체를 사용한 선언
defineProps({
  myMsg: String
})
// 객체 선언 문법 사용 권장 

// html에서는 my-msg와 같은 kebab-case 권장
// js에서는 myMsg와 같은 camelCase 권장
</script>

<style scoped>

</style>
  