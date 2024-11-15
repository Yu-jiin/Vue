<script setup>
import { useCartStore } from '@/stores/cart';
import { useRouter } from 'vue-router';

const store = useCartStore();
const router = useRouter();

const goDetail = (product) => {
  router.push(`/${product.id}`);
}

const deleteToCart = (product) => {
  store.deleteToCart(product.id);
}
</script>

<template>
  <div>
    <h1>장바구니</h1>
    <div v-if="store.carts.length > 0" class="product-list">
      <div v-for="product in store.carts" :key="product.id" class="product-card">
        <img :src="product.image" alt="" class="product-img">
        <div class="product-detail">
          <h3>{{ product.title }}</h3>
          <p>가격 : ${{ product.price }}</p>
          <button @click="goDetail(product)">상세페이지</button>
          <button @click="deleteToCart(product)">장바구니에서 제거</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>텅..</p>
    </div>
  </div>
</template>

<style scoped>
.product-img {
  width: 100%;
}

.product-card {
  border: 1px solid black;
  width: 200px;
  padding: 15px;
}

.product-detail {
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
