import axios from 'axios'

const address = {
  state: {
    allAddress: [],
    userAddress: [],
    selectAddress: {}
  },
  mutations: {
    setAllAddress (state, payload) {
      state.allAddress = payload
    },
    setUserAddress (state, payload) {
      state.userAddress = payload
    },
    setSelectAddress (state, payload) {
      state.selectAddress = payload
    }
  },
  actions: {
    getAllAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/address')
          .then((res) => {
            setex.commit('setAllAddress', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getUserAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/address/?user=' + payload.id)
          .then((res) => {
            setex.commit('setUserAddress', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    addAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/address', payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    updateAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/address/' + payload.id, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    deleteAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_BASE_URL + '/address/' + payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    setPrimaryAddress (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/address/primary/' + payload.id, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getSelectAddress (setex, payload) {
      setex.commit('setSelectAddress', payload)
    }
  },
  getters: {
    allAddress (state) {
      return state.allAddress
    },
    userAddress (state) {
      return state.userAddress
    },
    selectAddress (state) {
      return state.selectAddress
    }
  }
}

export default address
