import axios from 'axios'

const product = {
  state: {
    allProduct: [],
    productSeller: [],
    newProduct: [],
    popularProduct: [],
    selectProduct: [],
    productId: ''
  },
  mutations: {
    setAllProduct (state, payload) {
      state.allProduct = payload
    },
    setProductSeller (state, payload) {
      state.productSeller = payload
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

    getProductSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?seller=' + payload)
          .then((res) => {
            setex.commit('setProductSeller', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    sortNameProductSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?seller=' + payload.id + '&sort=products.name&order=' + payload.sort)
          .then((res) => {
            setex.commit('setProductSeller', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    sortPriceProductSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?seller=' + payload.id + '&sort=products.price&order=' + payload.sort)
          .then((res) => {
            setex.commit('setProductSeller', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    sortStockProductSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?seller=' + payload.id + '&sort=products.stock&order=' + payload.sort)
          .then((res) => {
            setex.commit('setProductSeller', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    searchProductSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?seller=' + payload.id + '&search=' + payload.search)
          .then((res) => {
            console.log(res.data.result)
            setex.commit('setProductSeller', res.data.result)
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
    chooseProduct (setex, payload) {
      setex.commit('setSelectProduct', payload)
    }
  },
  getters: {
    allProduct (state) {
      return state.allProduct
    },
    productSeller (state) {
      return state.productSeller
    },
    newProduct (state) {
      return state.newProduct
    },
    popularProduct (state) {
      return state.popularProduct
    },
    selectProduct  (state) {
      return state.selectProduct
    }
  }
}

export default product
