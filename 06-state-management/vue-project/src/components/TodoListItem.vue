<template>
  <div>
    {{todo.text}}
  </div>
</template>

<script setup>
defineProps({
  todo: Object
})
</script>

<style scoped>
</style>