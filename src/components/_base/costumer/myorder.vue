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
        <a class="nav-link">Send</a>
      </li>
      <li class="nav-item" @click.prevent="handleCompleted">
        <a class="nav-link">Completed</a>
      </li>
      <li class="nav-item" @click.prevent="handleOrderCancel">
        <a class="nav-link">Order Cancel</a>
      </li>
    </ul>
    <div class="tab-content scroll" id="myTabContent">

      <div class="scroll col">
        <!-- List History -->

          <div v-for="history in myOrder" :key="history.id" class="list-product row">
            <div class="product-image">
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
              <img :src="history.imageTransfer" alt="" />
            </div>
            <div v-else class="product-image upload-container">
              <h4 class="upload">Upload bukti transfer</h4>
            </div>
            <!-- End Transfer -->
            <div class="product-status">
              <h4>{{ history.status }}</h4>
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
  name: 'My-Order',
  data () {
    return {
      myOrder: []
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      historyUser: 'historyUser'
    })
  },
  mounted () {
    this.getHistoryUser(this.userId)
      .then((res) => {
        this.historyUser.map((item) => {
          this.myOrder.push(item)
        })
      })
  },
  methods: {
    ...mapActions([
      'getHistoryUser'
    ]),
    handleAll () {
      this.myOrder = []
      this.historyUser.map((item) => {
        this.myOrder.push(item)
      })
    },
    handleyetpaid () {
      this.myOrder = []
      this.historyUser.map((item) => {
        if (item.status === 'not yet paid') {
          this.myOrder.push(item)
        }
      })
    },
    handlePacked () {
      this.myOrder = []
      this.historyUser.map((item) => {
        if (item.status === 'packed') {
          this.myOrder.push(item)
        }
      })
    },
    handleSend () {
      this.myOrder = []
      this.historyUser.map((item) => {
        if (item.status === 'send') {
          this.myOrder.push(item)
        }
      })
    },
    handleCompleted () {
      this.myOrder = []
      this.historyUser.map((item) => {
        if (item.status === 'completed') {
          this.myOrder.push(item)
        }
      })
    },
    handleOrderCancel () {
      this.myOrder = []
      this.historyUser.map((item) => {
        if (item.status === 'order cancel') {
          this.myOrder.push(item)
        }
      })
    }
  }
}
</script>
<style scoped>
.scroll {
  height: 375px;
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

.product-info {
  width: 200px;
}

.product-status {
  width: 150px;
  padding-top: 10px;
}

.product-status h4 {
  font-size: 20px;
  text-align: center;
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
  font-size: 16px;
  text-align: center;
}

.upload:hover {
  color: red;
  font-weight: bold;
}
</style>
