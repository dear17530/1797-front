<template lang='pug'>
#followCard
  v-hover(v-slot='{ hover }')
    v-card.radius
      v-img(:src='followPost.activeImage[0]' aspect-ratio='1.6')
        v-expand-transition
          .d-flex.transition-fast-in-fast-out.white.darken-2.v-card--reveal.black--text(v-if='hover' style='height: 100%;').pa-5 {{ followPost.description }}
      v-card-text.pt-5
        v-row
          v-col(cols='12').d-flex.align-end.pb-1
            span.text-caption {{ followPost.categories }}
          v-col(cols='6').d-flex.align-center.py-0
            span.black--text {{ followPost.title }}
          v-col(cols='12').d-flex.align-center.pt-1
            v-row
              v-col
                span.text-caption.mr-2 {{ followPost.activeDate }}
                span.text-caption {{ followPost.city }}
              v-col.text-center
                v-avatar(size='20').mr-2
                  img(:src='followPost.avatar[0]')
                span.black--text {{ followPost.userId }}
          v-col.d-flex.align-center.justify-center.px-2
            v-row
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickFollower(followPost.user)')
                  span 加入好友
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickCancel')
                  span 取消跟團
</template>
<script>
export default {
  name: 'followCard',
  props: {
    followPost: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      cancel: false,
      indexFollower: 0
    }
  },
  methods: {
    clickCancel () {
      this.cancel = !this.cancel
      this.$emit('cancel', this.cancel)
    },
    clickFollower (index) {
      this.indexFollower = index
      this.$emit('indexFollower', this.indexFollower)
    }
  }
}
</script>
<style>
#followCard .class1 {
  background-color: #F5F5F5 !important;
}

#followCard .class2 {
  background-color:white !important;
}

#followCard .v-card--reveal {
  padding: 10px;
  align-items: start;
  bottom: 0;
  justify-content: start;
  opacity: 1;
  position: absolute;
  width: 100%;
}

#followCard .radius {
  border-radius: 10px !important;
}
</style>
