<template lang="pug">
v-container#singleProduct(fluid style="height: 100%;")
  v-overlay(:value='!sell')
    h1 商品已下架。
  v-row.justify-center(style="height: 100%;").mb-5
    v-col.col-10.col-lg-5.d-flex.flex-column.justify-center
      v-carousel(hide-delimiters hide-delimiter-background show-arrows-on-hover)
        template(v-slot:prev='{ on, attrs }')
          v-icon(color='grey' v-bind='attrs' v-on='on') mdi-chevron-left
        template(v-slot:next='{ on, attrs }')
          v-icon(color='grey' v-bind='attrs' v-on='on') mdi-chevron-right
        v-carousel-item(v-for='(img, i) in image' :key='i' :src='img')
    v-col.col-10.col-lg-5.d-flex.flex-column.justify-center
      v-card.mx-auto(width='80%' flat)
        v-card-text.pa-0
          v-row
            v-col.col-12.pb-0
              span.text-h4.font-weight-bold {{ name }}
            v-col.col-12.pb-0
              span.text-h5 ${{ price }}
            v-col.col-12
              span.text-body-1(style='height: 100%; white-space: pre-wrap;') {{ description }}
            v-col.col-12.text-right.pb-0
              v-progress-linear(color='pink lighten-5' v-model='progress' rounded height='25' width='100%')
                strong {{ progress }}
              small 下單數達 {{ count }} 件，每件回饋 {{ coupon }} 點
          v-row
            v-col.col-12.col-md-2.font-weight-bold.d-flex.align-center
              span.pt-1 品項
            v-col.col-12.col-md-10
              v-btn-toggle(v-model='option' group color='red lighten-3')
                v-btn(v-for='option in options' :key='option' :value='option' small).pt-1
                  span.text-body-2 {{ option }}
          v-row
            v-col.col-12.col-md-2.font-weight-bold.d-flex.align-center
              span.pt-1 數量
            v-col.col-12.col-md-10.d-flex.align-center
              InputNumber(:rules="amountRules" v-model="amount") {{ amount }}
              v-spacer
              v-btn(plain @click='addcart') 加入購物車
</template>

<script>
import '@/scss/singleProduct.scss'
import InputNumber from '../components/InputNumber.vue'

export default {
  name: 'SingleProduct',
  components: { InputNumber },
  data () {
    return {
      name: '',
      price: '',
      description: '',
      image: [],
      sell: true,
      amount: 0,
      category: '',
      count: 0,
      coupon: 0,
      options: [],
      option: '',
      order_quantity: 0,
      amountRules: [
        v => !!v || '請輸入數量',
        v => (v && v >= 1) || '請輸入正確數量'
      ]
    }
  },
  computed: {
    progress () {
      if (this.order_quantity <= 0) {
        return 0 + '%'
      } else if (this.order_quantity >= this.count) {
        return 100 + '%'
      } else {
        return (this.order_quantity / this.count).toFixed(2) * 100 + '%'
      }
    }
  },
  methods: {
    add_option (option) {
      this.option = option
    },
    async addcart () {
      if (this.amount === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請輸入正確數量'
        })
        return
      }
      if (this.option === undefined || this.option.length === 0 || !this.option) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請選擇商品品項'
        })
        return
      }
      if (this.$store.state.jwt.token.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }
      try {
        await this.axios.post('/users/cart', {
          product: this.$route.params.id,
          option: this.option,
          amount: this.amount
        }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '成功購物車'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '加入購物車失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.category = data.result.category
      this.description = data.result.description
      this.image = data.result.image.map(r => `${process.env.VUE_APP_API}/files/${r}`).concat(data.result.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`))
      this.sell = data.result.sell
      this.count = data.result.count
      this.coupon = data.result.coupon
      this.options = data.result.options
      this.order_quantity = data.result.order_quantity
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
