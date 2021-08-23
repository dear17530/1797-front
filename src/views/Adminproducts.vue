<template lang='pug'>
#adminproducts
  .text-right.my-3
    v-dialog(v-model='dialog' persistent max-width='600px')
      template(v-slot:activator='{ on, attrs }')
        v-btn(rounded text v-bind='attrs' v-on='on')
          v-icon(left fab color='red lighten-1' middle) mdi-plus-circle
          span 新增商品
      v-card.pa-5(:title="form._id.length > 0 ? '編輯商品' : '新增商品'" color='#ebedee')
        v-card-title
          span.text-h5.font-weight-bold {{ formTitle }}
        v-card-text
          v-row
            v-col(cols='12').pb-0
              span 商品名稱
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.name' :rules='nameRules' required)
            v-col(cols='12').pb-0.pt-0
              span 商品價格
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.price' :rules='priceRules' required)
            v-col(cols='12').pb-0.pt-0
              span 商品選項
            v-col(cols='11').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='newoption' :rules='optionsRules' required @keydown.enter='add()')
            v-col(cols='1').pl-0
              v-icon(color='success'  @click='add()') mdi-plus-circle
            v-col(cols='12').pb-1.pt-0
              v-chip-group(column)
                v-chip(v-for='option in form.options' :key='option') {{ option }}
                  v-icon(color='red' @click='deloption(option)') mdi-minus-circle
            v-col(cols='12').pt-1.pb-0
              span 商品敘述
            v-col(cols='12').pt-1.pb-0
              v-textarea(background-color='white' solo dense v-model='form.description' :rules='descriptionRules')
            v-col(cols='6').pt-1.pb-0
              span 優惠條件
            v-col(cols='6').pt-1.pb-0
              span 優惠點數
            v-col(cols='6').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.count' :rules='countRules' required)
            v-col(cols='6').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.coupon' :rules='couponRules' required)
            v-col(cols='6').pt-1.pb-0
              span 商品分類
            v-col(cols='6').pt-1.pb-0
              span 商品狀態
            v-col(cols='6').pt-1.pb-0
              v-select(background-color='white' solo dense v-model='form.category' :items='itemsCategory' required)
            v-col(cols='6').pt-2.pb-0
              v-radio-group(v-model='form.sell' row).mt-0
                v-radio(label='上架' :value='true')
                v-radio(label='下架' :value='false')
            v-col(cols='12').pt-1.pb-0
              file-pond(
                name='pond'
                ref='pond'
                allow-multiple='true'
                max-files='5'
                accepted-file-types='image/jpeg, image/png'
                label-idle='點擊或拖曳新增圖片'
                allowReorder='true'
                v-bind:files='form.imagefiles'
                @updatefiles='handleFilePondUpdateFile')
            v-col(cols='12').pt-1.pb-0
              v-chip-group
                v-chip(v-for='image in form.image' :key='image').py-10.px-1
                  v-img(:src='image' width="86")
                    v-icon(v-if='showDelImageIcon' color='red' @click='delimage(image)').mt-3.ml-1 mdi-minus-circle
              small(v-if='!showDelImageIcon') 圖片最少需要一張，若要刪除此圖，請先上傳一張圖片送出後並重新操作。
        v-card-actions
          v-spacer
          v-btn.mr-2.mb-1(plain @click='reset') 取消
          v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='submit' :disabled='submitDisable') 送出
  v-data-table(:headers='headers' :items='products' :search='search').px-5
    template(v-slot:item.editActions='{ item }' width='12')
      v-img(src='~@/assets/settings.png' @click='editItem(item)' max-height='20' max-width='20').pointer
    template(v-slot:item.sendActions='{ item }' width='12')
        v-img(src='~@/assets/giftbox.png' v-if='item.order_quantity >= item.count' @click='sendCoupon(item)' max-height='20' max-width='20').pointer
    template(v-slot:item.image='{ item }')
      v-img(:src='item.image[0]' height="100" aspect-ratio="1.7")
    template(v-slot:item.sell='{ item }')
      span(v-if='item.sell === true') 上架
      span(v-else) 下架
</template>

<script>
export default {
  name: 'Adminproducts',
  data () {
    return {
      editedIndex: -1,
      search: '',
      headers: [
        {
          text: '',
          align: 'center',
          value: 'editActions',
          sortable: false
        },
        { text: '', value: 'sendActions' },
        { text: '圖片', value: 'image' },
        { text: '品名', value: 'name' },
        { text: '價格', value: 'price' },
        { text: '分類', value: 'category' },
        { text: '優惠條件', value: 'count' },
        { text: '目前集資', value: 'order_quantity' },
        { text: '優惠點數', value: 'coupon' },
        { text: '狀態', value: 'sell' },
        { text: '選項', value: 'options' }
      ],
      products: [],
      form: {
        name: '',
        price: 0,
        category: '生活用品',
        description: '',
        image: [],
        imagefiles: [],
        sell: true,
        count: 0,
        coupon: 0,
        _id: '',
        options: ['無']
      },
      dialog: false,
      valid: true,
      nameRules: [
        v => !!v || '請輸入商品名稱',
        v => (v && v.length >= 1 && v.length <= 15) || '品名必須由 1 ~ 15 字元組成'
      ],
      optionsRules: [
        v => !!v || '請輸入選項名稱',
        v => (v && v.length >= 1 && v.length <= 15) || '選項必須由 1 ~ 15 字元組成'
      ],
      priceRules: [
        v => !!v || '請輸入商品價錢',
        v => (v && v >= 1) || '價格必須大於 1 元'
      ],
      descriptionRules: [
        v => !!v || '請輸入商品敘述',
        v => (v && v.length >= 1) || '敘述字數必須大於 1'
      ],
      countRules: [
        v => !!v || '請輸入優惠條件',
        v => (v && v >= 1) || '優惠條件必須大於 1'
      ],
      couponRules: [
        v => !!v || '請輸入優惠點數',
        v => (v && v >= 1) || '優惠點數必須大於 1'
      ],
      itemsCategory: ['生活用品', '涮嘴零食', '寵物用品', '美妝保健', '3C用品'],
      itemsSell: ['上架中', '下架中'],
      submitDisable: false,
      newoption: '',
      showImage: [],
      showDelImageIcon: true
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新增商品' : '編輯商品'
    }
  },
  methods: {
    async sendCoupon (item) {
      try {
        await this.axios.patch('/users/sendCoupon', { id: item._id }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '點數發放成功，商品已下架'
        })
        const { data } = await this.axios.get('/products/all', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.products = data.result.map(product => {
          product.image = product.image.concat(product.imagefiles)
          product.image = product.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          product.imagefiles = []
          return product
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得商品失敗'
        })
      }
    },
    handleFilePondUpdateFile (files) {
      this.form.imagefiles = files.map(files => files.file)
    },
    add () {
      if (this.newoption.length === 0 && this.newoption.length <= 15) {
        this.$swal({
          icon: 'errow',
          title: '錯誤',
          text: '選項必須由 1 ~ 15 字元組成'
        })
      } else {
        this.form.options.push(this.newoption)
        this.newoption = ''
      }
    },
    delimage (item) {
      const a = this.products[this.editedIndex].image.indexOf(item)
      this.products[this.editedIndex].image.splice(a, 1)
    },
    deloption (option) {
      const a = this.form.options.indexOf(option)
      this.form.options.splice(a, 1)
    },
    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.dialog = true
      this.form = {
        name: this.products[this.editedIndex].name,
        price: this.products[this.editedIndex].price,
        category: this.products[this.editedIndex].category,
        description: this.products[this.editedIndex].description,
        sell: this.products[this.editedIndex].sell,
        count: this.products[this.editedIndex].count,
        coupon: this.products[this.editedIndex].coupon,
        _id: this.products[this.editedIndex]._id,
        options: this.products[this.editedIndex].options,
        image: this.products[this.editedIndex].image,
        imagefiles: []
      }
    },
    reset () {
      this.dialog = false
      this.form = {
        name: '',
        price: 0,
        category: '生活用品',
        description: '',
        image: [],
        sell: true,
        count: 0,
        coupon: 0,
        _id: '',
        options: ['無'],
        imagefiles: []
      }
      this.editedIndex = -1
    },
    async submit () {
      this.submitDisable = false
      try {
        const fd = new FormData()
        for (const key in this.form) {
          if (Array.isArray(this.form[key]) && key === 'imagefiles') {
            for (const i in this.form[key]) {
              fd.append('imagefiles', this.form[key][i])
            }
          } else if (Array.isArray(this.form[key]) && key === 'image') {
            if (this.form.image === null) {
              fd.append('image', [])
            } else {
              this.form.image.forEach(function (item) {
                fd.append('image', item.substr(-17, 17))
              })
            }
          } else if (Array.isArray(this.form[key]) && key === 'options') {
            if (this.form.options.length <= 0) {
              fd.append('options', '無')
            } else {
              this.form.options.forEach((item) => fd.append('options', item))
            }
          } else {
            fd.append(key, this.form[key])
          }
        }
        if (this.form._id.length === 0) {
          await this.axios.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '上傳成功'
          })
        } else {
          await this.axios.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        }
        const { data } = await this.axios.get('/products/all', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.products = data.result.map(product => {
          if (product.image === null) {
            product.image = product.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            product.imagefiles = []
          } else {
            product.image = product.image.concat(product.imagefiles)
            product.image = product.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
            product.imagefiles = []
          }
          return product
        })
        this.reset()
        this.editedIndex = -1
      } catch (error) {
        this.$swal({
          icon: 'errow',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.products = data.result.map(product => {
        if (product.image === null) {
          product.image = product.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          product.imagefiles = []
        } else {
          product.image = product.image.concat(product.imagefiles)
          product.image = product.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          product.imagefiles = []
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
  },
  watch: {
    form: {
      handler: function () {
        if (this.editedIndex > -1 && this.form.image.length <= 1) {
          this.showDelImageIcon = false
        } else {
          this.showDelImageIcon = true
        }
      },
      deep: true
    }
  }
}
</script>
