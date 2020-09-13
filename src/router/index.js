import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Auth/Login.vue'
import Reset from '../views/Auth/ResetPassword.vue'
import Chat from '../views/Chat/Chat.vue'
import store from '../store/index'
import Product from '../views/Product/Product.vue'
import MyBag from '../views/MyBag/MyBag.vue'
import Checkout from '../views/Checkout/Checkout.vue'

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
  meta: { requiresVisitor: true }
},
{
  path: '/mybag',
  name: 'MyBag',
  component: MyBag,
  meta: { requiresVisitor: true }
},
{
  path: '/checkout',
  name: 'Checkout',
  component: Checkout,
  meta: { requiresVisitor: true }
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
