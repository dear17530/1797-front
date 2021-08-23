<template lang='pug'>
v-container#actives
  v-tabs(v-model='tab' grow v-if='$vuetify.breakpoint.lgAndUp')
    v-tabs-slider(color='#ebedee')
    v-tab(v-for='items in itemsCategory' :key='items' @click='change(items)') {{ items }}
  v-row(v-else).my-4.justify-center
    v-col.col-3.col-sm-2.col-md-2(v-for='items in itemsCategory' :key='items').text-center
      v-btn(@click='change(items)' small rounded)
        span.text-button {{ items }}
  v-row
    v-col.text-right
      v-btn(rounded text @click='showform')
        v-icon(left fab color='red lighten-1' middle) mdi-plus-circle
        span 新增活動
  v-row(v-if="items === '所有活動'").ma-0
    v-col(cols='12' sm='6' lg='4' v-for="(active, index) in actives" :key='active._id')
      ActiveCard(:active="active" @follow='follow (active._id)' @addfriend='addfriend(active.user)').mb-5
  v-row(v-else).ma-0
    v-col(cols='12' sm='6' lg='4' v-for="(active, index) in showactives" :key='active._id')
      ActiveCard(:active="active" @follow='follow (active._id)' @addfriend='addfriend(active.user)').mb-5
  v-dialog(v-model='dialog' max-width='600px')
    v-card(color='#ebedee').pa-5
      v-card-title
        span.text-h5.font-weight-bold 新增活動
      v-card-text
        v-row
          v-col(cols='12').pb-0
            span 發起人
          v-col(cols='12').pt-1.pb-0.mb-3
            v-avatar(size='20').mr-2
              img(:src='form.avatar' )
            span {{ form.userId }}
        v-row
          v-col(cols='12').pb-0.pt-0
            span 活動主題
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.title' :rules='title_Rules' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 圖片
          v-col(cols='12').pt-1.pb-0
            file-pond(
              name='pond'
              ref='pond'
              allow-multiple='true'
              max-files='1'
              accepted-file-types='image/jpeg, image/png'
              label-idle='點擊或拖曳新增圖片'
              allowReorder='true'
              v-bind:files='form.activeImage'
              @updatefiles='handleFilePondUpdateFile')
        v-row
          v-col(cols='12').pb-0.pt-0
            span 揪團類別
          v-col(cols='12').pt-1.pb-0
            v-select(background-color='white' solo dense :items='activesCategory' v-model='form.categories' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 地點
          v-col(cols='12').pt-1.pb-0
            v-select(background-color='white' solo dense :items='citiesCategory' v-model='form.city' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 日期
          v-col(cols='12').pt-1.pb-0
            v-menu(v-model='menu' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y min-width='auto')
              template(v-slot:activator='{ on, attrs }')
                v-text-field(background-color='white' solo dense v-model='form.activeDate' readonly v-bind='attrs' v-on='on')
              v-date-picker(v-model='form.activeDate' @input='menu = false' :min="minday" no-title)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 介紹
          v-col(cols='12').pt-1.pb-0
            v-textarea(background-color='white' solo name='input-7-4' v-model='form.description' required :rules='description_Rules')
      v-card-actions
        v-spacer
        v-btn.mr-2.mb-1(plain @click='reset') 取消
        v-btn.mr-2.mb-1(color='#f7e7ef' @click='submit') 送出
</template>

<script>
import ActiveCard from '@/components/ActiveCard.vue'

export default {
  name: 'actives',
  data () {
    return {
      form: {
        userId: '',
        title: '',
        city: '',
        activeDate: '',
        description: '',
        member: '',
        avatar: '',
        categories: '',
        activeImage: ''
      },
      actives: [],
      showactives: [],
      title_Rules: [
        v => !!v || '請輸入主題',
        v => (v && v.length >= 1) || '請輸入主題'
      ],
      description_Rules: [
        v => !!v || '請介紹活動',
        v => (v && v.length >= 10) || '介紹最少 10 字'
      ],
      items: '所有活動',
      itemsCategory: ['所有活動', '電影活動', '戶外活動', '展覽活動', '桌遊活動', '其它活動'],
      activesCategory: ['電影活動', '戶外活動', '展覽活動', '桌遊活動', '其它活動'],
      dialog: false,
      tab: null,
      citiesCategory: ['基隆', '台北', '新北', '桃園', '新竹市', '苗栗', '台中', '彰化', '南投', '雲林', '嘉義', '台南', '高雄', '屏東', '台東', '花蓮', '宜蘭', '澎湖', '金門', '連江'],
      menu: false
    }
  },
  components: {
    ActiveCard
  },
  computed: {
    minday () {
      const yyyy = new Date().getFullYear()
      const m = new Date().getMonth() + 1
      let mm = ''
      if (m <= 9) {
        mm = '0' + m
      } else {
        mm = m
      }
      let dd = new Date().getDate()
      if (dd <= 9) {
        dd = '0' + new Date().getDate()
      }
      return yyyy + '-' + mm + '-' + dd
    }
  },
  methods: {
    change (items) {
      if (items === '所有活動') {
        this.showactives = this.actives
        this.items = '所有活動'
      } else {
        this.items = items
        const filterItems = this.actives.filter(function (item) {
          return item.categories === items
        })
        this.showactives = filterItems
      }
    },
    async addfriend (id) {
      if (!this.user.islogin) {
        this.$swal({
          icon: 'error',
          title: '請先登入',
          text: '請至登入頁登入'
        })
        return
      }
      if (id === this.user._id) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '您無法私訊自己哦！'
        })
      } else {
        try {
          await this.axios.post('/users/' + this.$store.state.user._id, { userId: id }, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '請至私人訊息查看'
          })
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: error.response.data.message
          })
        }
      }
    },
    async follow (_id) {
      if (!this.user.islogin) {
        this.$swal({
          icon: 'error',
          title: '請先登入',
          text: '請至登入頁登入'
        })
      } else {
        try {
          await this.axios.patch('/users/' + this.$store.state.user._id, { follow: _id }, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '加入成功，快點私密主辦人吧!'
          })
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: error.response.data.message
          })
        }
      }
    },
    showform () {
      if (!this.$store.state.user.account.length >= 1) {
        this.$swal({
          icon: 'error',
          title: '請先登入',
          text: '請至登入頁登入'
        })
      } else {
        this.dialog = true
      }
    },
    handleFilePondUpdateFile (files) {
      this.form.activeImage = files.map(files => files.file)
    },
    reset () {
      this.dialog = false
    },
    async submit () {
      if (!this.$store.state.user.account.length >= 1) {
        this.$swal({
          icon: 'error',
          title: '請先登入',
          text: '請至登入頁登入'
        })
      } else {
        this.dialog = false
        try {
          const fd = new FormData()
          for (const key in this.form) {
            if (Array.isArray(this.form[key]) && key === 'activeImage') {
              for (const i in this.form[key]) {
                fd.append('imagefiles', this.form[key][i])
              }
            } else {
              fd.append(key, this.form[key])
            }
          }
          await this.axios.post('/posts', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.form.title = ''
          this.form.city = ''
          this.form.activeDate = ''
          this.form.description = ''
          this.form.categories = ''
          this.form.activeImage = ''
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
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '揪團成功'
          })
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: '失敗',
            text: error.response.data.message
          })
        }
      }
    }
  },
  async mounted () {
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
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得活動貼文失敗'
      })
    }
    if (this.$store.state.user.account.length >= 1) {
      try {
        const { data } = await this.axios.get('/users/' + this.$store.state.user._id, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.form.userId = data.result.userId
        if (data.result.imagefiles.length === 0) {
          this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.avatar}`
        } else {
          this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.imagefiles}`
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得使用者資料失敗'
        })
      }
    }
  }
}
</script>
