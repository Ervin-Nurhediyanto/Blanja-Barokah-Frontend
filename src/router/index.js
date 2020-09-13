import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Auth/Login.vue'
import Reset from '../views/Auth/ResetPassword.vue'
import Chat from '../views/Chat/Chat.vue'
import ProfileCustomer from '../views/Profile/Customer.vue'
import ProfileSeller from '../views/Profile/Seller.vue'
import Product from '../views/Product/Product.vue'
import MyBag from '../views/MyBag/MyBag.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { requiresAuth: true }
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { requiresVisitor: true }
},
{
  path: '/reset',
  name: 'Reset',
  component: Reset,
  meta: { requiresVisitor: true }
},
{
  path: '/chat',
  name: 'Chat',
  component: Chat,
  meta: { requiresAuth: true }
},
{
  path: '/product',
  name: 'Product',
  component: Product,
  meta: { requiresAuth: true }
},
{
  path: '/mybag',
  name: 'MyBag',
  component: MyBag,
  meta: { requiresAuth: true }
},
{
  path: '/checkout',
  name: 'Checkout',
  component: Checkout,
  meta: { requiresAuth: true }
},
{
  path: '/profileCustomer',
  name: 'ProfileCustomer',
  component: ProfileCustomer,
  meta: { requiresAuth: true }
},
{
  path: '/profileSeller',
  name: 'ProfileSeller',
  component: ProfileSeller,
  meta: { requiresAuth: true }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
