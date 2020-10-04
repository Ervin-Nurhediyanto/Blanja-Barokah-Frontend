<template>
    <div>
        <div class="container-fluid row">
            <div id="profil">
                <div class="row">
                    <div class="mx-auto mb-5">
                        <div class=" row ml-4">
                            <img :src="userImg" id="photo" height="61px">
                            <div class="col">
                                <h5 class="m-0 mt-2">{{userName}}</h5>
                                <a class="text-secondary">
                                  <img src="../../assets/icon-profil/edit (1) 1.png">
                                  ubah profil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col" id="iconprofil">
                        <div class="col mb-4">
                            <div class="row">
                                <button
                                class="text-secondary btn border border-0 bg-white"
                                @click="handleShowStore">
                                    <div class="row">
                                        <div id="icon" style="background: #456BF3;" >
                                            <img src="../../assets/icon-seller/home (2) 1.png" alt="">
                                        </div>
                                        <h6 class="my-auto ml-2">Store</h6>
                                    </div>
                                </button>
                            </div>
                            <button
                            v-show="showStore"
                            class="text-secondary btn border border-0 bg-white"
                            @click="component='profilestore'">
                              Store Profile
                            </button>
                        </div>
                        <div class="col mb-4">
                            <div class="row">
                                <button
                                class="text-secondary btn border border-0 bg-white"
                                @click="handleShowProduct">
                                    <div class="row">
                                        <div id="icon" style="background: #F36F45;">
                                            <img src="../../assets/icon-seller/package 1.png" alt="">
                                        </div>
                                        <h6 class="my-auto ml-2">Product</h6>
                                    </div>
                                </button>
                            </div>
                            <div>
                              <button
                              v-show="showProduct"
                              class="text-secondary btn border border-0 bg-white"
                              @click="component='product'; handleProduct">
                                My product
                              </button>
                            </div>
                            <div>
                              <button
                              v-show="showProduct"
                              class="text-secondary btn border border-0 bg-white"
                              @click="component='selling'">
                                Selling Product
                              </button>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="row">
                                <button
                                class="text-secondary btn border border-0 bg-white"
                                @click="handleShowOrder">
                                    <div class="row">
                                        <div id="icon" style="background: #F3456F;">
                                            <img src="../../assets/icon-seller/shopping-cart (3) 1.png" alt="">
                                        </div>
                                        <h6 class="my-auto ml-2">Order</h6>
                                    </div>
                                </button>
                            </div>
                        <div>
                          <button
                          v-show="showOrder"
                          class="text-secondary btn border border-0 bg-white"
                          @click="component='order'">
                            My order
                          </button>
                        </div>
                        <div>
                          <button
                          v-show="showOrder"
                          class="text-secondary btn border border-0 bg-white">
                            Order Cancel
                          </button>
                        </div>
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
import profilestore from '../../components/_base/seller/profilestore'
import order from '../../components/_base/seller/order'
import product from '../../components/_base/seller/product'
import selling from '../../components/_base/seller/formSelling'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Seller',
  components: {
    profilestore,
    order,
    product,
    selling
  },
  data () {
    return {
      component: profilestore,
      showStore: false,
      showProduct: false,
      showOrder: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      userImg: 'userImg',
      userName: 'userName',
      userId: 'userId',
      userstoreName: 'userstoreName'
    })
  },
  methods: {
    ...mapActions([
      'getSearchProduct',
      'getProductSeller'
    ]),

    handleShowStore () {
      if (this.showStore) {
        this.showStore = false
      } else {
        this.showStore = true
      }
    },

    handleShowProduct () {
      if (this.showProduct) {
        this.showProduct = false
      } else {
        this.showProduct = true
      }
    },

    handleShowOrder () {
      if (this.showOrder) {
        this.showOrder = false
      } else {
        this.showOrder = true
      }
    },

    handleProduct () {
      // this.getProductSeller(this.userId)
      // this.getProductSeller('3')
    }
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
#iconprofil{
  width: 120px;
  margin-left: 120px;
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
  background: #F5F5F5;
}
#form {
  background: white;
  margin-top: 45px;
  width: 90%;
  height: 500px;
}
.form-inline {
  border: 1px solid #bdb7b7 !important;
  overflow: hidden;
  padding: 0;
  height: 35px;
  width: 250px;
}
.form-inline input {
  border: none;
}
</style>
