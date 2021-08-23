<template lang='pug'>
#activeCard
  v-hover(v-slot='{ hover }')
    v-card.radius.ma-0
      v-img(:src='active.activeImage[0]' aspect-ratio='1.6')
        v-expand-transition
          .descriptionBg.d-flex.transition-fast-in-fast-out.darken-2.v-card--reveal.black--text(v-if='hover' style='height: 100%; white-space: pre-wrap;').pa-5 {{ active.description }}
      v-card-text
        v-row
          v-col(cols='12').d-flex.align-end.pb-1
            span.text-caption {{ active.categories }}
          v-col(cols='6').d-flex.align-center.py-0
            span.black--text {{ active.title }}
          v-col(cols='12').d-flex.align-center.pt-1
            v-row
              v-col
                span.text-caption.mr-2 {{ active.activeDate }}
                span.text-caption {{ active.city }}
              v-col.text-center
                v-avatar(size='20').mr-2
                  img(:src='active.avatar[0]')
                span.black--text {{ active.userId }}
          v-col(cols='12').d-flex.align-center.justify-center
            v-row
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickaddfriend')
                  v-img.mr-3(src='~@/assets/chat.png' max-height='20' max-width='20').pointer
                  span 私訊
              v-col(cols='6').text-center.py-1
                v-btn(rounded text @click='clickFollow')
                  v-img.mr-3(src='~@/assets/add.png' max-height='20' max-width='20').pointer
                  span 參加
</template>
<script>
export default {
  name: 'activeCard',
  props: {
    active: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      addfriend: false,
      follow: false
    }
  },
  methods: {
    clickFollow () {
      this.follow = !this.follow
      this.$emit('follow', this.follow)
    },
    clickaddfriend () {
      this.addfriend = !this.addfriend
      this.$emit('addfriend', this.addfriend)
    }
  }
}
</script>
<style>
#activeCard .class1 {
  background-color: #F5F5F5 !important;
}

#activeCard .class2 {
  background-color:white !important;
}

#activeCard .v-card--reveal {
  padding: 10px;
  align-items: start;
  bottom: 0;
  justify-content: start;
  opacity: 1;
  position: absolute;
  width: 100%;
  background: #ebedee !important;
}

#activeCard .pointer {
  cursor: pointer;
}

#activeCard .radius {
  border-radius: 10px !important;
}

#activeCard .descriptionBg {
  background: #ebedee !important;
}
</style>
