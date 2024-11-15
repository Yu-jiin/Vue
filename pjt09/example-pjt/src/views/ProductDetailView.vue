
<script setup>
import { useCartStore } from '@/stores/cart';
import { useRoute } from 'vue-router';
const route = useRoute()
const productId = route.params.product_id
const store = useCartStore()
const product = store.getProductById(productId)
</script>


<template>
  <div>
    <h1>상품 상세페이지</h1>
    <div v-if="product">
      <img :src="product.image" alt="" width="200px">
      <h3>{{ product.title }}</h3>
      <p>가격 : ${{ product.price }}</p>
      <p>카테고리 : {{ product.category }}</p>
    </div>
    <div v-else>
      <p>Loading..</p>
    </div>
  </div>
</template>

<style scoped>
</style>