<template lang='pug'>
#postCard
  v-hover(v-slot='{ hover }')
    v-card.radius.ma-0
      v-img(:src='post.activeImage[0]' aspect-ratio='1.6')
        v-expand-transition
          .descriptionBg.d-flex.transition-fast-in-fast-out.white.darken-2.v-card--reveal.black--text(v-if='hover' style='height: 100%; white-space: pre-wrap;').pa-5 {{ post.description }}
      v-card-text
        v-row
          v-col(cols='12').d-flex.align-end.pb-1
            span.text-caption {{ post.categories }}
          v-col(cols='6').d-flex.align-center.py-0
            span.black--text {{ post.title }}
          v-col(cols='12').d-flex.align-center.pt-1
            span.text-caption.mr-2 {{ post.activeDate }}
            span.text-caption {{ post.city }}
          v-col(cols='12' @click='clickshowFollower').d-flex.align-center.py-0
            span.text-caption 跟團者
            v-icon(right color='black' small).ml-1 mdi-chevron-down
          v-col(cols='12' v-if='showFollower').d-flex.align-center.py-0
            v-chip.ma-1(color='#ebedee' v-for='(m, index) in post.member' :key='index' small chip @click='clickFollower(m.user_id)')
              v-icon(left color='#d3a19c').ml-1 mdi-send
              span.text-caption.pt-1 {{ m.userId }}
          v-col(cols='12').d-flex.align-center.justify-center.px-2
            v-row
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickDel')
                  span 刪除貼文
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickEdit')
                  span 編輯貼文
</template>
<script>
export default {
  name: 'postCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      delPost: false,
      editPost: false,
      indexFollower: 0,
      showFollower: false
    }
  },
  methods: {
    clickshowFollower () {
      this.showFollower = !this.showFollower
    },
    clickDel () {
      this.delPost = !this.delPost
      this.$emit('delPost', this.delPost)
    },
    clickEdit () {
      this.editPost = !this.editPost
      this.$emit('editPost', this.editPost)
    },
    clickFollower (index) {
      this.indexFollower = index
      this.$emit('indexFollower', this.indexFollower)
    }
  }
}
</script>
<style>
#postCard .class1 {
  background-color: #F5F5F5 !important;
}

#postCard .class2 {
  background-color:white !important;
}

#postCard .v-card--reveal {
  padding: 10px;
  align-items: start;
  bottom: 0;
  justify-content: start;
  opacity: 1;
  position: absolute;
  width: 100%;
}

.radius {
  border-radius: 10px !important;
}

#postCard .descriptionBg {
  background: #ebedee !important;
}
</style>
