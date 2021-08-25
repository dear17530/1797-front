<template lang="pug">
v-container#home.pa-0(fluid)
  #banner.pa-10
    v-row.mt-10.mt-lg-15.justify-center.mb-0
      v-col.col-12.col-sm-10.col-md-6.d-flex.justify-center.title
        v-img(src='~@/assets/title.png')
    v-carousel(hide-delimiters :height='"100%"')
      v-carousel-item
        v-row.justify-center.align-center.mt-lg-10
          v-col.col-8.col-md-4.col-lg-5.mx-5
            p.text-h6.text-center.text-sm-h4.text-md-h2.text-lg-h1.mb-0 Group
            P.text-h6.text-center.text-sm-h4.text-md-h3.text-lg-h2.text-lg-right Buying
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right.pr-lg-15 每件商品達門檻都有回饋點數
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right 挑選商品並完成訂單後
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right.pr-lg-15 商品若達優惠門檻,立即發放點數
          v-col.col-5.col-md-4.col-lg-4.productBN.mx-5
            router-link(to='/products')
              v-img(src='~@/assets/productBN.png' max-height='450' max-width='450' @mouseover='show(0)' @mouseleave='hide(0)')
        v-row.justify-center.hidden-sm-and-down.mt-0.mb-2.mt-lg-10
          v-col.text-center
            v-btn(color='white' to='/products').mx-2.px-7 生活用品
            v-btn(color='white' to='/products').mx-2.px-7 涮嘴零食
            v-btn(color='white' to='/products').mx-2.px-7 寵物用品
            v-btn(color='white' to='/products').mx-2.px-7 美妝保健
            v-btn(color='white' to='/products').mx-2.px-7 3C用品
      v-carousel-item
        v-row.justify-center.align-center.mt-lg-10
          v-col.col-8.col-md-5.col-lg-5.mx-5
            p.text-h6.text-center.text-sm-h4.text-md-h2.text-lg-h1.mb-0 Participate
            P.text-h6.text-center.text-sm-h4.text-md-h3.text-lg-h2.text-lg-right In Activities
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right.pr-lg-15 您可以在這發起活動
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right 也可以在這尋找有興趣的活動
            p.text-caption.mb-1.text-center.text-lg-subtitle-1.text-lg-right.pr-lg-15 點下私訊, 可以跟主辦人線上聊天
          v-col.col-5.col-md-5.col-lg-4.mx-5
            router-link(to='/actives')
              v-img(src='~@/assets/activeBN.png' max-height='450' max-width='450' @mouseover='show(0)' @mouseleave='hide(0)')
        v-row.justify-center.hidden-sm-and-down.mt-0.mb-2.mt-lg-10
          v-col.text-center
            v-btn(color='white' to='/actives').mx-2.px-7 電影活動
            v-btn(color='white' to='/actives').mx-2.px-7 戶外活動
            v-btn(color='white' to='/actives').mx-2.px-7 展覽活動
            v-btn(color='white' to='/actives').mx-2.px-7 桌遊活動
            v-btn(color='white' to='/actives').mx-2.px-7 其他活動
  #product.d-flex.justify-center.align-center
    div
      v-row.justify-center.align-center.mt-10
        v-col.col-12
          p.text-h4.text-center.mb-0 集團購
          p.text-button.text-center.font-weight-bold Group Buying
      v-row.justify-center.align-center.productRow
        v-col.col-12.col-md-4.px-lg-10(v-for='(product, i) in products' :key='product.id')
          router-link(:to="'/product/'+product._id" style='text-decoration: none;')
            v-carousel.productBg(:height='"100%"' hide-delimiter-background hide-delimiters :show-arrows='false' cycle interval='3000')
              v-carousel-item(v-for='(item, j) in product.image' :key='j')
                v-img.product(:src='item')
          p.text-h5.text-md-h6.black--text.mt-5.mb-1(style='letter-spacing: 1px;') {{ product.name }}
          p.text-h5.text-md-h6.black--text.mb-1(style='letter-spacing: 1px;') ${{ product.price }}
          p.text--primary.my-0
            v-progress-linear(color='pink lighten-5' v-model='product.progress' rounded height='25' width='100%')
              strong {{ product.progress }}
          p.text-button.text-md-caption.text-right.grey--text.text--darken-2 集資達 {{ product.count }} 件 每件回饋 {{ product.coupon }} 點
  #active.d-flex.justify-center.align-center.mb-15
    div
      v-row.justify-center.align-center.mt-10
        v-col.col-12
          p.text-h4.text-center.mb-0 揪活動
          p.text-button.text-center.font-weight-bold Active
      v-row.justify-center.activerow
        v-col.col-12.col-md-6.pa-0
          v-carousel(hide-delimiters :height='"100%"')
            v-carousel-item(v-for='(active, index) in actives' :key='active._id')
              v-col(cols='12')
                ActiveCard(:active='active')
        v-col.col-12.col-md-6.px-6
          v-row#homeMessage.my-0
            v-col#allDialogBox(cols='12')
              v-row.ma-0(v-for='message in messages' :key='message.date')
                v-col(v-if='message.sender.userId === "我小華"' cols='12').text-right
                  span.text-button.dialogBox.mr-2 {{ message.message }}
                  v-avatar(size="25").mr-3
                    img(:src='message.sender.avatar[0]')
                v-col(v-else  cols='12').text-left
                  v-avatar(size="25").mr-3
                    img(:src='message.sender.avatar[0]')
                  span.text-button.dialogBox.mr-2 {{ message.message }}
            v-col#txt(cols='12').mt-auto.mb-10.mb-lg-7
              v-row.ma-0.pa-0
                v-col(cols='12').ma-0.pa-0
                  v-text-field(outline rounded hide-details)
                    v-icon(slot='append' color='grey') mdi-send-circle-outline
</template>

<script>
import '@/scss/home.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActiveCard from '@/components/ActiveCard.vue'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'

export default {
  name: 'home',
  components: {
    ActiveCard
  },
  data () {
    return {
      showUnderLine: [false, false],
      products: [],
      actives: [],
      plugins: [new Arrow()],
      messages: [
        {
          message: 'hi~我是小華',
          sender: {
            avatar: [],
            userId: '我小華'
          },
          receiver: {
            avatar: [],
            userId: '小雪'
          },
          date: '2021-08-20T02:56:43.928Z'
        },
        {
          message: '要約幾點和約在哪裡呢?',
          sender: {
            avatar: [],
            userId: '我小華'
          },
          receiver: {
            avatar: [],
            userId: '小雪'
          },
          date: '2021-08-20T02:56:57.303Z'
        },
        {
          message: '約在台北車站8號出口如何?',
          sender: {
            avatar: [],
            userId: '小雪'
          },
          receiver: {
            avatar: [],
            userId: '我小華'
          },
          date: '2021-08-20T02:57:42.838Z'
        },
        {
          _id: '611f1a2e2cc82a558c6c13bf',
          message: '我最快可以12:30到',
          sender: {
            avatar: [],
            userId: '小雪'
          },
          receiver: {
            avatar: [],
            userId: '我小華'
          },
          date: '2021-08-20T02:57:50.442Z'
        }
      ]
    }
  },
  methods: {
    show (item) {
      this.$set(this.showUnderLine, item, this.showUnderLine[item] = true)
    },
    hide (item) {
      this.$set(this.showUnderLine, item, this.showUnderLine[item] = false)
    }
  },
  async mounted () {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('#product', {
      scrollTrigger: {
        trigger: '#product',
        start: 'top bottom',
        scrub: 1,
        markers: false
      },
      y: 200,
      opacity: 0,
      duration: 1
    })

    gsap.from('#active', {
      scrollTrigger: {
        trigger: '#active',
        start: 'top bottom',
        scrub: 1,
        markers: false
      },
      y: 200,
      opacity: 0,
      duration: 1
    })

    try {
      const { data } = await this.axios.get('/posts')
      this.actives = data.result.map(active => {
        active.avatar = active.avatar.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        active.activeDate = active.activeDate.slice(0, 10)
        if (active.imagefiles.length === 0) {
          active.activeImage = active.activeImage.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          active.activeImage = active.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        return active
      })
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].sender.userId === '我小華') {
          this.messages[i].sender.avatar = [`${process.env.VUE_APP_API}/files/genderBoy.png`]
        } else if (this.messages[i].sender.userId === '小雪') {
          this.messages[i].sender.avatar = [`${process.env.VUE_APP_API}/files/genderGirl.png`]
        } else if (this.messages[i].receiver.userId === '我小華') {
          this.messages[i].receiver.avatar = [`${process.env.VUE_APP_API}/files/genderGirl.png`]
        } else if (this.messages[i].receiver.userId === '小雪') {
          this.messages[i].receiver.avatar = [`${process.env.VUE_APP_API}/files/genderGirl.png`]
        }
      }
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得活動失敗'
      })
    }

    try {
      const { data } = await this.axios.get('/admins/getIndexProducts')
      this.products = data.result.indexProducts.map(product => {
        product = { ...product.product_id }
        if (product.image === null || product.image.length === 0) {
          product.image = product.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          product.image = product.image.concat(product.imagefiles)
          product.image = product.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        if (product.order_quantity <= 0) {
          product.progress = 0 + '%'
        } else if (product.order_quantity >= product.count) {
          product.progress = 100 + '%'
        } else {
          product.progress = (product.order_quantity / product.count).toFixed(2) * 100 + '%'
        }
        return product
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得活動失敗'
      })
    }
  }
}
</script>
