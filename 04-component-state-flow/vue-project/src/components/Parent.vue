
<template>
<div>
  <!-- Parent 에서 ParentChild에 보낼 props 작성 -->
   <!-- my-msg(props이름) = "message"(props값) -->
  <ParentChild my-msg="message"/>
</div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue';
</script>

<style scoped>

</style>
