import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  // 여러개의 컴포넌트에서 활용하는 데이터만
  // store로 관리해야 한다.
  let products = ref([])
  let carts = ref([])

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res)
        products.value = res.data
      }) .catch((err) => {
        console.log(err)
      })
  }

  // 상세페이지 상품 조회
  const getProductById = (id) => {
    const product = products.value.find((element) => {
      return element.id == id;
    })
    return product
  }
  
  // 장바구니 추가
  const addToCart = (product) => {
    // 장바구니에 포함되지 않았다면 추가
    const index = carts.value.findIndex((element) => element.id === product.id)
    if (index === -1){
      alert('장바구니 페이지로 이동합니다.')
      carts.value.push(product)
    } else {
      alert('이미 추가된 상품입니다.')
    }
  }
  // 장바구니 삭제
  const deleteToCart = (productId) => {
    // id를 통해서 해당 상품의 index 찾기
    const index = carts.value.findIndex((element) => element.id === productId)
    if(index !== -1){
      carts.value.splice(index, 1)
    }
  }
  // 장바구니에 특정 상품 포함 ?


  return { getProducts, products, carts, getProductById, addToCart, deleteToCart }
}, {persist: true},)
