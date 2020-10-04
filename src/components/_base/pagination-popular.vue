<template>
  <nav aria-label="..." class="col-md-12">
    <!-- Popular Product -->
    <ul class="pagination">
      <li class="page-item">
        <a
          v-show="pagePopular > 1"
          @click="prevPage(1)"
          class="page-link"
          href="#"
          >Prev</a
        >
      </li>
      <li class="page-item disabled">
        <a v-show="pagePopular <= 1" class="page-link">Prev</a>
      </li>
      <li
        v-show="pagePopular >= totalPage && pagePopular != 1"
        @click="prevPage(2)"
        class="page-item"
      >
        <a class="page-link" href="#">{{ pagePopular - 2 }}</a>
      </li>
      <li v-show="pagePopular > 1" @click="prevPage(1)" class="page-item">
        <a class="page-link" href="#">{{ pagePopular - 1 }}</a>
      </li>
      <li class="page-item active" aria-current="page">
        <span class="page-link">
          {{ pagePopular }}
          <span class="sr-only">(current)</span>
        </span>
      </li>
      <li
        v-show="pagePopular < totalPage"
        @click="nextPage(1)"
        class="page-item"
      >
        <a class="page-link" href="#">{{ pagePopular + 1 }}</a>
      </li>
      <li
        v-show="pagePopular <= 1 && totalPage != 1"
        @click="nextPage(2)"
        class="page-item"
      >
        <a class="page-link" href="#">{{ pagePopular + 2 }}</a>
      </li>
      <li class="page-item">
        <a
          v-show="pagePopular < totalPage"
          @click="nextPage(1)"
          class="page-link"
          href="#"
          >Next</a
        >
      </li>
      <li class="page-item disabled">
        <a v-show="pagePopular >= totalPage" class="page-link">Next</a>
      </li>
    </ul>
    <!-- End Popular Product -->
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Pagination',
  //   props: ['condition'],
  computed: {
    ...mapGetters({
      totalPage: 'totalPage',
      pagePopular: 'pagePopular'
    })
  },
  methods: {
    ...mapActions(['nextPage']),
    ...mapActions(['prevPage'])
  }
}
</script>

<style>
</style>
