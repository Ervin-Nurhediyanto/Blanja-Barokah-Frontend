<template>
    <div class="container-fluid">
        <navbar/>
        <div class="container">
        <div class="product">
        <div class="headProduct">
            <div class="box-image">
<<<<<<< HEAD
<<<<<<< HEAD
                <div class="img-view">
                    <img class="" :src="selectProduct.image[0]" alt="">
                </div>
=======
                <div class="img-view"><img src="../../assets/image/1de17b40-c750-40ed-a618-ca2c5ee79da0 3.png"></div>
>>>>>>> tes
                <div class="img-select">
                    <div v-for="(image,index) in selectProduct.image" :key="index">
                        <img class="image" :src="image" alt="">
                    </div>
                    <!-- <div class="image one"><img src="../../assets/image/1de17b40-c750-40ed-a618-ca2c5ee79da0 3.png" alt=""></div>
                    <div class="image two"><img src="../../assets/image/4bcf6332-eea3-4278-8c75-9be1f59cbfa3 2.png" alt=""></div>
                    <div class="image three"><img src="../../assets/image/5f9d591f-54e0-4f48-99c8-33e5ab47c871 2.png" alt=""></div>
                    <div class="image four"><img src="../../assets/image/ef0755f4-97be-42d3-a1e9-e3c892b52706 2.png" alt=""></div>
                    <div class="image five"><img src="../../assets/image/f2c747c5-1f63-4476-b1b9-d8aa8ace2ac2 2.png" alt=""></div> -->
=======
                <div class="img-view"></div>
                <div class="img-select">
                    <div class="image one"></div>
                    <div class="image two"></div>
                    <div class="image three"></div>
                    <div class="image four"></div>
                    <div class="image five"></div>
>>>>>>> test
                </div>
            </div>
            <div class="box-detail">
                <div class="title-product">
                    <div class="name-product">
                        <h4><b>{{selectProduct.name}}</b></h4>
                    </div>
                    <div class="brand"><h6>{{selectProduct.brand}}</h6></div>
                    <div class="rate">
                        <div class="star" v-show="selectProduct.rate > 1"></div>
                        <div class="star" v-show="selectProduct.rate > 3"></div>
                        <div class="star" v-show="selectProduct.rate > 5"></div>
                        <div class="star" v-show="selectProduct.rate > 7"></div>
                        <div class="star" v-show="selectProduct.rate > 9"></div>
                        <div class="reviewer"><h6>({{selectProduct.rate}})</h6></div>
                    </div>
                </div>
                <div class="price">
                    <div class="priceName"><h6>Price</h6></div>
                    <div class="priceMoney"><h3>Rp {{selectProduct.price}} </h3></div>
                </div>
                <div class="color">
                    <div class="colorName"><h6><b>color: {{selectProduct.color}}</b></h6></div>
                    <div class="setColor">
                        <div id="color">
                            <input type="radio" class="option-input radio shadow" name="example" style="background: black;" checked />
                            <input type="radio" class="option-input radio shadow" name="example" style="background: #FFFFFF;" />
                            <input type="radio" class="option-input radio shadow" name="example" style="background: #B82222;" />
                            <input type="radio" class="option-input radio shadow" name="example" style="background: #BEA9A9;" />
                            <input type="radio" class="option-input radio shadow" name="example" style="background: #E2BB8D;" />
                            <input type="radio" class="option-input radio shadow" name="example" style="background: #151867" />
                        </div>
                    </div>
                </div>
                <div class="count-box">
                    <div class="size">
                        <div class="sizeName"><h6><b>Size</b></h6></div>
                        <div class="count-size">
                            <button class="btn count min" @click="minSize">-</button>
                            <div class="number">{{countSize}}</div>
                            <button class="btn count plus" @click="addSize">+</button>
                        </div>
                    </div>
                    <div class="jumlah">
                        <div class="jumlahName"><h6><b>Jumlah</b></h6></div>
                        <div class="count-jumlah">
                            <button class="btn count min" @click="minCount">-</button>
                            <div class="number">{{count}}</div>
                            <button class="btn count plus" @click="addCount">+</button>
                        </div>
                    </div>
                </div>
                <div class="btn box-button">
                    <button class="btn chat" @click="chat">Chat</button>
                    <!-- <button class="btn addBag" @click="$emit('add-bag')">Add bag</button> -->
                    <button class="btn addBag" @click="mybag">Add bag</button>
                    <button class="btn buy" @click="checkout">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="infoProduct">
            <h4>Informasi Produk</h4>
            <div class="condition">
                <h5>Condition</h5>
                <div class="condition-stat"><h6>{{selectProduct.condition}}</h6></div>
            </div>
            <div class="description">
                <h5>Description</h5>
                <div class="content-desc">{{selectProduct.description}}</div>
            </div>
        </div>
        </div>
        <div class="review"><h4>Product Review</h4></div>
        <div class="productReview">
            <div class="box-rate">
                <div class="rateObt"><h1>5.0</h1><h6>/10</h6></div>
                <div class="box-star">
                    <div class="star" v-show="selectProduct.rate > 1"></div>
                    <div class="star" v-show="selectProduct.rate > 3"></div>
                    <div class="star" v-show="selectProduct.rate > 5"></div>
                    <div class="star" v-show="selectProduct.rate > 7"></div>
                    <div class="star" v-show="selectProduct.rate > 9"></div>
                </div>
            </div>
            <div class="rate-reviewer">
                <div class="starRate">
                    <div class="star"></div>
                    <div class="reviewer"><h6>5</h6></div>
                    <div class="progress" style="width: 100px; height: 8px; margin-top: 8px">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                     <div class="reviewer"><h6>4</h6></div>
                </div>
                <div class="starRate">
                    <div class="star"></div>
                    <div class="reviewer"><h6>4</h6></div>
                    <div class="progress" style="width: 100px; height: 8px; margin-top: 8px">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                     <div class="reviewer"><h6>0</h6></div>
                </div>
                <div class="starRate">
                    <div class="star"></div>
                    <div class="reviewer"><h6>3</h6></div>
                    <div class="progress" style="width: 100px; height: 8px; margin-top: 8px">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                     <div class="reviewer"><h6>0</h6></div>
                </div>
                <div class="starRate">
                    <div class="star"></div>
                    <div class="reviewer"><h6>2</h6></div>
                    <div class="progress" style="width: 100px; height: 8px; margin-top: 8px">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                     <div class="reviewer"><h6>0</h6></div>
                </div>
                <div class="starRate">
                    <div class="star"></div>
                    <div class="reviewer"><h6>1</h6></div>
                    <div class="progress" style="width: 100px; height: 8px; margin-top: 8px">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                     <div class="reviewer"><h6>0</h6></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex'
=======
import { mapActions, mapGetters, mapMutations } from 'vuex'
import navbar from '../components/nav'

>>>>>>> test
export default {
  name: 'Product',
  components: {
    navbar
  },
  data () {
    return {
      countSize: 0,
      count: 0
    }
  },
  computed: {
    ...mapGetters({
      selectProduct: 'selectProduct'
    })
  },
  methods: {
    ...mapActions(['getProduct']),
    ...mapMutations(['addCart']),
    addCount () {
      this.count = this.count + 1
    },
    minCount () {
      this.count = this.count - 1
    },
    addSize () {
      this.countSize = this.countSize + 1
    },
    minSize () {
      this.countSize = this.countSize - 1
    },
    chat () {
      this.$router.push('/chat')
    },
    mybag () {
      this.$router.push('/mybag')
    },
    checkout () {
      this.$router.push('/checkout')
    }
<<<<<<< HEAD
=======
  },
  computed: {
    ...mapGetters({
      productstate: 'getProducts'
    })
  },
  mounted () {
    this.getProduct()
>>>>>>> test
  }
}
</script>

<style scoped>
.container-fluid {
    margin: 0;
    padding: 0;
}

@media only screen and (max-width: 768px) {
    .headProduct {
        flex-direction: column !important;
    }
    .box-detail {
        margin: 20px 0px 0px 0px !important;
    }
    .box-button {
        width: auto !important;
    }
}

/* start head product */
.headProduct {
    /* width: 1100px; */
    /* height: 550px; */
    display: flex;
    flex-direction: row;
    padding-top: 70px;

    /* border: 1px solid black; */
}
.box-image {
    width: 378px;
    height: 450px;
    display: flex;
    flex-direction: column;

    /* border: 1px solid black; */
}
.img-view {
    width: 378px;
    height: 378px;
    display: flex;
    /* height: 250px; */

    background-image: url('../assets/image/1de17b40-c750-40ed-a618-ca2c5ee79da0 3.png');
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 3px;
    /* border: 1px solid black; */
}
.img-select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 378px;

    /* border: 1px solid black; */
}
.image {
    display: flex;
    width: 65px;
    height: 65px;
    margin-top: 5px;

    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 3px;
}
.one { background-image: url('../assets/image/f2c747c5-1f63-4476-b1b9-d8aa8ace2ac2 2.png');}
.two { background-image: url('../assets/image/ef0755f4-97be-42d3-a1e9-e3c892b52706 2.png');}
.three { background-image: url('../assets/image/4bcf6332-eea3-4278-8c75-9be1f59cbfa3 2.png');}
.four { background-image: url('../assets/image/5f9d591f-54e0-4f48-99c8-33e5ab47c871 2.png');}
.five { background-image: url('../assets/image/1de17b40-c750-40ed-a618-ca2c5ee79da0 3.png');}
img {
    width: 100%;
}

.box-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 0px 0px 20px;
}
.title-product {
    display: flex;
    flex-direction: column;
    width: 600px;

    /* border: 1px solid black; */
}
.name-product {
    display: flex;
}
.brand {
    display: flex;
    color: #9B9B9B;
}
.rate {
    display: flex;
    flex-direction: row;
}
.star {
    display: flex;
    width: 20px;
    height: 20px;

    background-image: url('../assets/image/Star.png');
    background-size: 100%;
    /* border: 1px solid black; */

}
.reviewer {
    display: flex;

    color: #9B9B9B;
}
.price {
    display: flex;
    flex-direction: column;

    /* border: 1px solid black; */
}
.priceName {
    display: flex;

    color: #9B9B9B;
}
.priceMoney {
    display: flex;
}

.color {
    display: flex;
    flex-direction: column;
    width: 400px;
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

        .option-input {
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            -o-appearance: none;
            appearance: none;
            position: relative;
            top: 12px;
            right: 0;
            bottom: 0;
            left: 0;
            height: 40px;
            width: 40px;
            transition: all 0.15s ease-out 0s;
            border: none;
            color: rgb(217, 255, 0);
            cursor: pointer;
            display: inline-block;
            margin-right: 0.5rem;
            outline: none;
            z-index: 1000;
        }

        .option-input:hover {
            background: #9faab7;
        }

        .option-input:checked::before {
            border: 3px solid red;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            position: absolute;
            content: '✔';
            display: inline-block;
            font-size: 32px;
            text-align: center;
            line-height: 40px;
        }

        .option-input.radio {
            border-radius: 50%;
        }

        .option-input.radio::after {
            border-radius: 50%;
        }
.colorName {
    display: flex;
}
.setColor {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.count-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 30px;
}
.size {
    display: flex;
    flex-direction: column;
}
.sizeName {
    display: flex;
}
.count-size {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
}

.jumlah {
    display: flex;
    flex-direction: column;
}
.jumlahName {
    display: flex;
}
.count-jumlah {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
}
.count {
    display: flex;
    margin: 0px 10px 0px 10px;
    width: 40px;

    border-radius: 50%;
}
.plus { background-color: white; border: 1px solid #D4D4D4;}
.min { background-color: #D4D4D4; }
.number {
    display: flex;
    align-content: center;
    align-self: center;
}

.box-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 700px;
}
.chat {
    display: flex;
    width: 200px;
    justify-content: center;

    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
}
.addBag {
    display: flex;
    width: 200px;
    height: 40px;
    justify-content: center;

    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
}
.buy {
    display: flex;
    width: 355px;
    justify-content: center;

    color: white;
    background-color: #D84242;
    border-radius: 20px;
    border: 1px solid white;
}
/* end head product */

/* start info product */
.infoProduct {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-top: 30px;
    padding-top: 20px;
}
.condition-stat {
    display: flex;
    justify-content: flex-start;
    color: #D84242;
    margin: 10px 0px 30px 0px;
}
.description {
    display: flex;
    flex-direction: column;
}
.content-desc {
    display: flex;
    height: 300px;
}
/* end info product */

/* start product review */
.review {
    text-align: start;
}
.productReview {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
}
.box-rate {
    display: flex;
    flex-direction: column;
}
.rateObt {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 120px;
    margin-top: 20px;
    height: 80px;
}
.box-star {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 20px;
}
.box-star .star {
    transform: scale(0.8);
    width: 18px;
}
.rate-reviewer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
}
.starRate {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
}
.starRate .star {
    background-repeat: no-repeat;
     transform: scale(0.8);
    height: 27px;
}
.star h6 {
    display: flex;
    flex-direction: row;
}
/* end product review */
</style>
