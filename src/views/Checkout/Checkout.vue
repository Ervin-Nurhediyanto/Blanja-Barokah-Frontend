<template>
  <div class="container-fluid">
      <navbar/>
      <div class="container">
            <div class="title"><h1><b>Checkout</b></h1></div>
            <div class="content-box">
            <div class="boxItem">
                <div class="title"><h5><b>Shipping Address</b></h5></div>
                <div class="address-box">
                    <div class="name"><h5>Andress Jane</h5></div>
                    <div class="address"><h6>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabuaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: bkok c 76] Sokaraja. Kab. Banyumas. 53181</h6></div>
                    <button class="btn chooseAddress" @click="toggleModal">Choose another address</button>
                    <modalAddress v-show="modalActive" :closeModal="toggleModal"/>
                    <!-- <addAddress v-show="modalActive" :closeModal="toggleModal"/> -->
                </div>
                <div class="cardItem">
                    <div class="card">
                        <div class="container-img"><img src="../../assets/image/4bcf6332-eea3-4278-8c75-9be1f59cbfa3 2.png"></div>
                        <div class="name-box">
                            <div class="name"><h5>Men's formal suit-Black</h5></div>
                            <div class="brand"><h6>Zalora Cloth</h6></div>
                        </div>
                    <div class="price"><h4>Rp. 40000</h4></div>
                </div>
            </div>
        </div>
          <div class="box-summary">
            <div class="summary"><h5>Shopping summary</h5></div>
            <div class="order-box">
              <div class="text"><h6>Order</h6></div>
              <div class="total"><h6>Rp.40000</h6></div>
            </div>
            <div class="total-box">
              <div class="text"><h6>Delivery</h6></div>
              <div class="total"><h6>Rp. 5000</h6></div>
            </div>
            <div class="total-shopping">
                <div class="text"><h6>Shopping summary</h6></div>
                <div class="total"><h6>Rp. 45000</h6></div>
            </div>
            <button class="btn buy">Select payment</button>
          </div>
        </div>
        </div>
        </div>
</template>

<script>
import ModalAddress from '../../components/_base/modalAddress/dataAddress'
// import addAddress from '../../components/_base/modalAddress/addAddress'

export default {
  name: 'Mybag',
  components: {
    ModalAddress
    // addAddress
  },
  data () {
    return {
      count: 0,
      modalActive: false
    }
  },
  methods: {
    plus () {
      this.count = this.count + 1
    },
    min () {
      this.count = this.count - 1
    },
    toggleModal () {
      this.modalActive = !this.modalActive
    }
  },
  computed: {
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
