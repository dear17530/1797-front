import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '1797'
    }
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: () => import(/* webpackChunkName: "SingleProduct" */ '../views/SingleProduct.vue'),
    meta: {
      title: '商品 | 1797'
    }
  },
  {
    path: '/actives',
    name: 'Actives',
    component: () => import(/* webpackChunkName: "actives" */ '../views/Actives.vue'),
    meta: {
      title: '活動揪團版 | 1797'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      title: '團購揪團版 | 1797'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      login: true,
      title: '購物車 | 1797'
    }
  },
  {
    path: '/usermessage',
    name: 'UserMessage',
    component: () => import(/* webpackChunkName: "UserMessage" */ '../views/UserMessage.vue'),
    meta: {
      login: true,
      title: '私人訊息 | 1797'
    }
  },
  {
    path: '/userdata',
    name: 'UserData',
    component: () => import(/* webpackChunkName: "UserData" */ '../views/UserData.vue'),
    meta: {
      login: true,
      title: '會員資料 | 1797'
    }
  },
  {
    path: '/userorders',
    name: 'UserOrders',
    component: () => import(/* webpackChunkName: "UserOrders" */ '../views/UserOrders.vue'),
    meta: {
      login: true,
      title: '訂單資料 | 1797'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      login: true,
      admin: true,
      title: '訂單管理 | 1797'
    },
    children: [
      {
        path: 'adminorders',
        name: 'Adminorders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Adminorders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '營運分析 | 1797'
        }
      },
      {
        path: 'adminanalysis',
        name: 'Adminanalysis',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Adminanalysis.vue'),
        meta: {
          login: true,
          admin: true,
          title: '營運分析 | 1797'
        }
      },
      {
        path: 'adminproducts',
        name: 'Adminproducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Adminproducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理 | 1797'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && store.state.user.account.length === 0) {
    next('/login')
  } else if (to.meta.admin && store.state.user.role !== 1) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // document.title = to.meta.title
})

export default router
