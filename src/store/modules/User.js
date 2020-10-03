import axios from 'axios'
import router from '../../router/index'

const user = {
  state: {
    user: {},
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
    setUsername (state, payload) {
      state.userName = payload
    },
    setUserImage (state, payload) {
      state.userImg = payload
    },
    setDateOfBirth (state, payload) {
      state.userdateOfBirth = payload
    },
    setGender (state, payload) {
      state.userGender = payload
    },
    setStoreName (state, payload) {
      state.userstoreName = payload
    },
    setPhone (state, payload) {
      state.userphoneNumber = payload
    },
    setStoreDes (state, payload) {
      state.userstoreDescription = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setResetId (state, id) {
      state.resetId = id
    }
  },
  actions: {
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
            // console.log(res.data.result.message)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('userId', res.data.result.id)
            localStorage.setItem('userImg', res.data.result.image)
            localStorage.setItem('userRoleId', res.data.result.roleId)
            localStorage.setItem('userName', res.data.result.name)
            localStorage.setItem('userEmail', res.data.result.email)
            localStorage.setItem('userGender', res.data.result.gender)
            localStorage.setItem('userdateOfBirth', res.data.result.dateOfBirth)
            localStorage.setItem('userphoneNumber', res.data.result.phoneNumber)
            localStorage.setItem('userstoreName', res.data.result.storeName)
            localStorage.setItem('userstoreDescription', res.data.result.storeDescription)

            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/custommer/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('userId', res.data.result.id)
            localStorage.setItem('userImg', res.data.result.image)
            localStorage.setItem('userRoleId', res.data.result.roleId)
            localStorage.setItem('userName', res.data.result.name)
            localStorage.setItem('userEmail', res.data.result.email)
            localStorage.setItem('userGender', res.data.result.gender)
            localStorage.setItem('userdateOfBirth', res.data.result.dateOfBirth)
            localStorage.setItem('userphoneNumber', res.data.result.phoneNumber)
            localStorage.setItem('userstoreName', res.data.result.storeName)
            localStorage.setItem('userstoreDescription', res.data.result.storeDescription)

            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
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
            // alert(err.response.data.result)
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
            // alert(err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
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
    getUserID (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/users/' + payload)
          .then((res) => {
            setex.commit('setUserImage', res.data.result[0].image)
            localStorage.setItem('userImg', res.data.result[0].image)

            setex.commit('setStoreName', res.data.result[0].storeName)
            localStorage.setItem('userstoreName', res.data.result[0].storeName)

            setex.commit('setPhone', res.data.result[0].phoneNumber)
            localStorage.setItem('userphoneNumber', res.data.result[0].phoneNumber)

            setex.commit('setStoreDes', res.data.result[0].storeDescription)
            localStorage.setItem('userstoreDescription', res.data.result[0].storeDescription)

            setex.commit('setUsername', res.data.result[0].name)
            localStorage.setItem('userName', res.data.result[0].name)

            setex.commit('setDateOfBirth', res.data.result[0].dateOfBirth)
            localStorage.setItem('userdateOfBirth', res.data.result[0].dateOfBirth)

            setex.commit('setGender', res.data.result[0].gender)
            localStorage.setItem('userGender', res.data.result[0].gender)

            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },

    updateSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/users/storeProfile/' + payload.id, payload.data)
          .then((res) => {
            console.log(res.data)
            resolve(res.data.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    uploadImageStore (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/users/uploadImageStore/' + payload.id, payload.data)
          .then((res) => {
            console.log(res.data)
            resolve(res.data.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    updateCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/users/myProfile/' + payload.id, payload.data)
          .then((res) => {
            console.log(res.data)
            resolve(res.data.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    uploadImageCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + '/users/uploadImageStore/' + payload.id, payload.data)
          .then((res) => {
            console.log(res.data)
            resolve(res.data.message)
          })
          .catch((err) => {
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
    resetId (state) {
      return state.resetId
    },
    isLogin (state) {
      return state.token !== null
    },
    token (state) {
      return state.token
    }
  }
}

export default user
