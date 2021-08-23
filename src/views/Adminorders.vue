<template lang='pug'>
#adminorders
  v-data-table(:headers='headers' :items='orders' :expanded='expanded' item-key='_id' show-expand @click:row='clicked')
    template(v-slot:expanded-item='{ item }').my-2
      td(:colspan="headers.length+1").py-4
        OrderCard(:item='item')
    template(v-slot:item.actions='{ item }' width='20')
      v-icon.mr-2(@click='editItem(item)').
        mdi-pencil-circle-outline
  v-dialog(v-model='dialog' max-width='500px')
    v-card(color='#ebedee').pa-5
      v-card-title
        span.text-h5.font-weight-bold 編輯訂單
      v-card-text
        v-row
          v-col(cols='12').pb-0
            span 宅配單號
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.delivery_number' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 訂購人姓名
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.name' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 地址
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.address' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 電話號碼
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.contact_number' required)
      v-card-actions
        v-spacer
        v-btn.mr-2.mb-1(plain @click='editCancel') 取消
        v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='editSave') 儲存
</template>
<script>
import '@/scss/adminorders.scss'
import OrderCard from '@/components/OrderCard.vue'

export default {
  name: 'Adminorders',
  data () {
    return {
      form: {
        address: '',
        contact_number: '',
        delivery_number: '',
        name: '',
        _id: '',
        state: ''
      },
      editedIndex: -1,
      expanded: ['orders'],
      singleExpand: false,
      search: '',
      dialog: false,
      orders: [],
      headers: [
        {
          text: '訂單編號',
          align: 'center',
          value: '_id',
          sortable: false
        },
        { text: '訂購人', value: 'name' },
        { text: '地址', value: 'address' },
        { text: '聯絡方式', value: 'contact_number' },
        { text: '訂單日期', value: 'date' },
        { text: '總金額', value: 'sum' },
        { text: '折價', value: 'redeem' },
        { text: '付款狀態', value: 'payment' },
        { text: '宅配單號', value: 'delivery_number' },
        { text: '訂單狀態', value: 'state' },
        { text: '編輯', value: 'actions' }
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
    editItem (item) {
      this.dialog = true
      this.editedIndex = this.orders.indexOf(item)
      this.form = {
        address: this.orders[this.editedIndex].address,
        contact_number: this.orders[this.editedIndex].contact_number,
        delivery_number: this.orders[this.editedIndex].delivery_number,
        name: this.orders[this.editedIndex].name,
        _id: this.orders[this.editedIndex]._id
      }
    },
    editCancel () {
      this.dialog = false
    },
    async editSave () {
      this.dialog = false
      try {
        if (this.form.delivery_number) {
          this.form.state = '已出貨'
        }
        await this.axios.patch('/orders/' + this.form._id, this.form, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const { data } = await this.axios.get('/orders/getAllorders', {
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
          title: '失敗',
          text: '修改失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/orders/getAllorders', {
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
