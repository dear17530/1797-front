<template lang="pug">
v-container#cart.mt-2
  v-row(v-for='(item, index) in cart' :key='index').align-center.justify-center.product.mx-1.my-3
    v-col.col-1.d-flex.align-center
      v-icon(color='grey lighten-2' @click='delProduct(index)') mdi-close-circle
    v-col.col-4.col-md-2
      v-img(:src="item.image[0]" aspect-ratio="1")
    v-col.col-7.col-md-8
      v-row.justify-center
        v-col.col-12.mb-2.mb-md-0.col-md-6.col-lg-4.py-0.pt-md-2
          span.mr-1 {{ item.name }}
          span.option {{ item.option }}
        v-col.col-12.col-md-1.py-0.pt-md-2
          span ${{ item.price }}
        v-col.col-7.col-md-3.py-0
          InputNumber(:rules="amountRules" v-model="item.amount") {{ item.amount }}
        v-col.col-5.col-md-2.py-0.d-flex.align-end.pt-md-2
          span.pb-1 ${{ item.amount * item.price }}
  v-row.mt-4
    v-col.col-12(v-if='!paymentForm')
      v-row.text-center
        v-col(cols='6') 金額
        v-col(cols='6') {{ subtotal }}
        v-col(cols='6') 可使用點數
        v-col(cols='6') {{ coupon }}
        v-col(cols='6').d-flex.justify-center.flex-column 使用點數
        v-col(cols='6')
          v-row.d-flex.align-center.flex-column
            v-col(cols='8' md='4')
              InputNumber(:rules="redeem_Rules" v-model="order.redeem")
        v-col(cols='6') 總金額
        v-col(cols='6')
          span(v-model='countSum') {{ countSum }}
        v-col(cols='12')
          v-btn.px-8(color='#f7e7ef' @click='showPaymentForm') 送出
    v-col.col-12(v-if='paymentForm').py-0
      v-card(color='#ebedee' flat).pa-5
        v-card-text
          v-form(v-model="valid" ref="form")
            v-row
              v-col(cols='6').pb-0
                span 運送方式
              v-col(cols='6').pb-0
                span 電話號碼
            v-row
              v-col(cols='6').pt-1.pb-0
                v-select.pt-0(background-color='white' solo dense v-model='order.delivery_method' :items='delivery_methods' required)
              v-col(cols='6').pt-1.pb-0
                v-text-field.pt-0(background-color='white' solo dense v-model='order.contact_number' :rules='contact_number_Rules' required)
            v-row
              v-col(cols='6').pb-0
                span 付款方式
              v-col(cols='6' v-if='order.payment_method === "刷卡"').pb-0
                span 卡號
            v-row
              v-col(cols='6').pt-1.pb-0
                v-select.pt-0(background-color='white' solo dense v-model='order.payment_method' :items='payment_methods' required)
              v-col(cols='6' v-if='order.payment_method === "刷卡"').pb-0
                span {{ order.valueFields.cardNumber }}
            v-row
              v-col(cols='12').pb-0
                span 地址
              v-col(cols='12').pt-1.pb-0
                v-text-field.pt-0(background-color='white' solo dense v-model='order.address' :rules='address_Rules' required)
        v-card-actions
          v-spacer
          v-btn.mr-2.mb-1(plain @click='cancelOrder') 取消
          v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='submitOrder') 送出
  v-dialog(v-model='dialog' max-width='600px')
    v-card(color='#ebedee' flat).pa-5
      v-card-title
        span.text-h5.font-weight-bold 信用卡資料
      v-card-text
        v-form(v-model="valid" ref="form2")
          v-row
            v-col(cols='12')
              vue-paycard(:value-fields='order.valueFields')
          v-row
            v-col(cols='12').pb-0
              span 卡片號碼
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='order.valueFields.cardNumber' :rules='cardNumber_Rules' required data-card-field :id='inputFields.cardNumber')
          v-row
            v-col(cols='12').pb-0
              span 持有者姓名
            v-col(cols='12').pt-1.pb-0
              v-text-field.pt-0(background-color='white' solo dense v-model='order.valueFields.cardName' :rules='cardName_Rules' required data-card-field :id='inputFields.cardName')
          v-row
            v-col(cols='8').pb-0.pt-0
              span 卡片到期日
            v-col(cols='4').pb-0.pt-0
              span 卡片驗證碼
          v-row
            v-col(cols='4').pt-1.pb-0
              v-select(background-color='white' solo dense v-model='order.valueFields.cardMonth' :items='month' required data-card-field :id='inputFields.cardMonth')
            v-col(cols='4').pt-1.pb-0
              v-select(background-color='white' solo dense v-model='order.valueFields.cardYear' :items='year' required data-card-field :id='inputFields.cardYear')
            v-col(cols='4').pt-1.pb-0
              v-text-field.pt-0(background-color='white' solo dense v-model='order.valueFields.cardCvv' :rules='cardCvv_Rules' required data-card-field :id='inputFields.cardCvv')
      v-card-actions
        v-spacer
        v-btn.mr-2.mb-1(plain @click='paycardCancel') 取消
        v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='paycardSave') 儲存
</template>

<script>
import '@/scss/cart.scss'
import InputNumber from '../components/InputNumber.vue'

export default {
  name: 'cart',
  components: { InputNumber },
  data () {
    return {
      valid: true,
      cart: [],
      order: {
        date: '',
        delivery_method: '宅配',
        address: '',
        contact_number: '',
        payment: false,
        payment_method: '貨到付款',
        valueFields: {
          cardNumber: '',
          cardName: '',
          cardMonth: '01',
          cardYear: '2022',
          cardCvv: ''
        },
        redeem: 0,
        coupon: 0,
        sum: 0,
        delivery_number: '',
        state: '待出貨'
      },
      redeem_Rules: [
        v => !!v || '請輸入數量',
        v => (v && v >= 0 && v <= 10) || '請輸入正確數量'
      ],
      amountRules: [
        v => !!v || '請輸入數量',
        v => (v && v >= 1) || '請輸入正確數量'
      ],
      delivery_methodRules: [
        v => !!v || '請輸入運送方式',
        v => (v && v >= 1) || '請輸入正確方式'
      ],
      address_Rules: [
        v => !!v || '請輸入地址',
        v => (v && v.length >= 1) || '請輸入正確地址'
      ],
      contact_number_Rules: [
        v => !!v || '請輸入電話號碼',
        v => (v && v.length >= 10) || '請輸入有效的號碼'
      ],
      cardNumber_Rules: [
        v => !!v || '請輸入卡號',
        v => (v && v.length === 16) || '請輸入有效的卡號'
      ],
      cardName_Rules: [
        v => !!v || '請輸入姓名',
        v => (v && v.length >= 1) || '請輸入有效的姓名'
      ],
      cardCvv_Rules: [
        v => !!v || '請輸入驗證碼',
        v => (v && v.length >= 3) || '請輸入有效的驗證碼'
      ],
      editedIndex: -1,
      delivery_methods: ['宅配'],
      payment_methods: ['刷卡', '貨到付款'],
      month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      year: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
      paymentForm: false,
      coupon: 0,
      dialog: false,
      inputFields: {
        cardNumber: 'v-card-number',
        cardName: 'v-card-name',
        cardMonth: 'v-card-month',
        cardYear: 'v-card-year',
        cardCvv: 'v-card-cvv'
      }
    }
  },
  computed: {
    subtotal () {
      return this.cart.length === 0 ? 0 : this.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0)
    },
    countSum () {
      return `${this.subtotal}` - `${this.order.redeem}`
    }
  },
  methods: {
    paycardSave () {
      if (!this.$refs.form2.validate()) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請填寫資料'
        })
        return
      }
      this.dialog = false
    },
    paycardCancel () {
      this.order.valueFields = {
        cardNumber: '',
        cardName: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      }
      this.dialog = false
      this.order.payment_method = '貨到付款'
    },
    async submitOrder () {
      if (!this.$refs.form.validate()) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請填寫資料'
        })
        return
      }
      try {
        if (this.order.payment_method === '刷卡') {
          this.order.payment = true
        } else {
          this.order.payment = false
        }
        await this.axios.post('/orders', this.order, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '交易成功',
          text: '請至會員中心查詢訂單'
        })
        this.paymentForm = false
        this.cart = []
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請填寫資料'
        })
      }
      try {
        this.order.coupon = this.coupon - this.order.redeem
        await this.axios.patch('/users', { _id: this.$store.state.user._id, coupon: this.order.coupon }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '點數扣除錯誤'
        })
      }
    },
    cancelOrder () {
      this.paymentForm = false
    },
    showPaymentForm () {
      this.paymentForm = true
    },
    async editProduct (index) {
      try {
        await this.axios.patch('/users/cart', { account: this.$store.state.user.account, product: this.cart[index]._id, amount: this.cart[index].amount, option: this.cart[index].option }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '編輯商品失敗'
        })
      }
    },
    async delProduct (index) {
      try {
        await this.axios.patch('/users/cart', { account: this.$store.state.user.account, product: this.cart[index]._id, amount: 0, option: this.cart[index].option }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.cart.splice(index, 1)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除商品失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/cart', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.coupon = data.result.coupon
      if (data.result.cart.length === 0) {
        this.order.redeem = 0
      } else {
        if (data.result.coupon >= 50) {
          this.order.redeem = 50
        } else {
          this.order.redeem = data.result.coupon
        }
      }
      this.cart = data.result.cart.map(item => {
        item = { ...item.product, amount: item.amount, option: item.option }
        if (item.image.length === 0) {
          item.image = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          item.image = item.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        item.edit = false
        item.amountModel = item.amount
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得購物車失敗'
      })
    }
  },
  watch: {
    cart: {
      handler: function () {
        if (this.cart.length >= 1) {
          let index = 0
          for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].amountModel !== this.cart[i].amount) {
              index = i
            }
          }
          this.editProduct(index)
        }
      },
      deep: true
    },
    order: {
      handler: function () {
        if (this.order.redeem > this.coupon) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: `您最多只能折抵${this.coupon}點`
          })
          this.order.redeem = this.coupon
        } else if (this.order.redeem > 50) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '同筆訂單最多只能折抵 50 點'
          })
          this.order.redeem = 50
        }
        if (this.order.payment_method === '刷卡' && this.order.valueFields.cardNumber.length === 0) {
          this.dialog = true
        }
      },
      deep: true
    },
    countSum: {
      handler: function () {
        this.order.sum = this.countSum
      },
      deep: true
    }
  }
}
</script>
<style>
.card-item .card-item__side {
  box-shadow: none;
}
</style>
