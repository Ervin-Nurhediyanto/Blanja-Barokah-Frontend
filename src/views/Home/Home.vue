<template>
  <div class="home">
    <div class="container">
      <!-- <router-link to='/login' class="m-5 mx-auto">login</router-link> -->
      <Carousel/> <br><br>
      <h1><strong>New</strong></h1>
      <span class="text-muted">You've never seen it before</span>
      <div class="row row-cols-2 row-cols-md-5">
        <!-- <card/> <card/> <card/> <card/> <card/>
        <card/> <card/> <card/> <card/> <card/> -->
        <div v-for="product in newProduct" :key="product.id">
          <card
          :name='product.name'
          :image="product.image"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          :rate='product.rate'
          :color='product.color'
          :condition='product.condition'
          :description='product.description'
          />
        </div>
      </div>
      <br><br>
      <h1><strong>Popular</strong></h1>
      <span class="text-muted">Find chlotes that are  trending recently</span>
      <div class="row row-cols-2 row-cols-md-5">
        <!-- <Card/> <Card/> <Card/> <Card/> <Card/>
        <Card/> <Card/> <Card/> <Card/> <Card/> -->
        <div v-for="product in popularProduct" :key="product.id">
          <card
          :name='product.name'
          :image="product.image.split(', ')[0]"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          :rate='product.rate'
          :color='product.color'
          :condition='product.condition'
          :description='product.description'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../../components/_base/home/carousel'
import Card from '../../components/_base/card'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  computed: {
    ...mapGetters({
      allProduct: 'allProduct',
      newProduct: 'newProduct',
      popularProduct: 'popularProduct',
      selectProduct: 'selectProduct',
      user: 'user'
    })
  },
  mounted () {
    this.getAllProduct()
    this.getNewProduct()
    this.getPopularProduct()
  },
  methods: {
    ...mapActions(['getAllProduct']),
    ...mapActions(['getNewProduct']),
    ...mapActions(['getPopularProduct'])
  }
}
</script>
