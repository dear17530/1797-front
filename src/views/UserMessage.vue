<template lang="pug">
v-container#userMessage
  v-row#friends.ma-0.mb-2
    Flicking(:options="{ circular: false, align: 'prev' }")
      div(v-for='(friend, i) in friends' :key='i' @click='showMessage(friend._id, i)' :style='{background: friend.bg}').friend.mx-2.d-flex.justify-center
        div.d-flex.justify-center.align-center.px-3
          v-avatar(size="60")
            img(:src='friend.avatar[0]')
        div.d-flex.flex-column.justify-center.pa-3
          span.mr-2.body-1.font-weight-bold {{ friend.userId }}
          span.mr-2.text-caption {{ friend.age }} {{ friend.birthday }}
          p.mb-0.text-caption {{ friend.introduction }}
  v-row#message.ma-0.mb-2
    v-col#allDialogBox(ref='scroll' cols='12' v-show='form.receiver')
      v-row.ma-0(v-for='message in messages' :key='message.date')
        v-col(v-if='message.welcomeMessage === true && message.sender._id !== user._id').text-left.col-12
          v-avatar(size="25").mr-3
            img(:src='message.sender.avatar[0]')
          span.d-inline-flex.ml-9.ml-md-0.dialogBox.mr-2.pointer 歡迎加入！您可以直接點擊下列問題，若無您要詢問的問題，請手動輸入。
          br
          span.d-inline-flex.my-3.ml-9.dialogBox.mr-2.pointer(@click='question(1)') 我該如何發起活動？
          br
          span.d-inline-flex.mb-3.ml-9.dialogBox.mr-2.pointer(@click='question(2)') 我該如何編輯活動？
          br
          span.d-inline-flex.mb-3.ml-9.dialogBox.mr-2.pointer(@click='question(3)') 我該如何查看有誰參與了我的活動？
          br
          span.d-inline-flex.mb-3.ml-9.dialogBox.mr-2.pointer(@click='question(4)') 我該如何參與他人的活動？
          br
          span.d-inline-flex.mb-3.ml-9.dialogBox.mr-2.pointer(@click='question(5)') 我該如何私訊主辦人？
          br
          span.d-inline-flex.mb-3.ml-9.dialogBox.mr-2.pointer(@click='question(6)') 回饋點數可以怎麼使用？
          br
          span.d-inline-flex.ml-9.dialogBox.mr-2.pointer(@click='question(7)') 回饋點數怎麼獲得？
        v-col(v-else-if='message.welcomeMessage === false && message.sender._id === user._id' cols='12').text-right
          span.d-inline-flex.dialogBox.mr-2 {{ message.message }}
          v-avatar(size="25").mr-3
            img(:src='message.sender.avatar[0]')
        v-col(v-else-if='message.welcomeMessage === false && message.sender._id !== user._id' cols='12').text-left
          v-avatar(size="25").mr-3
            img(:src='message.sender.avatar[0]')
          span.d-inline-flex.dialogBox.mr-2 {{ message.message }}
    v-col(cols='12' v-show='form.receiver').mt-auto
      v-row
        v-col(cols='12')#txt
          v-text-field(ref="form" v-model='form.message' outline rounded @keydown.enter='submit' hide-details)
            v-icon(slot='append' color='grey' @click='submit') mdi-send-circle-outline
</template>
<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"></script>
<script>
import '@/scss/userMessage.scss'

export default {
  name: 'UserMessage',
  data () {
    return {
      friends: [],
      messages: [],
      profile: [],
      form: {
        message: '',
        sender: '',
        receiver: ''
      },
      valid: true,
      birthdayTime: 0,
      birthMonth: 0,
      birthDay: 0,
      nowTime: 0,
      messageLength: 0,
      index: 0
    }
  },
  computed: {
    getMessageLength () {
      return this.messages.length
    }
  },
  methods: {
    getIntroduction (introduction) {
      if (introduction === undefined || introduction === '') {
        return '這個人很懶，什麼都沒留下。'
      } else {
        return introduction
      }
    },
    getAge (birthday) {
      const nowTime = parseInt(new Date().getTime())
      return Math.ceil((nowTime - birthday) / 31536000000) + '歲'
    },
    getConstellation (birthday) {
      const birthDay = new Date(birthday).getDate()
      const birthMonth = new Date(birthday).getMonth() + 1
      if ((birthMonth === 3 && birthDay >= 21) || (birthMonth === 4 && birthDay <= 19)) {
        return '牡羊座'
      } else if ((birthMonth === 4 && birthDay >= 20) || (birthMonth === 5 && birthDay <= 20)) {
        return '金牛座'
      } else if ((birthMonth === 5 && birthDay >= 21) || (birthMonth === 6 && birthDay <= 21)) {
        return '雙子座'
      } else if ((birthMonth === 6 && birthDay >= 22) || (birthMonth === 7 && birthDay <= 22)) {
        return '巨蟹座'
      } else if ((birthMonth === 7 && birthDay >= 23) || (birthMonth === 8 && birthDay <= 22)) {
        return '獅子座'
      } else if ((birthMonth === 8 && birthDay >= 23) || (birthMonth === 9 && birthDay <= 22)) {
        return '處女座'
      } else if ((birthMonth === 9 && birthDay >= 23) || (birthMonth === 10 && birthDay <= 23)) {
        return '天秤座'
      } else if ((birthMonth === 10 && birthDay >= 24) || (birthMonth === 11 && birthDay <= 22)) {
        return '天蠍座'
      } else if ((birthMonth === 11 && birthDay >= 23) || (birthMonth === 12 && birthDay <= 21)) {
        return '射手座'
      } else if ((birthMonth === 12 && birthDay >= 22) || (birthMonth === 1 && birthDay <= 19)) {
        return '魔羯座'
      } else if ((birthMonth === 1 && birthDay >= 20) || (birthMonth === 2 && birthDay <= 18)) {
        return '水瓶座'
      } else {
        return '雙魚座'
      }
    },
    async question (item) {
      if (item === 1) {
        const data = {
          message: '我該如何發起活動？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 2) {
        const data = {
          message: '我該如何編輯活動？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 3) {
        const data = {
          message: '我該如何查看有誰參與了我的活動？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 4) {
        const data = {
          message: '我該如何參與他人的活動？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 5) {
        const data = {
          message: '我該如何私訊主辦人？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 6) {
        const data = {
          message: '回饋點數可以怎麼使用？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      } else if (item === 7) {
        const data = {
          message: '回饋點數怎麼獲得？',
          receiver: this.form.receiver
        }
        await this.axios.post('/messages', data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
      }
    },
    async submit () {
      if (!this.$refs.form.validate()) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請填寫資料'
        })
      }
      const data = {
        message: this.form.message,
        receiver: this.form.receiver
      }
      await this.axios.post('/messages', data, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.form.message = ''
    },
    async showMessage (id, i) {
      this.index = i
      for (let j = 0; j < this.friends.length; j++) {
        if (j === this.index) {
          this.friends[j].bg = '#ffcec9'
        } else {
          this.friends[j].bg = '#fff3f2'
        }
      }
      this.form.receiver = id
      const { data } = await this.axios.get('/messages/' + id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.messages = data.result.map(item => {
        if (item.receiver.imagefiles.length === 0) {
          item.receiver.avatar[0] = `${process.env.VUE_APP_API}/files/${item.receiver.avatar[0]}`
        } else {
          item.receiver.avatar[0] = `${process.env.VUE_APP_API}/files/${item.receiver.imagefiles[0]}`
          item.receiver.imagefiles = []
        }
        if (item.sender.imagefiles.length === 0) {
          item.sender.avatar[0] = `${process.env.VUE_APP_API}/files/${item.sender.avatar[0]}`
        } else {
          item.sender.avatar[0] = `${process.env.VUE_APP_API}/files/${item.sender.imagefiles[0]}`
          item.receiver.imagefiles = []
        }
        return item
      })
    },
    async update () {
      if (!this.form.receiver) return
      const { data } = await this.axios.get('/messages/' + this.form.receiver, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.messages = data.result.map(item => {
        if (item.receiver.imagefiles.length === 0) {
          item.receiver.avatar[0] = `${process.env.VUE_APP_API}/files/${item.receiver.avatar[0]}`
        } else {
          item.receiver.avatar[0] = `${process.env.VUE_APP_API}/files/${item.receiver.imagefiles[0]}`
          item.receiver.imagefiles = []
        }
        if (item.sender.imagefiles.length === 0) {
          item.sender.avatar[0] = `${process.env.VUE_APP_API}/files/${item.sender.avatar[0]}`
        } else {
          item.sender.avatar[0] = `${process.env.VUE_APP_API}/files/${item.sender.imagefiles[0]}`
          item.receiver.imagefiles = []
        }
        return item
      })
    },
    delayUpdate (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
  },
  async mounted () {
    if (this.user.islogin) {
      this.timer = setInterval(this.update, 1000)
    }
    try {
      const { data } = await this.axios.get('/users/' + this.$store.state.user._id + '/friend', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.friends = data.result.friend.map(item => {
        item = { ...item.user_id }
        if (item.imagefiles.length === 0) {
          item.avatar = item.avatar.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        } else {
          item.avatar = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
        }
        item.age = this.getAge(new Date(item.birthday).getTime())
        item.birthday = this.getConstellation(new Date(item.birthday).getTime())
        item.introduction = this.getIntroduction(item.introduction)
        item.bg = '#fff3f2'
        return item
      })
      this.form.receiver = this.friends[0]._id
      this.friends[0].bg = '#ffcec9'
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }
  },
  watch: {
    'user.islogin': {
      handler: function () {
        if (!this.user.islogin) {
          clearInterval(this.timer)
        }
      },
      deep: true
    },
    getMessageLength: {
      handler: async function () {
        const oldvalue = this.messages.length
        const delay = 1000
        await this.delayUpdate(delay)
        const newvalue = this.getMessageLength
        if (oldvalue !== newvalue) {
          this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight
        }
      },
      deep: true
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
