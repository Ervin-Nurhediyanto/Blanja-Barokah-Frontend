import axios from 'axios'

const product = {
  state: {
    allProduct: [],
    productSeller: [],
    newProduct: [],
    popularProduct: [],
    selectProduct: [],
    productId: '',
    totalPage: '',
    pageNew: '',
    pagePopular: ''
  },
  mutations: {
    setAllProduct (state, payload) {
      state.allProduct = payload
    },
    setProductSeller (state, payload) {
      state.productSeller = payload
    },

    // New Product
    setNewProduct (state, payload) {
      state.newProduct = payload
    },
    setPageNew (state, payload) {
      state.pageNew = payload
    },
    // End New Product

    // Popular Product
    setPopularProduct (state, payload) {
      state.popularProduct = payload
    },
    setPagePopular (state, payload) {
      state.pagePopular = payload
    },
    // End Popular Product

    setSelectProduct (state, payload) {
      state.selectProduct = payload
    },
    setProductId (state, payload) {
      state.productId = payload
    },
    setTotalPage (state, payload) {
      state.totalPage = payload
    }
  },
  actions: {
    getAllProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products')
          .then((res) => {
            setex.commit('setAllProduct', res.data.result)
            setex.commit('setTotalPage', Math.ceil(res.data.result.length / 10))
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
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // New Product
    getNewProductHome (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.id&order=DESC&page=1&limit=10')
          .then((res) => {
            setex.commit('setPageNew', Number(res.data.page))
            setex.commit('setNewProduct', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getPageNew (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.id&order=DESC&page=' + payload + '&limit=10')
          .then((res) => {
            setex.commit('setPageNew', Number(res.data.page))
            setex.commit('setNewProduct', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // End New Product

    // Popular Product
    getPopularProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.rate&order=DESC&page=1&limit=10')
          .then((res) => {
            setex.commit('setPagePopular', Number(res.data.page))
            setex.commit('setPopularProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getPagePopular (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.rate&order=DESC&page=' + payload + '&limit=10')
          .then((res) => {
            setex.commit('setPagePopular', Number(res.data.page))
            setex.commit('setPopularProduct', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // End Popular Product

    getSearchProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        // Search New Product
        axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.id&order=DESC&page=1&limit=10&search=' + payload)
          .then((res) => {
            setex.commit('setPageNew', Number(res.data.page))
            setex.commit('setNewProduct', res.data.result)
            // End Search New Product

            // Search Popular Product
            axios.get(process.env.VUE_APP_BASE_URL + '/products/?sort=products.rate&order=DESC&page=1&limit=10&search=' + payload)
              .then((res) => {
                setex.commit('setPagePopular', Number(res.data.page))
                setex.commit('setPopularProduct', res.data.result)
                // End Search Popular Product

                // Search Set Total Page
                axios.get(process.env.VUE_APP_BASE_URL + '/products/?search=' + payload)
                  .then((res) => {
                    setex.commit('setAllProduct', res.data.result)
                    setex.commit('setTotalPage', Math.ceil(res.data.result.length / 10))
                    // End Search Set Total Page
                    resolve(res.data.result)
                  })
                  .catch((err) => {
                    reject(err)
                  })
              })
              .catch((err) => {
                reject(err)
              })
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
            console.log(res.data.result)
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
            console.log(res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    imageProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/products/updateImage/' + payload.id, payload.data)
          .then((res) => {
            console.log(res.data.result)
            resolve(res)
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
            console.log(res.data.result)
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
    },
    totalPage (state) {
      return state.totalPage
    },
    pageNew (state) {
      return state.pageNew
    },
    pagePopular (state) {
      return state.pagePopular
    }
  }
}

export default product
