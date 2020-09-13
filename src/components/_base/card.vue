<template>
    <div>
        <div class="card shadow m-3">
            <!-- <img src="../../assets/Cappucino.jpg" class="card-img-top" alt="Responsive image"> -->
            <img :src="image.split(',')[0]" class="card-img-top" alt="Responsive image" @click="select">
            <div class="card-body col">
                <!-- <strong>Mens Formal suit- Black and White</strong><br> -->
                <strong>{{name}}</strong><br>
                <!-- <span class="text-danger m-0">$40.0</span><br> -->
                <span class="text-danger m-0">{{price}}</span><br>
                <!-- <span class="text-muted m-0">Zalora Cloth</span> -->
                <span class="text-muted m-0">{{brand}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Card',
  props: ['name', 'image', 'price', 'brand', 'id', 'rate', 'color', 'condition', 'description'],
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
        description: this.description
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
}
.card {
    border-radius: 8px !important;
    overflow: hidden;
    max-width: 238px;
}
</style>
