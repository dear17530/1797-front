<template lang="pug">
#admin.d-flex.flex-column.align-center.mt-4
  v-tabs(v-model='tab' grow style="width: 60%;")
    v-tabs-slider(color='#ebedee')
    v-tab(to='/admin/adminorders') 訂單管理
    v-tab(to='/admin/adminanalysis') 營運分析
    v-tab(to='/admin/adminproducts') 商品管理
  v-main.pt-1
    router-view
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      tab: null
    }
  }
}
</script>
