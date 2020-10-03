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
                  <img :src="product.image" alt="" />
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'product',
  data () {
    return {
      sort: 'ASC',
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      productSeller: 'productSeller'
    })
  },
  mounted () {
    this.getProductSeller(this.userId)
  },
  methods: {
    ...mapActions([
      'getProductSeller',
      'sortNameProductSeller',
      'sortPriceProductSeller',
      'sortStockProductSeller',
      'searchProductSeller'
    ]),

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
</style>
