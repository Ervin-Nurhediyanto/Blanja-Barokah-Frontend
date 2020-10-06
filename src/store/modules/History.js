import axios from 'axios'

const history = {
  state: {
    allHistory: [],
    historyUser: [],
    historySeller: [],
    idTransfer: ''
  },
  mutations: {
    setAllHistory (state, payload) {
      state.allHistory = payload
    },
    setHistoryUser (state, payload) {
      state.historyUser = payload
    },
    setHistorySeller (state, payload) {
      state.historySeller = payload
    },
    setIdTransfer (state, payload) {
      state.idTransfer = payload
    }
  },
  actions: {
    getAllHistory (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/histories')
          .then((res) => {
            setex.commit('setAllHistory', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getHistoryUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/histories/?user=' + payload + '&sort=id&order=DESC')
          .then((res) => {
            setex.commit('setHistoryUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getHistorySeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/histories/?seller=' + payload + '&sort=id&order=DESC')
          .then((res) => {
            setex.commit('setHistorySeller', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addHistory (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/histories', payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    changeStatus (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/histories/status/' + payload.id, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    sendImageTransfer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/histories/transfer/' + payload.id, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getIdTransfer (setex, payload) {
      setex.commit('setIdTransfer', payload)
    }
  },
  getters: {
    allHistory (state) {
      return state.allHistory
    },
    historyUser (state) {
      return state.historyUser
    },
    historySeller (state) {
      return state.historySeller
    },
    idTransfer (state) {
      return state.idTransfer
    }
  }
}

export default history
