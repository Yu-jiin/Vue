<script setup>
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const store = useCartStore()
onMounted(() => {
  store.getProducts()
})
const router = useRouter()
const goDetail = (product) => {
  router.push(`/${product.id}`)
}

const addToCart = (product) => {
  store.addToCart(product)
  router.push('/cart')
}
</script>

<template>
  <div>
    <h1>상품 목록 리스트</h1>
  </div>
  <div class="product-list">
    <div>
      <div v-for="product in store.products"
      :key="product.id" class="product-card"
      >
      <img :src="product.image" alt="" class="product-img">
      <div class="product-detail">
        <h3>{{ product.title }}</h3>
        <p>가격 : ${{ product.price }}</p>
        <button @click="goDetail(product)">상세페이지</button>
        <button @click="addToCart(product)">장바구니</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.product-img {
  width: 100%;
}

.product-card{
  border: 1px solid black;
  width: 200px;
  padding: 15px;
}

.product-detail{
  text-align: center;
}

.produt-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>