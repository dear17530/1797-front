<template lang="pug">
v-container#userdata.mt-4
  v-row.justify-space-around.align-center
    v-col.col-12.col-md-4.user.d-flex.flex-row.justify-center.pa-0
      div.d-flex.justify-center.align-center.px-3
        v-avatar(size="60")
          img(:src='form.avatar')
      div.d-flex.flex-column.justify-center.pa-3
        span.body-1.font-weight-bold {{ form.userId }}
          v-icon.pb-1.ml-2(@click='edit' small) mdi-pencil-circle-outline
        span.mr-2.text-caption {{ getAge }} {{ getConstellation }}
        p.mb-0.text-caption {{getintroduction }}
    v-col.col-3.col-md-2.d-flex.flex-column.justify-center(@click='showPosts()').pointer.hovercol
      span.text-h6.text-center {{ posts.length }}
      span.text-caption.text-center Posts
    div.clickBorder
    v-col.col-3.col-md-2.d-flex.flex-column.justify-center(@click='showFollows()').pointer.hovercol
      span.text-h6.text-center {{ follows.length }}
      span.text-caption.text-center Follows
    div.clickBorder
    v-col.col-3.col-md-2.d-flex.flex-column.justify-center(@click='showOrders').pointer.hovercol
      span.text-h6.text-center {{ orders }}
      span.text-caption.text-center Orders
  v-row.justify-center.justify-md-start(v-if='showPost')
    v-col.col-10.col-md-12
      p.mb-0.text-h6 All Posts
    v-col(cols="10" md="6" lg="4" v-for="(post, index) in posts" :key='post._id')
      postCard(:post="post" @delPost='delPost(post._id)' @editPost='editPost(post._id)' @indexFollower='indexFollower').mb-5
  v-row.justify-center.justify-md-start(v-if='showFollow')
    v-col.col-10.col-md-12
      p.mb-0.text-h6 All Follows
    v-col(cols="10" md="6" lg="4" v-for="(followPost, index) in follows" :key='followPost._id')
      followCard(:followPost="followPost" @indexFollower='indexFollower' @cancel='cancel(followPost._id)').mb-5
  v-dialog(v-model='dialog' max-width='600px')
    v-card(color='#ebedee').pa-5
      v-card-title
        span.text-h5.font-weight-bold 編輯個人資料
      v-card-text
        v-row
          v-col(cols='12').pb-0
            span 頭貼
          v-col(cols='12').pt-1.pb-0
            file-pond(
              name='pond'
              ref='pond'
              allow-multiple='true'
              max-files='1'
              accepted-file-types='image/jpeg, image/png'
              label-idle='點擊或拖曳新增圖片'
              allowReorder='true'
              v-bind:files='form.imagefiles'
              @updatefiles='handleFilePondUpdateFile')
        v-row
          v-col(cols='6').pb-0.pt-0
            span 姓名
          v-col(cols='6').pb-0.pt-0
            span 暱稱
        v-row
          v-col(cols='6').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.name' :rules='nameRules' required)
          v-col(cols='6').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.userId' :rules='userIdRules' required)
        v-row
          v-col(cols='6').pb-0.pt-0
            span 帳號
          v-col(cols='6').pb-0.pt-0
            span 生日
        v-row
          v-col(cols='6').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.account' disabled)
          v-col(cols='6').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.birthday' disabled)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 信箱
          v-col(cols='12').pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='form.email' disabled)
        v-row
          v-col(cols='12').pb-0.pt-0
            span 介紹
          v-col(cols='12').pt-1.pb-0
            v-textarea(background-color='white' solo dense v-model='form.introduction' required)
      v-card-actions
        v-spacer
        v-btn.mr-2.mb-1(plain @click='editCancel') 取消
        v-btn.mr-2.mb-1.px-8(color='#f7e7ef' @click='editSave') 儲存
  v-dialog(v-model='postdialog' max-width='600px')
    v-card(color='#ebedee').pa-5
      v-card-title
        span.text-h5.font-weight-bold 編輯活動
      v-card-text
        v-row
          v-col(cols='12').pb-0
            span 活動主題
          v-col(cols='12').pt-1.pb-0
            v-text-field.pt-0(background-color='white' solo dense v-model='postform.title' :rules='title_Rules' required)
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
              v-bind:files='postform.imagefiles'
              @updatefiles='handleFilePondUpdateFile')
        v-row
          v-col(cols='12').pb-0.pt-0
            span.text-caption 揪團類別
          v-col(cols='12').pt-1.pb-0
            v-select(background-color='white' solo dense :items='activesCategory' v-model='postform.categories' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span.text-caption 地點
          v-col(cols='12').pt-1.pb-0
            v-select(background-color='white' solo dense :items='citiesCategory' v-model='postform.city' required)
        v-row
          v-col(cols='12').pb-0.pt-0
            span.text-caption 日期
          v-col(cols='12').pt-1.pb-0
            v-menu(v-model='menu' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y min-width='auto')
              template(v-slot:activator='{ on, attrs }')
                v-text-field(background-color='white' solo dense v-model='postform.activeDate' readonly v-bind='attrs' v-on='on')
              v-date-picker(v-model='postform.activeDate' @input='menu = false' :min="minday" no-title)
        v-row
          v-col(cols='12').pb-0.pt-0
            span.text-caption 介紹
          v-col(cols='12').pt-1.pb-0
            v-textarea(background-color='white' solo dense v-model='postform.description' required :rules='description_Rules')
      v-card-actions
        v-spacer
        v-btn.mr-2.mb-1(plain @click='editPostCancel') 取消
        v-btn.mr-2.mb-1(color='#f7e7ef' @click='editPostsubmit') 送出
</template>

<script>
import '@/scss/userdata.scss'
import postCard from '@/components/PostCard.vue'
import followCard from '@/components/FollowCard.vue'

export default {
  name: 'UserData',
  data () {
    return {
      tab: null,
      form: {
        account: '',
        email: '',
        name: '',
        userId: '',
        imagefiles: '',
        introduction: '',
        birthday: '',
        avatar: ''
      },
      postform: {
        id: '',
        title: '',
        city: '',
        activeDate: '',
        description: '',
        categories: '',
        activeImage: [],
        imagefiles: []
      },
      birthdayTime: 0,
      birth_month: 0,
      birth_day: 0,
      nowTime: 0,
      dialog: false,
      postdialog: false,
      nameRules: [
        v => !!v || '請輸入正確姓名，以供後續取貨時使用',
        v => (v && v.length >= 2) || '請輸入正確姓名，以供後續取貨時使用'
      ],
      userIdRules: [
        v => !!v || '請輸入暱稱',
        v => (v && v.length >= 1) || '請輸入暱稱'
      ],
      title_Rules: [
        v => !!v || '請輸入主題',
        v => (v && v.length >= 1) || '請輸入主題'
      ],
      description_Rules: [
        v => !!v || '請介紹活動',
        v => (v && v.length >= 10) || '介紹最少 10 字'
      ],
      posts: [],
      follows: [],
      items: ['我的揪團', '我的跟團'],
      showPost: true,
      showFollow: false,
      editedItem: '',
      orders: 0,
      menu: false,
      activesCategory: ['電影活動', '戶外活動', '展覽活動', '桌遊活動', '其它活動'],
      citiesCategory: ['基隆', '台北', '新北', '桃園', '新竹市', '苗栗', '台中', '彰化', '南投', '雲林', '嘉義', '台南', '高雄', '屏東', '台東', '花蓮', '宜蘭', '澎湖', '金門', '連江']
    }
  },
  components: {
    postCard,
    followCard
  },
  computed: {
    getintroduction () {
      if (this.form.introduction === undefined || this.form.introduction.length === 0) {
        return '請填寫自我介紹，讓大家更認識你哦'
      } else {
        return this.form.introduction
      }
    },
    getAge () {
      const nowTime = parseInt(new Date().getTime())
      return Math.ceil((nowTime - this.birthdayTime) / 31536000000) + '歲'
    },
    getConstellation () {
      if ((this.birth_month === 3 && this.birth_day >= 21) || (this.birth_month === 4 && this.birth_day <= 19)) {
        return '牡羊座'
      } else if ((this.birth_month === 4 && this.birth_day >= 20) || (this.birth_month === 5 && this.birth_day <= 20)) {
        return '金牛座'
      } else if ((this.birth_month === 5 && this.birth_day >= 21) || (this.birth_month === 6 && this.birth_day <= 21)) {
        return '雙子座'
      } else if ((this.birth_month === 6 && this.birth_day >= 22) || (this.birth_month === 7 && this.birth_day <= 22)) {
        return '巨蟹座'
      } else if ((this.birth_month === 7 && this.birth_day >= 23) || (this.birth_month === 8 && this.birth_day <= 22)) {
        return '獅子座'
      } else if ((this.birth_month === 8 && this.birth_day >= 23) || (this.birth_month === 9 && this.birth_day <= 22)) {
        return '處女座'
      } else if ((this.birth_month === 9 && this.birth_day >= 23) || (this.birth_month === 10 && this.birth_day <= 23)) {
        return '天秤座'
      } else if ((this.birth_month === 10 && this.birth_day >= 24) || (this.birth_month === 11 && this.birth_day <= 22)) {
        return '天蠍座'
      } else if ((this.birth_month === 11 && this.birth_day >= 23) || (this.birth_month === 12 && this.birth_day <= 21)) {
        return '射手座'
      } else if ((this.birth_month === 12 && this.birth_day >= 22) || (this.birth_month === 1 && this.birth_day <= 19)) {
        return '魔羯座'
      } else if ((this.birth_month === 1 && this.birth_day >= 20) || (this.birth_month === 2 && this.birth_day <= 18)) {
        return '水瓶座'
      } else {
        return '雙魚座'
      }
    },
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
    showOrders () {
      this.$router.push('/userorders')
    },
    cancel (id) {
      this.$swal({
        icon: 'warning',
        title: '取消跟團',
        text: '您確定要取消跟團嗎?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '我要取消',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.patch('/users/' + this.$store.state.user._id, { post: id }, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          return this.refollow()
        }
      }).then((result) => {
        return this.refollow()
      })
    },
    async reget () {
      try {
        const { data } = await this.axios.get('/users/post', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.posts = data.result.map(item => {
          item = { ...item.post }
          if (item.imagefiles.length === 0) {
            item.activeImage = item.activeImage.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          } else {
            item.activeImage = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          }
          item.member = item.member.map(r => {
            r.avatar = r.avatar.map(v => `${process.env.VUE_APP_API}/files/${v}`)
            return r
          })
          item.activeDate = item.activeDate.slice(0, 10)
          return item
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得貼文資料失敗'
        })
      }
    },
    async refollow  () {
      try {
        const { data } = await this.axios.get('/users/follow', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.follows = data.result.map(item => {
          item = { ...item.follow }
          if (item.imagefiles.length === 0) {
            item.activeImage = item.activeImage.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          } else {
            item.activeImage = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          }
          item.avatar = item.avatar.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          item.activeDate = item.activeDate.slice(0, 10)
          return item
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得貼文資料失敗'
        })
      }
    },
    async indexFollower (id) {
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
    },
    editPostCancel () {
      this.postdialog = false
    },
    async editPostsubmit () {
      this.postdialog = false
      try {
        const fd = new FormData()
        for (const key in this.postform) {
          if (Array.isArray(this.postform[key]) && key === 'imagefiles') {
            for (const i in this.postform[key]) {
              fd.append('imagefiles', this.postform[key][i])
            }
          } else if (Array.isArray(this.postform[key]) && key === 'activeImage') {
            if (this.postform[key].length === null || this.postform[key].length <= 0) {
              fd.append('activeImage', '1628609175182.jpg')
            } else {
              for (const i in this.postform[key]) {
                fd.append('activeImage', this.postform[key][i])
              }
            }
          } else {
            fd.append(key, this.postform[key])
          }
        }
        await this.axios.patch('/posts/' + this.postform.id, fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.reget()
      } catch (error) {
        this.$swal({
          icon: 'errow',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async editPost (id) {
      this.postdialog = true
      this.editedItem = 'post'
      try {
        const { data } = await this.axios.get('/posts/' + id, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.postform = {
          id: data.result._id,
          title: data.result.title,
          city: data.result.city,
          activeDate: data.result.activeDate.slice(0, 10),
          description: data.result.description,
          categories: data.result.categories,
          imagefiles: []
        }
        if (data.result.imagefiles.length === 0) {
          this.postform.activeImage = data.result.activeImage
        } else {
          this.postform.activeImage = data.result.imagefiles
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得貼文失敗'
        })
      }
    },
    async delPost (id) {
      this.$swal({
        icon: 'warning',
        title: '您確定要刪除此篇貼文嗎?',
        text: '刪除此篇貼文後，將無法回復貼文哦！',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '我要刪除',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.patch('/posts/' + id, { show: false }, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          return this.reget()
        }
      }).then((result) => {
        return this.reget()
      })
    },
    showPosts () {
      this.showPost = true
      this.showFollow = false
    },
    showFollows () {
      this.showPost = false
      this.showFollow = true
    },
    handleFilePondUpdateFile (files) {
      if (this.editedItem === 'user') {
        this.form.imagefiles = files.map(files => files.file)
      } else {
        this.postform.imagefiles = files.map(files => files.file)
      }
    },
    edit () {
      this.dialog = true
      this.editedItem = 'user'
    },
    editCancel () {
      this.dialog = false
    },
    async editSave () {
      this.dialog = false
      try {
        const fd = new FormData()
        for (const key in this.form) {
          if (Array.isArray(this.form[key]) && key === 'imagefiles') {
            for (const i in this.form[key]) {
              fd.append('imagefiles', this.form[key][i])
            }
          } else if (key === 'avatar') {
            fd.append('avatar', this.form.avatar.substr(-17, 17))
          } else {
            fd.append(key, this.form[key])
          }
        }
        await this.axios.patch('/users/' + this.$store.state.user._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const { data } = await this.axios.get('/users/' + this.$store.state.user._id, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.form.account = data.result.account
        this.form.name = data.result.name
        this.form.email = data.result.email
        this.form.userId = data.result.userId
        if (data.result.imagefiles.length === 0) {
          this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.avatar}`
        } else {
          this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.imagefiles}`
        }
        this.form.imagefiles = []
        this.form.introduction = data.result.introduction
        this.form.birthday = new Date(data.result.birthday).toLocaleString().slice(0, 9)
        this.birth_day = new Date(data.result.birthday).getDate()
        this.birth_month = new Date(data.result.birthday).getMonth() + 1
        this.birthdayTime = new Date(data.result.birthday).getTime()
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
      const { data } = await this.axios.get('/users/' + this.$store.state.user._id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.orders.length
      this.form.account = data.result.account
      this.form.name = data.result.name
      this.form.email = data.result.email
      this.form.userId = data.result.userId
      if (data.result.imagefiles.length === 0) {
        this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.avatar}`
      } else {
        this.form.avatar = `${process.env.VUE_APP_API}/files/${data.result.imagefiles}`
      }
      this.form.imagefiles = []
      this.form.introduction = data.result.introduction
      this.form.birthday = new Date(data.result.birthday).toLocaleString().slice(0, 9)
      this.birth_day = new Date(data.result.birthday).getDate()
      this.birth_month = new Date(data.result.birthday).getMonth() + 1
      this.birthdayTime = new Date(data.result.birthday).getTime()
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得會員資料失敗'
      })
    }

    try {
      const { data } = await this.axios.get('/users/post', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.posts = data.result.map(item => {
        item = { ...item.post }
        if (item.imagefiles.length === 0) {
          item.activeImage = item.activeImage.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          item.activeImage = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        item.member = item.member.map(r => {
          r.avatar = r.avatar.map(v => `${process.env.VUE_APP_API}/files/${v}`)
          return r
        })
        item.activeDate = item.activeDate.slice(0, 10)
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得貼文資料失敗'
      })
    }

    try {
      const { data } = await this.axios.get('/users/follow', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.follows = data.result.map(item => {
        item = { ...item.follow }
        if (item.imagefiles.length === 0) {
          item.activeImage = item.activeImage.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          item.activeImage = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        item.avatar = item.avatar.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        item.activeDate = item.activeDate.slice(0, 10)
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得貼文資料失敗'
      })
    }
  }
}
</script>
