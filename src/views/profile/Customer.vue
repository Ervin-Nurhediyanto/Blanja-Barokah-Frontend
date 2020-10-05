<template>
  <div>
    <div class="container-fluid row">
      <div id="profil">
        <div class="row">
          <div class="mx-auto mb-5">
            <div class="row ml-4">
              <div class="img-container">
                <img
                  v-if="userImg"
                  :src="userImg"
                  id="photo"
                  height="61px"
                />
                <img
                  v-else
                  src="../../assets/Profile/pp.png"
                  id="photo"
                  height="61px"
                />
              </div>
              <div class="col">
                <h5 v-if="userName" class="m-0 mt-2">{{ userName }}</h5>
                <h5 v-else class="m-0 mt-2">username</h5>
                <a class="text-secondary">
                  <img src="../../assets/icon-profil/edit (1) 1.png" />
                  ubah profil
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" id="iconprofil">
            <div class="row">
              <button
                class="text-secondary btn border border-0 bg-white"
                @click="component = 'profil'"
              >
                <div class="row mb-4">
                  <div id="icon" style="background: #456bf3">
                    <img src="../../assets/icon-profil/user 1.png" alt="" />
                  </div>
                  <h6 class="my-auto ml-2">My Account</h6>
                </div>
              </button>
            </div>
            <div class="row">
              <button
                class="text-secondary btn border border-0 bg-white"
                @click="component = 'shippingAddress'"
              >
                <div class="row mb-4">
                  <div id="icon" style="background: #f36f45">
                    <img
                      src="../../assets/icon-profil/map-pin (3) 1.png"
                      alt=""
                    />
                  </div>
                  <h6 class="my-auto ml-2">Shipping Address</h6>
                </div>
              </button>
            </div>
            <div class="row">
              <button
                class="text-secondary btn border border-0 bg-white"
                @click="component = 'myorder'"
              >
                <div class="row">
                  <div id="icon" style="background: #f3456f">
                    <img
                      src="../../assets/icon-profil/clipboard 1.png"
                      alt=""
                    />
                  </div>
                  <h6 class="my-auto ml-2">My Order</h6>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="area">
        <div id="form" class="shadow ml-5 p-4">
          <component v-bind:is="component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profil from '../../components/_base/costumer/profilecustomer'
import shippingAddress from '../../components/_base/costumer/address'
import myorder from '../../components/_base/costumer/myorder'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Costumer',
  components: {
    profil,
    shippingAddress,
    myorder
  },
  data () {
    return {
      component: profil
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      userImg: 'userImg',
      userName: 'userName',
      userstoreName: 'userstoreName'
    })
  },
  methods: {
    ...mapActions(['getSearchProduct'])
  }
}
</script>

<style scoped>
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.container-fluid {
  height: 91vh;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none !important;
}
#profil {
  width: 28%;
  padding-top: 45px;
}
#iconprofil {
  width: 120px;
  margin-left: 120px;
}
#photo {
  border-radius: 50%;
}
#icon {
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
#profil h6:hover {
  background: rgb(255, 242, 124);
}
#icon img {
  margin: auto;
}
#area {
  width: 72%;
  background: #f5f5f5;
}
#form {
  background: white;
  margin-top: 45px;
  width: 850px;
  height: 500px;
}
.img-container {
  width: 80px;
  height: 80px;
  margin-left: 40px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
