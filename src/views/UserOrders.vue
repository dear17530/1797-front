<template lang='pug'>
#userorders.mt-4.d-flex.justify-center
  div
    v-data-table(:headers='headers' :items='orders' :expanded='expanded' item-key='_id' show-expand @click:row='clicked')
      template(v-slot:expanded-item='{ item }').my-2
        td(:colspan="headers.length+1").py-4
          OrderCard(:item='item')
      template(v-slot:item.actions='{ item }' width='20')
        v-btn(rounded small color='#d3a19c' @click='editstate(item)' v-if=('item.state === "已出貨"'))
          v-icon(left color='white') mdi-checkbox-marked-circle-outline
          span.white--text 收到包裹
</template>
<script>
import '@/scss/userorders.scss'
import OrderCard from '@/components/OrderCard.vue'

export default {
  name: 'UserOrders',
  data () {
    return {
      search: '',
      orders: [],
      editedIndex: -1,
      expanded: ['orders'],
      singleExpand: false,
      headers: [
        {
          text: '訂單編號',
          align: 'center',
          value: '_id',
          sortable: false
        },
        { text: '地址', value: 'address' },
        { text: '聯絡方式', value: 'contact_number' },
        { text: '訂單日期', value: 'date' },
        { text: '總金額', value: 'sum' },
        { text: '點數折價', value: 'redeem' },
        { text: '付款方式', value: 'payment_method' },
        { text: '付款狀態', value: 'payment' },
        { text: '宅配單號', value: 'delivery_number' },
        { text: '訂單狀態', value: 'state' },
        { value: 'actions', sortable: false }
      ]
    }
  },
  components: {
    OrderCard
  },
  methods: {
    clicked (value) {
      this.expanded.push(value)
    },
    async editstate (item) {
      await this.axios.patch('/orders/' + item._id, { state: '訂單完成' }, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      for (let i = 0; i < item.products.length; i++) {
        await this.axios.patch('/products/' + item.products[i]._id, { order: item._id }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      }
      await this.axios.get('/products/orderQuantity', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      const { data } = await this.axios.get('/orders/getorders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(item => {
        item.date = item.date.slice(0, 10)
        if (item.payment === false) {
          item.payment = '待付款'
        } else {
          item.payment = '已付款'
        }
        item.products = item.products.map(item => {
          item = { ...item.product, amount: item.amount, option: item.option }
          if (item.image === null || item.image.length === 0) {
            item.image = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            item.imagefiles = []
          } else {
            item.image = item.image.concat(item.imagefiles)
            item.image = item.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            item.imagefiles = []
          }
          return item
        })
        return item
      })
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/orders/getorders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(item => {
        item.date = item.date.slice(0, 10)
        if (item.payment === false) {
          item.payment = '待付款'
        } else {
          item.payment = '已付款'
        }
        item.products = item.products.map(item => {
          item = { ...item.product, amount: item.amount, option: item.option }
          if (item.image === null || item.image.length === 0) {
            item.image = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            item.imagefiles = []
          } else {
            item.image = item.image.concat(item.imagefiles)
            item.image = item.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            item.imagefiles = []
          }
          return item
        })
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
