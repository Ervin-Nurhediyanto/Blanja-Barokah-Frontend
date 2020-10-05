<template>
    <div>
        <div class="card shadow m-3">
            <!-- Card Image -->
            <img v-if="image" :src="image.split(',')[0]" class="card-img-top" :alt="name" @click="select">
            <img v-else src="../../assets/image/Empty.jpg" class="card-img-top" :alt="name" @click="select">
            <!-- End Card Image -->
            <div class="card-body col">
                <!-- Card Rate -->
                <i v-if="rate > 0" class="fa fa-star fa-lg"></i>
                <i v-else class="fa fa-star-o fa-lg"></i>
                <i v-if="rate > 2" class="fa fa-star fa-lg"></i>
                <i v-else class="fa fa-star-o fa-lg"></i>
                <i v-if="rate > 4" class="fa fa-star fa-lg"></i>
                <i v-else class="fa fa-star-o fa-lg"></i>
                <i v-if="rate > 6" class="fa fa-star fa-lg"></i>
                <i v-else class="fa fa-star-o fa-lg"></i>
                <i v-if="rate > 8" class="fa fa-star fa-lg"></i>
                <i v-else class="fa fa-star-o fa-lg"></i><br>
                <!-- End Card Rate -->
                <strong>{{name}}</strong><br>
                <span class="text-danger m-0">{{price}}</span><br>
                <span class="text-muted m-0">{{brand}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Card',
  props: ['name', 'image', 'price', 'brand', 'id', 'rate', 'color', 'condition', 'description', 'stock'],
  computed: {
    ...mapGetters({
      selectProduct: 'selectProduct'
    })
  },
  methods: {
    ...mapActions(['chooseProduct']),
    select (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        image: this.image.split(','),
        price: this.price,
        brand: this.brand,
        id: this.id,
        rate: this.rate,
        color: this.color,
        condition: this.condition,
        description: this.description,
        stock: this.stock
      }
      this.chooseProduct(data)
      this.$router.push('/product')
    }
  }
}
</script>

<style scoped>
img {
  width: 238px;
  height: 136px;
  cursor: pointer;
}
.card {
  border-radius: 8px !important;
  overflow: hidden;
  max-width: 238px;
}
.fa {
  color: yellow;
  margin: 2px;
}
</style>
