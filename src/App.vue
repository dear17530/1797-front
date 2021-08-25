<template lang="pug">
v-app#app
  v-app-bar#navbar.mt-4(app flat scroll-off-screen dense v-if='$vuetify.breakpoint.lgAndUp')
    v-spacer
    v-btn(rounded text to='/products').mx-2
      span 集團購
    v-btn(rounded text to='/actives').mx-2
      span 揪活動
    v-btn(v-if="user.islogin && !user.isAdmin" rounded text to='/cart')
      span 購物車
    router-link(to='/').mx-1
      v-img#logo.mx-2(src='~@/assets/logo.png' max-height='70' max-width='70')
    v-btn(v-if="user.islogin" rounded text to='/usermessage')
      span 私人訊息
    v-btn(v-if="user.islogin && user.isAdmin" rounded text to='/admin/adminorders').mx-2
      span 管理中心
    v-btn(v-if="user.islogin && !user.isAdmin" rounded text to='/userdata').mx-2
      span 會員中心
    v-btn(v-if="!user.islogin" rounded text @click='showform').mx-2
      span 註冊
    v-btn(v-if="!user.islogin" rounded text @click='showlogin').mx-2
      span 登入
    v-btn(v-if="user.islogin" rounded text @click="logout").mx-2
      span 登出
    v-spacer
  v-app-bar#navbar.mt-4(app flat scroll-off-screen dense v-else)
    v-spacer
    v-img#logo.mx-2(src='~@/assets/logo.png' max-height='70' max-width='70' @click='drawer = true')
    v-spacer
  v-navigation-drawer(v-model='drawer' absolute temporary color='#ebedee')
    v-row.ma-2
      v-col.col-12
        v-btn(block color='white' dark to='/')
          span.black--text 首頁
      v-col.col-12
        v-btn(block color='white' dark to='/products')
          span.black--text 集團購
      v-col.col-12
        v-btn(block color='white' dark to='/actives')
          span.black--text 揪活動
      v-col.col-12(v-if="user.islogin && !user.isAdmin")
        v-btn(block color='white' dark to='/cart')
          span.black--text 購物車
      v-col.col-12(v-if="user.islogin")
        v-btn(block color='white' dark to='/usermessage')
          span.black--text 私人訊息
      v-col.col-12(v-if="user.islogin && user.isAdmin")
        v-btn(block color='white' dark to='/admin/adminorders')
          span.black--text 管理中心
      v-col.col-12(v-if="user.islogin && !user.isAdmin")
        v-btn(block color='white' dark to='/userdata')
          span.black--text 會員中心
      v-col.col-12(v-if="!user.islogin")
        v-btn(block color='white' dark @click='showform')
          span.black--text 註冊
      v-col.col-12(v-if="!user.islogin")
        v-btn(block color='white' dark @click='showlogin')
          span.black--text 登入
      v-col.col-12(v-if="user.islogin")
        v-btn(block color='white' dark @click="logout")
          span.black--text 登出
  v-dialog(v-model='dialog' max-width='600px')
    v-form
      v-card(color='#ebedee').pa-5
        v-card-title
          span.text-h5.font-weight-bold 註冊會員
        v-card-text
          v-row
            v-col(cols='12').pb-0
              span 帳號
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.account' :rules='accountRules' required)
          v-row
            v-col(cols='12').pb-0.pt-0
              span 密碼
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.password' :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules='passwordRules' required :type="show1 ? 'text' : 'password'" @click:append='show1 = !show1' autocomplete="off")
          v-row
            v-col(cols='12').pb-0.pt-0
              span 信箱
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.email' :rules='emailRules' required)
          v-row
            v-col(cols='6').pb-0.pt-0
              span 姓名
            v-col(cols='6').pb-0.pt-0
              span 暱稱
          v-row
            v-col(cols='6').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.name' :rules='nameRules' required)
            v-col(cols='6').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='form.userId' :rules='nameIdRules' required)
          v-row
            v-col(cols='6').pb-0.pt-0
              span 性別
            v-col(cols='6').pb-0.pt-0
              span 生日
          v-row
            v-col(cols='6').pt-1.pb-0
              v-select(:items='items' background-color='white' solo dense :rules='genderRules' v-model='form.gender')
            v-col(cols='6').pt-1.pb-0
              v-menu(ref='menu' v-model='menu' :close-on-content-click='false' transition='scale-transition' offset-y min-width='auto')
                template(v-slot:activator='{ on, attrs }')
                  v-text-field(v-model='form.birthday' background-color='white' solo dense readonly v-bind='attrs' v-on='on')
                v-date-picker(v-model='form.birthday' :max='(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)' min='1950-01-01' @change='save')
        v-card-actions
          v-spacer
          v-btn.mr-2.mb-1(plain @click='cancel') 晚點再註冊
          v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='submit') 送出
  v-dialog(v-model='logindialog' max-width='400px')
    v-form
      v-card(color='#ebedee').pa-5
        v-card-title
          span.text-h5.font-weight-bold 登入會員
        v-card-text
          v-row
            v-col(cols='12').pb-0
              span 帳號
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='loginform.account' :rules='accountRules' required)
            v-col(cols='12').pb-0.pt-0
              span 密碼
            v-col(cols='12').pt-1.pb-0
              v-text-field(background-color='white' solo dense v-model='loginform.password' :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules='passwordRules' required :type="show1 ? 'text' : 'password'" @click:append='show1 = !show1' autocomplete="off")
        v-card-actions
          v-spacer
          v-btn.mr-2.mb-1(plain @click='cancel') 晚點再登入
          v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='loginsubmit') 送出
  v-main.mt-4
    router-view
  Footer
</template>

<script>
import './scss/app.scss'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Footer },
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: '',
        name: '',
        userId: '',
        birthday: '1950-01-01',
        gender: '男',
        avatar: [],
        imagefiles: []
      },
      drawer: false,
      group: null,
      loginform: {
        account: '',
        password: ''
      },
      valid: true,
      accountRules: [
        v => !!v || '請輸入帳號',
        v => (v && v.length >= 4 && v.length <= 20) || '帳號必須由 4 ~ 20 字元組成'
      ],
      genderRules: [
        v => !!v || '請選擇性別',
        v => (v.length >= 1) || '請選擇性別'
      ],
      show1: false,
      passwordRules: [
        v => !!v || '請輸入密碼',
        v => (v && v.length >= 4 && v.length <= 20) || '密碼必須由 4 ~ 20 字元組成'
      ],
      emailRules: [
        v => !!v || '請輸入信箱',
        v => /.+@.+\..+/.test(v) || '請輸入有效的信箱'
      ],
      nameRules: [
        v => !!v || '請輸入正確姓名，以供後續取貨時使用',
        v => (v && v.length >= 2) || '請輸入正確姓名，以供後續取貨時使用'
      ],
      nameIdRules: [
        v => !!v || '請輸入暱稱',
        v => (v && v.length >= 1) || '請輸入暱稱'
      ],
      menu: false,
      dialog: false,
      logindialog: false,
      items: ['男', '女']
    }
  },
  methods: {
    showlogin () {
      this.logindialog = true
    },
    showform () {
      this.dialog = true
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    cancel () {
      this.dialog = false
      this.logindialog = false
      this.form = {
        account: '',
        password: '',
        email: '',
        name: '',
        userId: '',
        birthday: '1950-01-01',
        gender: '男',
        avatar: [],
        imagefiles: []
      }
    },
    async submit () {
      try {
        if (this.form.gender === '男') {
          this.form.avatar = ['genderBoy.png']
          this.form.imagefiles = ['genderBoy.png']
        } else {
          this.form.avatar = ['genderGirl.png']
          this.form.imagefiles = ['genderGirl.png']
        }
        await this.axios.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.dialog = false
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    },
    async loginsubmit () {
      try {
        const { data } = await this.axios.post('/users/login', this.loginform)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.logindialog = false
        this.$store.commit('login', data)
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    },
    async logout () {
      try {
        await this.axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('logout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '發生錯誤'
        })
      }
    }
  },
  async mounted () {
    if (this.$store.state.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getinfo', data.result)
    } catch (error) {
      this.$store.commit('logout')
    }
  }
}
</script>
