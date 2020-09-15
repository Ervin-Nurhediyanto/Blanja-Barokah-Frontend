import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    allProduct: [],
    newProduct: [],
    popularProduct: [],
    selectProduct: [],
    productId: '',
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null,
    userId: localStorage.getItem('userId') || null,
    userImg: localStorage.getItem('userImg') || null,
    userName: localStorage.getItem('userName') || null,
    userEmail: localStorage.getItem('userEmail') || null,
    userGender: localStorage.getItem('userGender') || null,
    userdateOfBirth: localStorage.getItem('userdateOfBirth') || null,
    userphoneNumber: localStorage.getItem('userphoneNumber') || null,
    userstoreName: localStorage.getItem('userstoreName') || null,
    userstoreDescription: localStorage.getItem('userstoreDescription') || null,
    userRoleId: localStorage.getItem('userRoleId') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
      state.userId = payload.id
      state.userName = payload.name
      state.userImg = payload.image
      state.userRoleId = payload.roleId
      state.userEmail = payload.email
      state.userGender = payload.gender
      state.userdateOfBirth = payload.dateOfBirth
      state.userphoneNumber = payload.phoneNumber
      state.userstoreName = payload.storeName
      state.userstoreDescription = payload.storeDescription
    },
    setToken (state, payload) {
      state.token = payload
    },
    setSesetId (state, id) {
      state.resetId = id
    },
    setAllProduct (state, payload) {
      state.allProduct = payload
    },
    setNewProduct (state, payload) {
      state.newProduct = payload
    },
    setPopularProduct (state, payload) {
      state.popularProduct = payload
    },
    setSelectProduct (state, payload) {
      state.selectProduct = payload
    },
    setProductId (state, payload) {
      state.productId = payload
    }
  },
  actions: {
    getAllProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products')
          .then((res) => {
            setex.commit('setAllProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getNewProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.id&order=DESC')
          .then((res) => {
            setex.commit('setNewProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getPopularProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.rate&order=DESC')
          .then((res) => {
            setex.commit('setPopularProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getSearchProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?search=' + payload)
          .then((res) => {
            // setex.commit('setAllProduct', res.data.result)
            // resolve(res.data.result)
            setex.commit('setNewProduct', res.data.result)
            setex.commit('setPopularProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/products', payload)
          .then((res) => {
            // setex.commit('setAllProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/products/' + this.state.productId, payload)
          .then((res) => {
            // setex.commit('setAllProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/products/' + payload)
          .then((res) => {
            // setex.commit('setAllProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        router.push('/login')
        // alert(error.response.data.result.message)
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    loginSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/seller', payload)
          .then((res) => {
            console.log(res.data.result.message)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            localStorage.setItem('userId', this.state.userId)
            localStorage.setItem('userImg', this.state.userImg)
            localStorage.setItem('userRoleId', this.state.userRoleId)
            localStorage.setItem('userName', this.state.userName)

            localStorage.getItem('userEmail', this.state.userEmail)
            localStorage.getItem('userGender', this.state.userGender)
            localStorage.getItem('userdateOfBirth', this.state.userdateOfBirth)
            localStorage.getItem('userphoneNumber', this.state.userphoneNumber)
            localStorage.getItem('userstoreName', this.state.userstoreName)
            localStorage.getItem('userstoreDescription', this.state.userstoreDescription)

            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/custommer/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    registerSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/seller/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    registerCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/custommer/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setSesetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateSeller (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/storeProfile/${this.state.userId}`, payload)
          .then((res) => {
            console.log(res.data.message)
            localStorage.setItem('userName', this.state.userName)
            localStorage.getItem('userEmail', this.state.userEmail)
            localStorage.getItem('userGender', this.state.userGender)
            localStorage.getItem('userdateOfBirth', this.state.userdateOfBirth)
            localStorage.getItem('userphoneNumber', this.state.userphoneNumber)
            localStorage.getItem('userstoreName', this.state.userstoreName)
            localStorage.getItem('userstoreDescription', this.state.userstoreDescription)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getDataUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/users/' + this.state.userId)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },

    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
          localStorage.removeItem('userRoleId')
          localStorage.removeItem('userName')
          localStorage.removeItem('userId')
          localStorage.removeItem('userImg')
        }
      })
    },

    chooseProduct (setex, payload) {
      setex.commit('setSelectProduct', payload)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userId (state) {
      return state.userId
    },
    userImg (state) {
      return state.userImg
    },
    userName (state) {
      return state.userName
    },
    userRoleId (state) {
      return state.userRoleId
    },

    userEmail (state) {
      return state.userEmail
    },
    userGender (state) {
      return state.userGender
    },
    userdateOfBirth (state) {
      return state.userdateOfBirth
    },
    userphoneNumber (state) {
      return state.userphoneNumber
    },
    userstoreName (state) {
      return state.userstoreName
    },
    userstoreDescription (state) {
      return state.userstoreDescription
    },

    allProduct (state) {
      return state.allProduct
    },
    newProduct (state) {
      return state.newProduct
    },
    popularProduct (state) {
      return state.popularProduct
    },
    selectProduct  (state) {
      return state.selectProduct
    },
    resetId (state) {
      return state.resetId
    },
    isLogin (state) {
      return state.token !== null
    },
    token (state) {
      return state.token
    }
  },
  modules: {
  }
})
