<template>
  <nav aria-label="..." class="col-md-12">
    <!-- Popular Product -->
    <ul class="pagination">
      <li class="page-item">
        <a
          v-show="pagePopular > 1"
          @click.prevent="handlePrevPage(1)"
          class="page-link"
          href="#"
          >Prev</a
        >
      </li>
      <li class="page-item disabled">
        <a
        v-show="pagePopular <= 1"
        class="page-link">
        Prev
        </a>
      </li>
      <li
        v-show="pagePopular >= totalPage && pagePopular < 2"
        @click.prevent="handlePrevPage(2)"
        class="page-item"
      >
        <a
        class="page-link"
        href="#">
        {{ pagePopular - 2 }}
        </a>
      </li>
      <li
      v-show="pagePopular > 1"
      @click.prevent="handlePrevPage(1)"
      class="page-item">
        <a
        class="page-link"
        href="#">
        {{ pagePopular - 1 }}
        </a>
      </li>
      <li
      class="page-item active"
      aria-current="page">
        <span class="page-link">
          {{ pagePopular }}
          <span class="sr-only">(current)</span>
        </span>
      </li>
      <li
        v-show="pagePopular < totalPage"
        @click.prevent="handleNextPage(1)"
        class="page-item">
        <a
        class="page-link"
        href="#">
        {{ pagePopular + 1 }}
        </a>
      </li>
      <li
        v-show="pagePopular <= 1 && totalPage > 2"
        @click.prevent="handleNextPage(2)"
        class="page-item"
      >
        <a
        class="page-link"
        href="#">
        {{ pagePopular + 2 }}
        </a>
      </li>
      <li class="page-item">
        <a
          v-show="pagePopular < totalPage"
          @click.prevent="handleNextPage(1)"
          class="page-link"
          href="#"
          >Next</a
        >
      </li>
      <li class="page-item disabled">
        <a
        v-show="pagePopular >= totalPage"
        class="page-link">
        Next
        </a>
      </li>
    </ul>
    <!-- End Popular Product -->
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PaginationPopular',
  computed: {
    ...mapGetters({
      totalPage: 'totalPage',
      pagePopular: 'pagePopular'
    })
  },
  methods: {
    ...mapActions([
      'getPagePopular'
    ]),

    handleNextPage (number) {
      const page = this.pagePopular + number
      this.getPagePopular(page)
    },

    handlePrevPage (number) {
      const page = this.pagePopular - number
      this.getPagePopular(page)
    }
  }
}
</script>

<style>
</style>
