<template lang='pug'>
#orderCard
  v-row(v-for='product in item.products' :key='item.editedIndex')
    v-col.col-12.col-md-2.d-flex.flex-column.align-center
      v-img(:src='product.image[0]' height='100px' width='100px' aspect-ratio='1')
    v-col.col-12.col-md-4.d-flex.flex-column.justify-center.py-0
      span.text-h5.font-weight-black {{ product.name }}
      span {{ product.option }}
      span 單價 {{ product.price }}
    v-col.col-12.col-md-4.d-flex.flex-column.justify-center.py-0
      span 購買 {{ product.amount }} 件
      span 團購滿 {{ product.count }} 件，每件回饋 {{ product.coupon }} 點
      span(v-if='product.order_quantity >= product.count').red--text 已達回饋條件
      span(v-else) 目前累計達 {{ product.order_quantity }} 件
</template>
<script>
export default {
  name: 'OrderCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
