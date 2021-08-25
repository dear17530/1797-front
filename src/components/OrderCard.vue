<template lang='pug'>
#orderCard
  v-row(v-for='product in item.products' :key='item.editedIndex')
    v-col.col-12.col-md-2.d-flex.flex-column.align-center
      v-img(:src='product.image[0]' height='100px' width='100px' aspect-ratio='1')
    v-col.col-12.col-md-4.d-flex.flex-column.justify-center.py-0
      span.text-h5.font-weight-black {{ product.name }}
      span {{ product.option }}
      span 單價 {{ product.price }}
    v-col.col-12.col-md-4.py-0.d-flex.flex-column.justify-center
      p.mb-0 購買 {{ product.amount }} 件
      p.mb-1 團購滿 {{ product.count }} 件，每件回饋 {{ product.coupon }} 點
      div(v-if='product.order_quantity >= product.count')
        span.mb-0.label 已達回饋條件
      p.mb-0(v-else) 目前累計達 {{ product.order_quantity }} 件
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
<style>
#orderCard .label {
  color: white;
  font-size: 12px;
  background: #d3a19c;
  padding: 5px 8px 3px 8px;
  border-radius: 5px;
  border: 1px #d3a19c solid;
}
</style>
