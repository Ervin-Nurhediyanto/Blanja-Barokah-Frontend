<template>
    <div>
        <h4 class="mb-4">My Order</h4>
        <ul class="nav nav-tabs">
            <li class="nav-item" @click.prevent="handleAll">
                <a class="nav-link">All Items</a>
            </li>
            <li class="nav-item" @click.prevent="handleyetpaid">
                <a class="nav-link">Not yet paid</a>
            </li>
            <li class="nav-item" @click.prevent="handlePacked">
                <a class="nav-link">Packed</a>
            </li>
            <li class="nav-item" @click.prevent="handleSend">
                <a class="nav-link">Sent</a>
            </li>
            <li class="nav-item" @click.prevent="handleCompleted">
                <a class="nav-link">Completed</a>
            </li>
            <li class="nav-item" @click.prevent="handleOrderCancel">
                <a class="nav-link">Order Cancel</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">

    <!-- List History -->
      <div class="scroll col pr-5">
        <div v-for="history in order" :key="history.id" class="list-product row">
          <div class="product-image p-3">
            <img :src="history.imageProduct" alt="" />
          </div>
          <div class="col product-info">
            <div class="row">
              <h4 class="product-name">{{ history.nameProduct }}</h4>
            </div>
            <div class="row">
              <h4 class="product-price">Rp.{{ history.price }}</h4>
              <h4 class="product-stock">
                <span>Jumlah: {{ history.countItem }}</span>
              </h4>
              <h4 class="product-total">
                Total: Rp.{{ history.price * history.countItem }}
              </h4>
            </div>
          </div>
          <!-- Transfer -->
          <div v-if="history.imageTransfer" class="product-image">
              <h6 v-if="history.status === 'packed'">Barang dalam pengemasan</h6>
              <h6 v-else-if="history.status === 'send'">Barang dalam proses pengiriman</h6>
              <h6 v-else-if="history.status === 'completed'">Barang telah diterima</h6>
            <img v-else :src="history.imageTransfer" alt="" />
          </div>
          <div v-else class="product-image upload-container">
              <h6 v-if="history.status === 'order cancel'">Order dibatalkan</h6>
            <h4 v-else class="upload">Customer belum transfer</h4>
          </div>
          <!-- End Transfer -->
          <div class="product-status col">
            <h4>*{{ history.status }}</h4>
            <button v-if="history.status === 'already paid'" @click.prevent="handleChangeStatus(history.id, 'packed')">Packed</button>
            <button v-else-if="history.status === 'packed'" @click.prevent="handleChangeStatus(history.id, 'send')">Send</button>
          </div>
        </div>
      </div>
    <!-- End List History -->

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'order',
  data () {
    return {
      order: []
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      historySeller: 'historySeller'
    })
  },
  mounted () {
    this.getHistorySeller(this.userId)
      .then((res) => {
        this.historySeller.map((item) => {
          this.order.push(item)
        })
      })
  },
  methods: {
    ...mapActions([
      'getHistorySeller',
      'changeStatus'
    ]),
    handleAll () {
      this.order = []
      this.historySeller.map((item) => {
        this.order.push(item)
      })
    },
    handleyetpaid () {
      this.order = []
      this.historySeller.map((item) => {
        if (item.status === 'not yet paid') {
          this.order.push(item)
        }
      })
    },
    handlePacked () {
      this.order = []
      this.historySeller.map((item) => {
        if (item.status === 'packed') {
          this.order.push(item)
        }
      })
    },
    handleSend () {
      this.order = []
      this.historySeller.map((item) => {
        if (item.status === 'send') {
          this.order.push(item)
        }
      })
    },
    handleCompleted () {
      this.order = []
      this.historySeller.map((item) => {
        if (item.status === 'completed') {
          this.order.push(item)
        }
      })
    },
    handleOrderCancel () {
      this.order = []
      this.historySeller.map((item) => {
        if (item.status === 'order cancel') {
          this.order.push(item)
        }
      })
    },
    handleChangeStatus (id, status) {
      const data = {
        status: status
      }
      const input = {
        id: id,
        data: data
      }
      this.changeStatus(input)
        .then((res) => {
          this.getHistorySeller(this.userId)
            .then((res) => {
              this.order = []
              this.historySeller.map((item) => {
                this.order.push(item)
              })
            })
          alert('Update Status')
        })
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
  width: 850px;
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
.nav:hover {
  cursor: pointer;
}
/* List Product */
.scroll {
  height: 375px;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.list-product {
  padding: 3px;
  margin-top: 10px;
  margin-left: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
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

.product-image h6 {
    margin-top: 10px;
  text-align: center;
}

.product-info {
  width: 400px;
}

.product-status {
  width: 150px;
  padding-top: 10px;
}

.product-status h4 {
  font-size: 14px;
  color: darkblue;
  text-align: right;
}

.product-name {
  width: 480px;
  padding: 10px;
  font-size: 18px;
}

.product-price {
  width: 100px;
  padding: 10px;
  font-size: 15px;
}

.product-stock {
  width: 100px;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  padding-top: 5px;
}

.product-stock span {
  height: 30px;
  width: 80px;
  border-radius: 50%;
  box-shadow: 2px 2px solid grey;
  text-align: center;
  padding: 5px;
}

.product-total {
  width: 150px;
  padding: 10px;
  font-size: 15px;
}

.upload-container {
  padding-top: 20px;
  cursor: pointer;
}

.upload {
  width: 100px;
  font-size: 14px;
  text-align: center;
}

.upload:hover {
  color: red;
  font-weight: bold;
}
/* End List Product */

</style>
