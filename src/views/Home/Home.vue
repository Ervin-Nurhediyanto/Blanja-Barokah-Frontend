<template>
  <div class="home">
    <div class="container">
      <Carousel/> <br><br>

      <!-- New Products -->
      <h1><strong>New</strong></h1>
      <span class="text-muted">You've never seen it before</span>
      <div class="row row-cols-2 row-cols-md-5">
        <div v-for="product in newProduct" :key="product.id">
          <Card
          :name='product.name'
          :image="product.image"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          :rate='product.rate'
          :color='product.color'
          :condition='product.condition'
          :description='product.description'
          :stock='product.stock'
          :idSeller='product.idSeller'
          :size='product.size'
          />
        </div>
        <NewPage />
      </div>
      <!-- End New Products -->

      <br><br>

      <!-- Popular Products -->
      <h1><strong>Popular</strong></h1>
      <span class="text-muted">Find chlotes that are  trending recently</span>
      <div class="row row-cols-2 row-cols-md-5">
        <div v-for="product in popularProduct" :key="product.id">
          <Card
          :name='product.name'
          :image="product.image"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          :rate='product.rate'
          :color='product.color'
          :condition='product.condition'
          :description='product.description'
          :stock='product.stock'
          :idSeller='product.idSeller'
          :size='product.size'
          />
        </div>
        <PopularPage />
      <!-- End Popular Products -->

      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../../components/_base/home/carousel'
import Card from '../../components/_base/card'
import NewPage from '../../components/_base/pagination-new'
import PopularPage from '../../components/_base/pagination-popular'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Carousel,
    Card,
    NewPage,
    PopularPage
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
    this.getNewProductHome()
    this.getPopularProduct()
    this.getAllProduct()
  },
  methods: {
    ...mapActions(['getAllProduct']),
    ...mapActions(['getNewProductHome']),
    ...mapActions(['getPopularProduct'])
  }
}
</script>
