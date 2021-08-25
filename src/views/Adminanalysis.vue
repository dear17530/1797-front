<template lang='pug'>
#adminanalysis
  v-row.mt-0
    v-col(cols='5')
      span.text-h5.font-weight-bold 當月業績查詢
    v-spacer
    v-col(cols='2')
      v-select(:items='yearItems' label='年份' solo v-model='year' dense hide-details='false')
    v-col(cols='2')
      v-select(:items='monthItems' label='年份' solo v-model='month' dense hide-details='false')
  v-row
    v-col(cols='3')
      p 總銷售額
      p.text-h3 {{ getRevenue }}
    v-col(cols='3')
      p 總訂單量
      p.text-h3 {{ orders.length }}
    v-col(cols='3' v-if='getRevenue')
      p 客單價
      p.text-h3 {{ Math.round(getRevenue/orders.length) }}
    v-col(cols='2' v-else)
      p 客單價
      p.text-h3 0
  v-row
    v-col(cols='12')
      span.text-h5.font-weight-bold 目標業績
  v-row.justify-space-between.ma-0
    v-col(cols='2' v-for='(category, index) in categorySalesChart' :key='category.category.chartOptions.labels[0]').d-flex.flex-column.align-center
      apexchart(type='radialBar' height='180' :options='category.category.chartOptions' :series='category.category.series')
      p.mb-0.text-center.text-h4 {{ category.category.totalSaleAmount }}
      p.mb-0.text-center 目標業績
        v-icon.mb-1.ml-2(@click='editTargetSales(index)' small) mdi-pencil-circle-outline
      p.mb-0.text-center {{ targetSales[index] }}
  v-row
    v-col(cols='12')
      span.text-h5.font-weight-bold 商品業績
  v-row
    v-col(cols='12')
      v-data-table(:headers='headers' :items='products').ma-0
      v-dialog(v-model='dialog' color='white' persistent max-width='400px')
        v-card(color='#ebedee').pa-5
          v-card-title
            span.text-h5.font-weight-bold 設定目標業績
          v-card-text.pt-1.pb-0
            v-text-field(background-color='white' solo dense v-model='setTargetSales')
          v-card-actions
            v-spacer
            v-btn.mr-2.mb-1(plain @click='editTargetCancel').
              取消
            v-btn.mr-2.mb-1(color='#f7e7ef' @click='editTargetubmit').
              送出
</template>
<script>
export default {
  name: 'adminanalysis',
  data () {
    return {
      dialog: false,
      categorySalesChart: [
        {
          category: {
            series: [0],
            totalSaleAmount: 0,
            chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%'
                  }
                }
              },
              labels: ['生活用品']
            }
          }
        },
        {
          category: {
            series: [0],
            totalSaleAmount: 0,
            chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%'
                  }
                }
              },
              labels: ['涮嘴零食']
            }
          }
        },
        {
          category: {
            series: [0],
            totalSaleAmount: 0,
            chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%'
                  }
                }
              },
              labels: ['寵物用品']
            }
          }
        },
        {
          category: {
            series: [0],
            totalSaleAmount: 0,
            chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%'
                  }
                }
              },
              labels: ['美妝保健']
            }
          }
        },
        {
          category: {
            series: [0],
            totalSaleAmount: 0,
            chartOptions: {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%'
                  }
                }
              },
              labels: ['3C用品']
            }
          }
        }
      ],
      orders: [],
      pie: [
        {
          all: {
            series: [0, 3, 97, 0, 0]
          }
        }
      ],
      categorySales: [],
      targetSales: [],
      setTargetSales: 0,
      setTargetIndex: 0,
      year: 2021,
      month: 8,
      yearItems: [2021],
      monthItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      products: [],
      headers: [
        {
          text: '品名',
          value: 'name'
        },
        { text: '價格', value: 'price' },
        { text: '分類', value: 'category' },
        { text: '銷售件數', value: 'productQuantity' },
        { text: '銷售金額', value: 'productSaleAmount' },
        { text: '優惠條件', value: 'count' },
        { text: '優惠點數', value: 'coupon' }
      ]
    }
  },
  computed: {
    getRevenue () {
      if (this.categorySales.length === 0) {
        return 0
      } else {
        let value = 0
        for (let i = 0; i < this.categorySales.length; i++) {
          value += this.categorySales[i].totalSaleAmount
        }
        return value
      }
    }
  },
  methods: {
    editTargetSales (index) {
      this.dialog = true
      this.setTargetIndex = index
    },
    async editTargetubmit () {
      this.targetSales[this.setTargetIndex] = this.setTargetSales
      this.dialog = false
      await this.axios.patch('/admins', { targetSales: this.targetSales }, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.count()
    },
    editTargetCancel () {
      this.dialog = false
    },
    async count () {
      for (let i = 0; i < this.categorySalesChart.length; i++) {
        this.categorySalesChart[i].category.series = [0]
        this.categorySalesChart[i].category.totalSaleAmount = 0
        this.pie[0].all.series = [0, 0, 0, 0, 0]
      }
      this.categorySales.map(item => {
        if (item._id === '生活用品') {
          this.categorySalesChart[0].category.series = [Math.round(item.totalSaleAmount / this.targetSales[0] * 100)]
          this.categorySalesChart[0].category.totalSaleAmount = item.totalSaleAmount
          this.pie[0].all.series[0] = Math.round(item.totalSaleAmount / this.getRevenue * 100)
        } else if (item._id === '涮嘴零食') {
          this.categorySalesChart[1].category.series = [Math.round(item.totalSaleAmount / this.targetSales[1] * 100)]
          this.categorySalesChart[1].category.totalSaleAmount = item.totalSaleAmount
          this.pie[0].all.series[1] = Math.round(item.totalSaleAmount / this.getRevenue * 100)
        } else if (item._id === '寵物用品') {
          this.categorySalesChart[2].category.series = [Math.round(item.totalSaleAmount / this.targetSales[2] * 100)]
          this.categorySalesChart[2].category.totalSaleAmount = item.totalSaleAmount
          this.pie[0].all.series[2] = Math.round(item.totalSaleAmount / this.getRevenue * 100)
        } else if (item._id === '美妝保健') {
          this.categorySalesChart[3].category.series = [Math.round(item.totalSaleAmount / this.targetSales[3] * 100)]
          this.categorySalesChart[3].category.totalSaleAmount = item.totalSaleAmount
          this.pie[0].all.series[3] = Math.round(item.totalSaleAmount / this.getRevenue * 100)
        } else if (item._id === '3C用品') {
          this.categorySalesChart[4].category.series = [Math.round(item.totalSaleAmount / this.targetSales[4] * 100)]
          this.categorySalesChart[4].category.totalSaleAmount = item.totalSaleAmount
          this.pie[0].all.series[4] = Math.round(item.totalSaleAmount / this.getRevenue * 100)
        }
        return item
      })

      try {
        const { data } = await this.axios.get('/orders/getOrdersQuantity', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.orders = data.result.filter(item => {
          return item.year === this.year && item.month === this.month
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得訂單數量失敗'
        })
      }

      try {
        const { data } = await this.axios.get('/admins', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.targetSales = data.result.targetSales
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得資料失敗'
        })
      }
    },
    async update () {
      const { data } = await this.axios.get('/orders/getCategorySales', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      data.result = data.result.map(item => {
        item = { ...item._id, totalSaleAmount: item.totalSaleAmount }
        return item
      })
      this.categorySales = data.result.filter(item => {
        return item.year === this.year && item.month === this.month
      })
      this.count()
    }
  },
  async mounted () {
    try {
      try {
        const { data } = await this.axios.get('/orders/getOrdersQuantity', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.orders = data.result.filter(item => {
          return item.year === this.year && item.month === this.month
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '取得訂單數量失敗'
        })
      }

      const { data } = await this.axios.get('/orders/getCategorySales', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      data.result = data.result.map(item => {
        item = { ...item._id, totalSaleAmount: item.totalSaleAmount }
        return item
      })
      this.categorySales = data.result.filter(item => {
        return item.year === this.year && item.month === this.month
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得分類業績失敗'
      })
    }

    try {
      const { data } = await this.axios.get('/admins', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.targetSales = data.result.targetSales
      this.count()
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }

    try {
      const { data } = await this.axios.get('/orders/getProductSales', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.products = data.result.map(item => {
        item = { ...item._id, productQuantity: item.productQuantity, productSaleAmount: item.productSaleAmount }
        if (item.image === null || item.image.length === 0) {
          item.image = item.imagefiles.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          item.imagefiles = []
        } else {
          item.image = item.image.concat(item.imagefiles)
          item.image = item.image.map(r => `${process.env.VUE_APP_API}/files/${r}`)
          item.imagefiles = []
        }
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品業績失敗'
      })
    }
  },
  watch: {
    year: {
      handler: function () {
        this.update()
        this.count()
      },
      deep: true
    },
    month: {
      handler: function () {
        this.update()
        this.count()
      },
      deep: true
    }
  }
}
</script>
