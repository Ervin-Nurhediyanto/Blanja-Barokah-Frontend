<template>
  <div class="container-fluid">
      <navbar/>
      <div class="container">
            <div class="title"><h1><b>Checkout</b></h1></div>
            <div class="content-box">
            <div class="boxItem">

                <!-- User Address -->
                <div class="title"><h5><b>Shipping Address</b></h5></div>
                <div v-if="selectAddress" class="address-box">
                  <h5>{{selectAddress.title}}</h5>
                      <div class="address">
                        <h6>{{ selectAddress.address }}. Kota {{selectAddress.city}}. Kode Pos {{selectAddress.postalCode}}</h6>
                        <h6>Penerima: {{selectAddress.name}} ({{selectAddress.telephoneNumber}})</h6>
                      </div>
                    <button class="btn chooseAddress" @click="toggleModal">Choose another address</button>
                    <ModalAddress v-show="modalActive" :closeModal="toggleModal"/>
                </div>
                <!-- End User Address -->

                <!-- List Checkout -->
                <div class="cardItem" v-for="(product, index) in checkout" :key="index">
                    <div class="card pl-3 pr-3">
                        <div class="container-img">
                          <img v-if="product.image" :src="product.image">
                          <img v-else src="../../assets/image/Empty.jpg">
                        </div>
                        <div class="name-box pt-2">
                          <div class="name"><h5>{{product.name}}</h5></div>
                          <div class="brand"><h6>{{product.brand}}</h6></div>
                        </div>
                    <div class="price pt-1"><h4>Rp. {{product.price * product.count}}</h4></div>
                </div>
                <!-- End List Checkout -->

            </div>
        </div>
          <div class="box-summary">
            <div class="summary"><h5>Shopping summary</h5></div>
            <div class="order-box">
              <div class="text"><h6>Order</h6></div>
              <div class="total"><h6>Rp.{{totalCheckout}}</h6></div>
            </div>
            <div class="total-box">
              <div class="text"><h6>Delivery</h6></div>
              <div class="total"><h6>Rp. {{delivery}}</h6></div>
            </div>
            <div class="total-shopping">
                <div class="text"><h6>Shopping summary</h6></div>
                <div class="total"><h6>Rp. {{totalCheckout + delivery}}</h6></div>
            </div>
            <button class="btn buy" @click="togglePayment">Select payment</button>
            <!-- <Modal v-show="modalActive" :data="dataModal" @close-modal="toggleModal" @fire-event="handleEventModal" /> -->
            <Payment v-show="selectPay" :closeModal="togglePayment"/>
          </div>
        </div>
        </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalAddress from '../../components/_base/modalAddress/dataAddress'
import Payment from '../../components/_base/modalPayment/payment'

export default {
  name: 'Checkout',
  components: {
    ModalAddress,
    Payment
  },
  data () {
    return {
      count: 0,
      modalActive: false,
      selectPay: false,
      delivery: 15000
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      checkout: 'checkout',
      totalCheckout: 'totalCheckout',
      userAddress: 'userAddress',
      selectAddress: 'selectAddress'
    })
  },
  mounted () {
    const data = {
      id: this.userId
    }
    this.getUserAddress(data)
    this.userAddress.map((item) => {
      if (item.setAddress === 1) {
        this.getSelectAddress(item)
      }
    })
  },
  methods: {
    ...mapActions([
      'getUserAddress',
      'getSelectAddress'
    ]),
    plus () {
      this.count = this.count + 1
    },
    min () {
      this.count = this.count - 1
    },
    toggleModal () {
      this.modalActive = !this.modalActive
    },
    togglePayment () {
      this.selectPay = !this.selectPay
      if (!this.selectPay) {
        this.clearModal()
      }
      // this.selectPay = !this.selectPay
    },
    clearModal () {
      this.modalActive = false
    }
  }
}
</script>

<style scoped>
.title {
  margin: 10px 0px 10px 0px;
  text-align: left;
}
.content-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* border: 1px solid black; */
}
.boxItem {
  display: flex;
  flex-direction: column;
}
.address-box {
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
}
.chooseAddress {
  height: 40px;
  margin-top: 10px;
  color: #D4D4D4;
  border: 2px solid #D4D4D4;
  border-radius: 25px;
}
.checklistAll-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  height: 50px;

  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
}
.text1 {
  padding-top: 10px;
  align-self: start;
  text-align: left;
}
.text2 {
  width: 550px;
  padding-top: 10px;
  padding-left: 3px;
  text-align: left;
  color: #ccc;
  /* border: 1px solid black; */
}
  .address-box {
      width: 800px;
  }
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 800px;
  height: 100px;

  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25)
}
.box-checkbox {
  margin-top: 20px;
  width: 40px;
}
.checklistAll-box .box-checkbox {
  margin-top: 0px;
  padding: 0;
  width: 40px;
}
.container-img img {
  margin: 15px;
  width: 65px;
  height: 70px;
  border-radius: 6px;
  object-fit: cover;
}
.name-box {
  display: flex;
  flex-direction: column;
  width: 350px;
  /* border: 1px solid black; */
}
.name {
  margin-top: 20px;
  align-self: start;
}
.name h5 {
  font-size: 19px;
  font-weight: bolder;
}
.price h4 {
  font-size: 18px;
}
.brand {
  align-self: start;
  color: #D4D4D4;
}
.count {
  display: flex;
  margin: 10px;
  width: 40px;
  height: 35px;

  border-radius: 50%;
}
.price {
  display: flex;
  margin: auto;
  margin-top: 30px;
  margin-right: 10px;
  width: 120px;
  height: 50px;
  justify-content: center;
  text-align: center;
}
  /* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 0px;
  margin-bottom: 12px;
  font-size: 22px;
  /* border: 1px solid black; */
}

.box-summary {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 20px;
  padding: 10px;
  height: 220px;

  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25)
}
.summary {
  text-align: left;
}
.total-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.order-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.total-shopping {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 5px;
  border-top: 2px solid #D4D4D4;
}
.text {
    color: #D4D4D4;
}
.total-shopping .text {
    color: black
}
.total {
  text-align: right;
}
.buy {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 30px;
    width: 250px;
    height: 40px;

    color: white;
    background-color: #D84242;
    border-radius: 20px;
    border: 1px solid white;
}
</style>
