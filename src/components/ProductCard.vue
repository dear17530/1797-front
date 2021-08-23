<template lang='pug'>
#productCard
  v-card.mx-auto(width='100%').text-center
    .productBg
      v-img(height='100%' width='100%' :src="product.image[0]")
      span.label 每件回饋 {{ product.coupon }} 點
    v-card-title.justify-center.flex-column
      p.pt-0.mb-0 {{ product.name }}
      p.pt-0.mb-0 ${{ product.price }}
</template>
<script>
export default {
  name: 'productCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
#productCard .v-sheet{
  box-shadow: none;
}

#productCard .productBg {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(to bottom, #fff3f2 0%, #f1faff 100%);
}

#productCard .label {
  position: absolute;
  top: 10px;
  left: 0;
  background: #d3a19c;
  color: white;
  padding: 3px 8px 0px 8px;
  border-radius: 0px 10px 10px 0px;
  font-size: 10px;
}
</style>
