<template>
  <div>
    <h4 class="mb-4">My Product</h4>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >All Items</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          >Not yet paid</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          >Packed</a
        >
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <!-- All Items -->
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
          <a type="submit">
            <img src="../../../assets/nav/Search.png" class="my-2 col-auto" />
          </a>
          <input
            class="form-control rounded-pill w-100 col"
            type="text"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
            @keyup.enter="handleSearch"
          />
        </form>
        <div class="boxes">
          <nav class="navbar navbar-light">
            <button
              type="button"
              class="btn btn-outline-secondary border border-0"
              @click.prevent="handleSortName"
            >
              Product name &#x21C5;
            </button>
            <div class="ml-auto">
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
                @click.prevent="handleSortPrice"
              >
                Price &#x21C5;
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
                @click.prevent="handleSortStock"
              >
                Stock &#x21C5;
              </button>
            </div>
          </nav>
          <!-- Product Seller -->
          <div v-if="productSeller" class="scroll col">
            <div v-if="productSeller !== 'Product not found'">
              <div
                v-for="product in productSeller"
                :key="product.id"
                class="list-product row"
              >
                <div class="product-image bg dark">
                  <a
                    href=""
                    class="text-danger"
                    data-toggle="modal"
                    data-target="#changeProduct"
                  >
                    <img
                    v-if="product.image"
                      :src="product.image.split(',')[0]"
                      alt=""
                      @click.prevent="handleUpdate(product)"
                    />
                    <img
                    v-else
                    src="../../../assets/image/Empty.jpg"
                    alt=""
                    @click.prevent="handleUpdate(product)"
                    >
                  </a>
                </div>
                <h4 class="product-name">{{ product.name }}</h4>
                <h4 class="product-price">Rp.{{ product.price }}</h4>
                <h4 class="product-stock">
                  <span>{{ product.stock }}</span>
                </h4>
              </div>
            </div>
            <!-- Product Not Found -->
            <div v-else>
              <h4>{{ productSeller }}</h4>
            </div>
            <!-- End Product Not Found -->
          </div>
          <div v-else>
            <div class="row mt-5">
              <img
                src="../../../assets/respond-product.png"
                class="mx-auto"
                alt="responsive-image"
              />
            </div>
            <p class="text-center">There are no orders yet</p>
          </div>
          <!-- End Product Seller -->
        </div>
      </div>
      <!-- End All Items -->

      <!-- Not yet paid -->
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
          <a href="#" type="submit">
            <img src="../../../assets/nav/Search.png" class="my-2 col-auto" />
          </a>
          <input
            class="form-control rounded-pill w-100 col"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div class="boxes">
          <nav class="navbar navbar-light">
            <button
              type="button"
              class="btn btn-outline-secondary border border-0"
            >
              Product name &#x21C5;
            </button>
            <div class="ml-auto">
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
              >
                Price &#x21C5;
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
              >
                Stock &#x21C5;
              </button>
            </div>
          </nav>

          <div>
            <div class="row mt-5">
              <img
                src="../../../assets/respond-product.png"
                class="mx-auto"
                alt="responsive-image"
              />
            </div>
            <p class="text-center">There are no products yet</p>
          </div>
        </div>
      </div>
      <!-- End Not yet paid -->

      <!-- Packed -->
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
          <a href="#" type="submit">
            <img src="../../../assets/nav/Search.png" class="my-2 col-auto" />
          </a>
          <input
            class="form-control rounded-pill w-100 col"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div class="boxes">
          <nav class="navbar navbar-light">
            <button
              type="button"
              class="btn btn-outline-secondary border border-0"
            >
              Product name &#x21C5;
            </button>
            <div class="ml-auto">
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
              >
                Price &#x21C5;
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary border border-0"
              >
                Stock &#x21C5;
              </button>
            </div>
          </nav>
          <div class="row mt-5">
            <img
              src="../../../assets/respond-product.png"
              class="mx-auto"
              alt="responsive-image"
            />
          </div>
          <p class="text-center">There are no orders yet</p>
        </div>
      </div>
      <!-- End Packed -->
    </div>

    <!-- Modal Change Product-->
    <div
      class="modal fade"
      id="changeProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header border border-0">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body border border-0">
            <h4 class="text-center">Edit Product</h4>

            <form>
              <div class="form p-4">
                <div class="col mb-2">
                  <label>Product Name</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="validationDefault01"
                    :placeholder="selectProduct.name"
                    v-model="changeName"
                  />
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="col mb-2">
                      <label>Image Product</label>
                      <div class="image-container">
                        <form>
                        <input type="file" name="file" id="file" class="inputFile" @change="onFileUpload" />
                        <label for="file" @change="onFileUpload"><i class="fa fa-pencil-square-o"> Edit</i></label>
                        <button type="submit" class="btn-submit mt-3" @click.prevent="handleUploadImg">Upload</button>
                        </form>
                        <img
                        v-if="selectProduct.image"
                        :src="selectProduct.image.split(',')[0]"
                        alt=""
                        @click.prevent="handleUpdate(product)"
                        />
                        <img
                        v-else
                        src="../../../assets/image/Empty.jpg"
                        alt=""
                        >
                      </div>
                    </div>
                    <div class="col mb-2">
                      <label>Price Rp.</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        :placeholder="selectProduct.price"
                        v-model="changePrice"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>Color</label>
                      <input
                      type="text"
                      placeholder="add color"
                      v-model="changeColor"
                    />
                      <!-- Color Product -->
                    <div class="row setColor pl-3" v-for="(color, index) in selectProduct.color.split(', ')" :key="index">
                        <div v-if="color === 'Black'" class="ellipse black"></div>
                        <div v-if="color === 'Red'" class="ellipse red"></div>
                        <div v-if="color === 'Blue'" class="ellipse blue"></div>
                        <div v-if="color === 'Green'" class="ellipse green"></div>
                        <div v-if="color === 'Purple'" class="ellipse purple"></div>
                        <div v-if="color === 'Grey'" class="ellipse grey"></div>
                    </div>
                    <!-- End Color Product -->
                    </div>
                    <div class="col mb-2">
                      <label>Category</label>
                      <input
                      type="text"
                      placeholder="add category"
                      v-model="changeCategory"
                      >
                      <div v-for="(category, index) in selectProduct.category.split(', ')" :key="index">
                      <button v-if="category === 'all'" class="bg-info">All</button>
                      <button v-if="category === 'Woman'" class="bg-info">Woman</button>
                      <button v-if="category === 'Men'" class="bg-info">Men</button>
                      <button v-if="category === 'Girls'" class="bg-info">Girls</button>
                      <button v-if="category === 'Boys'" class="bg-info">Boys</button>
                      </div>
                    </div>
                    <div class="col mb-2">
                      <label>Size</label>
                      <input
                      type="text"
                      placeholder="add size"
                      v-model="changeSize"
                      >
                      <div v-for="(size, index) in selectProduct.size.split(', ')" :key="index">
                      <button v-if="size === 'XS'" class="bg-info">XS</button>
                      <button v-if="size === 'S'" class="bg-info">S</button>
                      <button v-if="size === 'M'" class="bg-info">M</button>
                      <button v-if="size === 'L'" class="bg-info">L</button>
                      <button v-if="size === 'XL'" class="bg-info">XL</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="col mb-2">
                      <label>Brand</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        :placeholder="selectProduct.brand"
                        v-model="changeBrand"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>Condition</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        :placeholder="selectProduct.condition"
                        v-model="changeCondition"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>Stock</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        :placeholder="selectProduct.stock"
                        v-model="changeStock"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>description</label>
                      <textarea
                        type="text"
                        class="form-control form-control-lg"
                        :placeholder="selectProduct.description"
                        v-model="changeDescription"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="ml-auto px-5">
                    <button
                      type="submit"
                      style="background: #d31d0d"
                      class="btn btn-danger rounded-pill px-5"
                      @click.prevent="handleDelete"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary rounded-pill px-5"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style="background: #d31d0d"
                      class="btn btn-danger rounded-pill px-5"
                      @click.prevent="handleUpdateProduct"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    <!-- End Modal Change Product-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'product',
  data () {
    return {
      FILE: '',
      sort: 'ASC',
      search: '',

      // Update Product
      changeName: '',
      changePrice: '',
      changeColor: '',
      changeCategory: '',
      changeSize: '',
      changeBrand: '',
      changeCondition: '',
      changeStock: '',
      changeDescription: ''
      // End Update Product
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      productSeller: 'productSeller',
      selectProduct: 'selectProduct'
    })
  },
  mounted () {
    this.getProductSeller(this.userId)
      .then((res) => {
        this.chooseProduct(this.productSeller[0])
      })
  },
  methods: {
    ...mapActions([
      'getProductSeller',
      'sortNameProductSeller',
      'sortPriceProductSeller',
      'sortStockProductSeller',
      'searchProductSeller',
      'chooseProduct',
      'updateProduct',
      'imageProduct',
      'deleteProduct'
    ]),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    handleUploadImg () {
      const formData = new FormData()
      formData.append('image', this.FILE, this.FILE.name)
      const input = {
        id: this.selectProduct.id,
        data: formData
      }
      this.imageProduct(input)
        .then((res) => {
          this.getProductSeller(this.userId)
            .then((res) => {
              alert('update success')
            })
        })
    },

    handleUpdateProduct () {
      const data = {
        name: this.changeName || this.selectProduct.name,
        price: Number(this.changePrice) || this.selectProduct.price,
        color: this.changeColor || this.selectProduct.color,
        category: this.changeCategory || this.selectProduct.category,
        size: this.changeSize || this.selectProduct.size,
        brand: this.changeBrand || this.selectProduct.brand,
        condition: this.changeCondition || this.selectProduct.condition,
        stock: Number(this.changeStock) || this.selectProduct.stock,
        description: this.changeDescription || this.selectProduct.description
      }

      const input = {
        id: this.selectProduct.id,
        data: data
      }
      this.updateProduct(input)
        .then((res) => {
          this.getProductSeller(this.userId)
          this.changeName = ''
          this.changePrice = ''
          this.changeColor = ''
          this.changeCategory = ''
          this.changeSize = ''
          this.changeBrand = ''
          this.changeCondition = ''
          this.changeStock = ''
          this.changeDescription = ''
          alert('update sukses')
        })
    },

    handleDelete () {
      this.deleteProduct(this.selectProduct.id)
        .then((res) => {
          this.getProductSeller(this.userId)
          alert(res.data.result)
        })
    },

    handleSortName () {
      if (this.sort === 'ASC') {
        this.sort = 'DESC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortNameProductSeller(data)
      } else {
        this.sort = 'ASC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortNameProductSeller(data)
      }
    },

    handleSortPrice () {
      if (this.sort === 'ASC') {
        this.sort = 'DESC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortPriceProductSeller(data)
      } else {
        this.sort = 'ASC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortPriceProductSeller(data)
      }
    },

    handleSortStock () {
      if (this.sort === 'ASC') {
        this.sort = 'DESC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortStockProductSeller(data)
      } else {
        this.sort = 'ASC'

        const data = {
          id: this.userId,
          sort: this.sort
        }
        this.sortStockProductSeller(data)
      }
    },

    handleSearch () {
      const data = {
        id: this.userId,
        search: this.search
      }
      this.searchProductSeller(data)
    },

    handleUpdate (product) {
      console.log(product)
      this.chooseProduct(product)
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
.boxes {
  height: 300px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
}
nav {
  background: #f7f3f3;
}

.scroll {
  height: 230px;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.list-product {
  margin-top: 10px;
  margin-left: 10px;
}

.product-image {
  height: 100px;
  width: 100px;
}

.product-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-name {
  width: 480px;
  padding: 10px;
  font-size: 20px;
}

.product-price {
  width: 100px;
  padding: 10px;
  font-size: 20px;
}

.product-stock {
  width: 80px;
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: bold;
  padding-top: 5px;
}

.product-stock span {
  background-color: rgb(0, 252, 252);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  box-shadow: 2px 2px solid grey;
  text-align: center;
  padding: 5px;
}

/* Color Product */
.setColor {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.select {
  border: 3px solid red;
}
.seelct-red {
  border: 3px solid #42D86C;
}
.ellipse {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 100%;
}
.black { background-color: black;}
.red { background-color: #D84242;}
.blue { background-color: #4290D8;}
.green { background-color: #42D86C;}
.purple { background-color: purple;}
.grey { background-color: grey;}
/* End Color Product */

.image-container {
  height: 200px;
  width: 200px;
}

.image-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
