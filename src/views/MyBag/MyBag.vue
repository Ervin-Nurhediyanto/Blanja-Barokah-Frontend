<template>
  <div class="container-fluid">
      <navbar/>
      <div class="container">
        <div class="title"><h1>My bag</h1></div>
        <div class="box-content">
          <div class="boxItem">

            <!-- List My Bag -->
            <div class="cardItem" v-for="(product, index) in myBag" :key="index">
              <div class="card">
                <div class="container-img">
                  <img v-if="product.image" :src="product.image">
                  <img v-else src="../../assets/image/Empty.jpg">
                </div>
                <div class="name-box">
                  <div class="name"><h5>{{product.name}}</h5></div>
                  <div class="brand"><h6>{{product.brand}}</h6></div>
                </div>
                <div class="count">
                  <div class="number">{{product.count}}x</div>
                </div>
                <div class="price"><h4>Rp. {{product.price * product.count}}</h4></div>
                <div @click.prevent="handleDelete(index)"><i class="fa fa-trash text-danger" aria-hidden="true"></i></div>
              </div>
            </div>
            <!-- End List My Bag -->

          </div>
          <div class="box-summary">
            <div class="summary"><h5><b>Shopping summary</b></h5></div>
            <div class="total-box">
              <div class="text"><h6>Total price</h6></div>
              <div class="total"><h6>Rp. {{totalPrice}}</h6></div>
            </div>
            <button class="btn buy" ref="../views/Checkout.vue" @click="handleCheckout">Buy</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Mybag',
  components: {
  },
  data () {
    return {
      totalPrice: 0
      // count: 0
    }
  },
  computed: {
    ...mapGetters({
      myBag: 'myBag'
    })
  },
  mounted () {
    this.myBag.map((item) => {
      this.totalPrice += (item.price * item.count)
    })
  },
  methods: {
    ...mapActions([
      'deleteFronMyBag',
      'setToCheckout'
    ]),
    handleDelete (index) {
      this.deleteFronMyBag(index)
    },
    handleCheckout () {
      // const data = this.myBag
      const input = {
        data: this.myBag,
        total: this.totalPrice
      }
      this.setToCheckout(input)
      this.$router.push('/checkout')
    }
  //   plus () {
  //     this.count = this.count + 1
  //   },
  //   min () {
  //     this.count = this.count - 1
  //   }
  }
}
</script>

<style scoped>
  .title {
    margin: 20px 0px 20px 0px;
    text-align: left;
  }
  .box-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .boxItem {
    display: flex;
    flex-direction: column;
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
  .brand {
    color: #ccc;
  }
  .delete {
  padding-top: 10px;
  padding-right: 15px;
  color: #D84242;
  cursor: pointer;
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
  }
  .count {
    display: flex;
    margin: 10px;
    width: 40px;
    height: 35px;

    border-radius: 50%;
}
.plus {
  justify-items: center;
  background-color: white;
  border: 2px solid #D4D4D4;
  }
.min {
  background-color: #D4D4D4;
  color: white;}
.number {
  display: flex;
  margin: 10px;
  padding-top: 20px;
  height: 60px;
  align-self: center;
  align-content: center;
  /* border: 1px solid black; */
}
.price {
  display: flex;
  margin: auto;
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

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  /* cursor: pointer; */

  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: 5px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #D84242;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.box-summary {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 140px;

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
.text {
  color: #D4D4D4;
}
.total {
  text-align: right;
}
.buy {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    width: 250px;

    color: white;
    background-color: #D84242;
    border-radius: 20px;
    border: 1px solid white;
}
</style>
