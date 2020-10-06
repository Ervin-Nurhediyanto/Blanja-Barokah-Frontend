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

      <!-- List History -->
      <div class="scroll col pr-5">
        <div v-for="history in myOrder" :key="history.id" class="list-product row">
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
            <img :src="history.imageTransfer" alt="" />
          </div>
          <div v-else class="product-image upload-container">
            <h4 class="upload" data-toggle="modal" data-target="#transfer" @click="handleTransfer(history.id)">Upload bukti transfer</h4>
          </div>
          <!-- End Transfer -->
          <div class="product-status">
            <h4>*{{ history.status }}</h4>
            <button class="btn btn-danger" v-if="history.status === 'not yet paid'" @click.prevent="handleChangeStatus(history.id, 'order cancel')">Cancel</button>
            <button class="btn btn-success" v-if="history.status === 'send'" @click.prevent="handleChangeStatus(history.id, 'completed')">Completed</button>
          </div>
        </div>
      </div>
      <!-- End List History -->
      <Transfer />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Transfer from '../modalImage/addImage'
export default {
  name: 'My-Order',
  data () {
    return {
      myOrder: []
    }
  },
  components: {
    Transfer
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      historyUser: 'historyUser',
      idTransfer: 'idTransfer'
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
      'getHistoryUser',
      'changeStatus',
      'getIdTransfer'
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
          this.getHistoryUser(this.userId)
            .then((res) => {
              this.myOrder = []
              this.historyUser.map((item) => {
                this.myOrder.push(item)
              })
            })
          if (status === 'order cancel') {
            this.$swal({
              icon: 'success',
              title: 'Cancelling Order',
              showConfirmButton: false,
              timer: 1500
            })
          }
          if (status === 'completed') {
            this.$swal({
              icon: 'success',
              title: 'Order completed',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    },
    handleTransfer (idTransfer) {
      this.getIdTransfer(idTransfer)
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

.nav:hover {
  cursor: pointer;
}
.list-product {
  margin-top: 15px;
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

.product-info {
  width: 200px;
}

.product-status {
  width: 150px;
  padding-top: 10px;
}

.product-status h4 {
  font-size: 15px;
  color: darkblue;
  margin-left: 30px;
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
  width: 130px;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  padding-top: 5px;
}

.product-stock span {
  height: 30px;
  width: auto;
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
  /* background-color: darkorange; */
  width: 100px;
  font-size: 14px;
  text-align: center;
}

.upload:hover {
  color: red;
  font-weight: bold;
}

button {
  font-size: 14px;
  width: auto;
  height: 35px;
  margin-top: 10px;
  margin-left: 60px;
}
</style>
