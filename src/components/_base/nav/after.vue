<template>
    <div>
        <nav class="bg-light p-0 shadow">
            <nav class="navbar container navbar-expand-lg navbar-light bg-light p-0">
                <div class="barokah row mx-auto my-2" @click="home">
                    <img src="../../../assets/Vector.png">
                    <strong id="brand" class="barokah my-auto mr-5" >Barokah</strong>
                </div>
                <button class="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row">
                    <form class="form-inline rounded-pill bg-white row mt-1 ml-5 mb-2">
                        <input class="form-control mr-3 rounded-pill w-100 col" type="text" v-model="search" @keyup.enter="searchProduct" placeholder="Search" aria-label="Search">
                        <a href="#" type="submit">
                            <img src="../../../assets/nav/Search.png" class="my-2 col-auto"  @click.prevent="searchProduct">
                        </a>
                    </form>
                        <button type="button" id="btndrop" class="btn ml-4 my-auto" data-toggle="modal" data-target="#navModal">
                            <img src="../../../assets/nav/filter.png">
                        </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/shopping-cart.png" @click="myBag"></a>
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/bell.png"></a>
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/mail.png" @click="chat"></a>

                        <a v-if="userImg" class="nav-link mr-5 img-container" href="#"><img :src="userImg" class="rounded-circle" @click="profile"></a>
                        <a v-else class="nav-link mr-5 img-container" href="#"><img src="../../../assets/Profile/pp.png" class="rounded-circle" @click="profile"></a>

                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/logout.png" class="logout" @click="handleLogout"></a>
                    </div>
                </div>
            </nav>
        </nav>
        <!-- modal -->
        <div class="modal fade" id="navModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header mr-auto border border-0">
                        <button type="button" class="close mr-auto" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        <h5>Filter</h5>
                    </div>
                    <form action="post">
                        <div class="modal-body border-top">
                            <strong>Colors</strong><br>
                            <div id="color" class="row mt-2">
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample1" name="groupOfDefaultRadios" checked v-model="color" value="Black">
                                    <label class="option-input radio" for="defaultGroupExample1" style="background: black;"></label>
                                </div>
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample2" name="groupOfDefaultRadios"
                                    v-model="color" value="White">
                                    <label class="option-input radio" for="defaultGroupExample2" style="background: #FFFFFF;"></label>
                                </div>
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample3" name="groupOfDefaultRadios" v-model="color" value="Red">
                                    <label class="option-input radio" for="defaultGroupExample3" style="background: #B82222;"></label>
                                </div>
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample4" name="groupOfDefaultRadios" v-model="color" value="Grey">
                                    <label class="option-input radio" for="defaultGroupExample4" style="background: #BEA9A9;"></label>
                                </div>
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample5" name="groupOfDefaultRadios" v-model="color" value="Brown">
                                    <label class="option-input radio" for="defaultGroupExample5" style="background: #E2BB8D;"></label>
                                </div>
                                <div class="custom-control custom-radio clr" @click="changeColor">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroupExample6" name="groupOfDefaultRadios" v-model="color" value="Blue">
                                    <label class="option-input radio" for="defaultGroupExample6" style="background: #151867"></label>
                                </div>
                            </div>
                            <br>
                            <hr>
                            <strong>Sizes</strong><br>
                            <div id="color" class="row mt-2">
                                <div class="custom-control custom-radio size" @click="changeSize">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroup1" name="groupOfDefaultRadios" checked v-model="size" value="XS">
                                    <label class="input-size radio" for="defaultGroup1">XS</label>
                                </div>
                                <div class="custom-control custom-radio size" @click="changeSize">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroup2" name="groupOfDefaultRadios" v-model="size" value="S">
                                    <label class="input-size radio" for="defaultGroup2">S</label>
                                </div>
                                <div class="custom-control custom-radio size" @click="changeSize">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroup3" name="groupOfDefaultRadios" v-model="size" value="M">
                                    <label class="input-size radio" for="defaultGroup3">M</label>
                                </div>
                                <div class="custom-control custom-radio size" @click="changeSize">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroup4" name="groupOfDefaultRadios" v-model="size" value="L">
                                    <label class="input-size radio" for="defaultGroup4">L</label>
                                </div>
                                <div class="custom-control custom-radio size" @click="changeSize">
                                    <input type="radio" class="custom-control-input option-input" id="defaultGroup5" name="groupOfDefaultRadios" v-model="size" value="XL">
                                    <label class="input-size radio" for="defaultGroup5">XL</label>
                                </div>
                            </div>
                            <hr>
                            <strong>Category</strong><br>
                            <div id="color" class="row mt-2">
                                <div class="custom-control custom-radio category" @click="changeCategory">
                                    <input type="radio" class="custom-control-input option-input" id="group1" name="groupOfDefaultRadios" checked v-model="category" value="All">
                                    <label class="input-category radio" for="group1">All</label>
                                </div>
                                <div class="custom-control custom-radio category" @click="changeCategory">
                                    <input type="radio" class="custom-control-input option-input" id="group2" name="groupOfDefaultRadios" v-model="category" value="Woman">
                                    <label class="input-category radio" for="group2">Woman</label>
                                </div>
                                <div class="custom-control custom-radio category" @click="changeCategory">
                                    <input type="radio" class="custom-control-input option-input" id="group3" name="groupOfDefaultRadios" v-model="category" value="Men">
                                    <label class="input-category radio" for="group3">Men</label>
                                </div>
                                <div class="custom-control custom-radio category" @click="changeCategory">
                                    <input type="radio" class="custom-control-input option-input" id="group4" name="groupOfDefaultRadios" v-model="category" value="Girls">
                                    <label class="input-category radio" for="group4">Girls</label>
                                </div>
                                <div class="custom-control custom-radio category" @click="changeCategory">
                                    <input type="radio" class="custom-control-input option-input" id="group5" name="groupOfDefaultRadios" v-model="category" value="Boys">
                                    <label class="input-category radio" for="group5">Boys</label>
                                </div>
                            </div>
                            <hr>
                            <strong>Brand</strong><br>
                            <select name="brandCategory" id="brandCategory" class="w-100 border border-0 mb-4" v-model="brand" @change="changebrand">
                                <option value="">All Brand</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </select>
                            <div class="modal-footer px-5 row">
                                <button type="button" class="btn btn-outline-secondary rounded-pill w-50 col mx-2" data-dismiss="modal">Disscard</button>
                                <button type="submit" style="background-color: #d31d0d;" class="btn btn-danger rounded-pill w-50 col mx-2" @click.prevent="handleFilter">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'after',
  data () {
    return {
      search: '',
      color: '',
      size: '',
      category: '',
      brand: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      userId: 'userId',
      userImg: 'userImg',
      userName: 'userName',
      userRoleId: 'userRoleId',
      userEmail: 'userEmail',
      userGender: 'userGender',
      userdateOfBirth: 'userdateOfBirth',
      userphoneNumber: 'userphoneNumber',
      userstoreName: 'userstoreName',
      userstoreDescription: 'userstoreDescription',
      allProduct: 'allProduct'
    })
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'getSearchProduct',
      'getProductSeller',
      'filter',
      'logout'
    ]),
    chat () {
      this.$router.push('/chat')
    },
    home () {
      this.$router.push('/')
    },
    myBag () {
      if (this.userRoleId === 'Seller') {
        this.$swal({
          icon: 'error',
          title: 'Customer Only',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.$router.push('/mybag')
      }
    },
    searchProduct () {
      this.getSearchProduct(this.search)
    },
    profile () {
      if (this.userRoleId === 'Seller') {
        this.getProductSeller(this.userId)
        this.$router.push('/profileSeller')
      } else {
        this.$router.push('/profileCustomer')
      }
    },

    // Filter Product
    changeColor () {
      this.brand = ''
      this.size = ''
      this.category = ''
    },
    changeSize (size) {
      this.brand = ''
      this.color = ''
      this.category = ''
    },
    changeCategory (category) {
      this.brand = ''
      this.color = ''
      this.size = ''
    },
    changebrand () {
      this.color = ''
      this.size = ''
      this.category = ''
    },
    handleFilter () {
      const data = {
        color: this.color || null,
        size: this.size || null,
        category: this.category || null,
        brand: this.brand || null
      }
      this.filter(data)
        .then((res) => {
        })
    },
    // End Filter Product

    handleLogout () {
      this.$router.go(0)
      this.logout()
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
#color {
    font-family: 'Roboto', sans-serif;
}
@keyframes click-wave {
    0% {
        height: 40px;
        width: 40px;
        opacity: 0.35;
        position: relative;
    }
    100% {
        height: 200px;
        width: 200px;
        margin-left: -80px;
        margin-top: -80px;
        opacity: 0;
    }
}
.logout {
    max-height: 30px;
}
.rounded-circle {
    max-height: 35px;
    /* max-width: 90px; */
}
.barokah {
    cursor: pointer;
}
.option-input.radio {
    margin-right: 0;
    width: 40px;
    height: 40px;
    border: 3px solid #e5e5e5;
}
.option-input:hover {
    opacity: 0.4;
}
.option-input.radio {
    border-radius: 50%;
}
.option-input.radio::after {
    border-radius: 50%;
}
.input-size.radio {
    margin-right: 0;
    width: 40px;
    height: 40px;
    padding: 5px;
    border: 3px solid #e5e5e5;
}
.input-size:hover {
    opacity: 0.4;
}
.input-size.radio {
    border-radius: 15%;
}
.input-size.radio::after {
    border-radius: 15%;
}
.input-category.radio {
    margin-right: 0;
    width: 70px;
    height: 40px;
    padding: 5px;
    border: 3px solid #e5e5e5;
}
.input-category:hover {
    opacity: 0.4;
}
.input-category.radio {
    border-radius: 15%;
}
.input-category.radio::after {
    border-radius: 15%;
}
.clr input[type=radio]:checked+label {
    border: 2px solid #ec3838;
    width: 43px;
    height: 43px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 8px 6px 0 rgba(184, 180, 180, 0.19);
    position: relative;
    content: '✔';
}
.size input[type=radio]:checked+label {
    border: none;
    width: 43px;
    height: 43px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 8px 6px 0 rgba(184, 180, 180, 0.19);
    position: relative;
    content: '✔';
}
.category input[type=radio]:checked+label {
    border: none;
    width: 70px;
    height: 43px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 8px 6px 0 rgba(184, 180, 180, 0.19);
    position: relative;
    content: '✔';
}
.img-container {
  width: 50px;
  height: 50px;
  margin-left: 40px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
