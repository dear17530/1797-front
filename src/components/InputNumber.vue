<template lang='pug'>
#inputNumber
  v-text-field(
    :label='label'
    :mask='mask'
    hide-details='false'
    :rules='rules'
    :value='value'
    @change='$emit("input", $event)'
    plain
    dense
  )
    v-icon(slot='prepend' color='#ebedee' @click='decrease') mdi-minus-box
    v-icon(slot='append-outer' color='#f7e7ef' @click='increase') mdi-plus-box
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 9999
    },
    maxLength: {
      type: Number,
      default: 4
    },
    rules: {
      type: Array,
      default: () => []
    },
    step: {
      type: Number,
      default: 1
    },
    value: [String, Number]
  },
  computed: {
    mask () {
      let mask = ''
      for (let i = 0; i < this.maxLength; i++) mask = `${mask}#`
      return mask
    }
  },
  methods: {
    increase () {
      if (isNaN(parseInt(this.value))) return this.$emit('input', this.step)
      if (this.value === this.max) return
      this.$emit('input', parseInt(this.value) + this.step)
    },
    decrease () {
      if (isNaN(parseInt(this.value))) return this.$emit('input', this.min)
      if (this.value === this.min) return
      this.$emit('input', parseInt(this.value) - this.step)
    }
  }
}
</script>
<style>
#inputNumber .v-text-field__slot input{
  height: 12px !important;
  text-align: center;
}

#inputNumber .v-text-field .v-input__control .v-input__slot {
  min-height: 0 !important;
  padding: 5px 2px !important;
  margin-top: 4px !important;
  box-shadow: none;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px;
}

#inputNumber .v-text-field .v-input__control .v-input__slot:before {
  border: none;
}
</style>
