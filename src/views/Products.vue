<template lang='pug'>
v-container#product
  v-tabs(v-model='tab' grow v-if='$vuetify.breakpoint.lgAndUp')
    v-tabs-slider(color='#ebedee')
    v-tab(v-for='items in itemsCategory' :key='items' @click='change(items)') {{ items }}
  v-row(v-else).my-4.justify-center
    v-col.col-3.col-sm-2.col-md-2(v-for='items in itemsCategory' :key='items').text-center
      v-btn(@click='change(items)' small rounded)
        span.text-button {{ items }}
  v-row(v-if="items === '所有商品'").ma-0
    v-col(cols='6' md='6' lg='4' v-for="product in products" :key="product._id")
      router-link(:to="'/product/'+product._id" style='text-decoration: none;')
        ProductCard(:product="product")
  v-row(v-else).ma-0
    v-col(cols='6' md='6' lg='4' v-for="product in showproducts" :key="product._id")
      router-link(:to="'/product/'+product._id" style='text-decoration: none;')
        ProductCard(:product="product")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Products',
  data () {
    return {
      tab: null,
      products: [],
      showproducts: [],
      items: '所有商品',
      itemsCategory: ['所有商品', '生活用品', '涮嘴零食', '寵物用品', '美妝保健', '3C用品'],
      category: ''
    }
  },
  components: {
    ProductCard
  },
  methods: {
    change (items) {
      if (items === '所有商品') {
        this.showproducts = this.products
        this.items = '所有商品'
      } else {
        this.items = items
        const filterItems = this.products.filter(function (item) {
          return item.category === items
        })
        this.showproducts = filterItems
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        if (product.image.length > 0) {
          product.image = product.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          product.image = product.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        return product
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
