<template>
  <nav aria-label="..." class="col-md-12">
    <!-- New Product -->
    <ul class="pagination">
      <li class="page-item">
        <a
        v-show="pageNew > 1"
        @click.prevent="handlePrevPage(1)"
        class="page-link"
        href="#"
          >Prev</a
        >
      </li>
      <li class="page-item disabled">
        <a
        v-show="pageNew <= 1"
        class="page-link">
        Prev
        </a>
      </li>
      <li
        v-show="pageNew >= totalPage && pageNew < 2 && pageNew !== 1"
        @click.prevent="handlePrevPage(2)"
        class="page-item"
      >
        <a
        class="page-link"
        href="#">
        {{ pageNew - 2 }}
        </a>
      </li>
      <li
      v-show="pageNew > 1"
      @click.prevent="handlePrevPage(1)"
      class="page-item">
        <a
        class="page-link"
        href="#">
        {{ pageNew - 1 }}
        </a>
      </li>
      <li
      class="page-item active"
      aria-current="page">
        <span class="page-link">
          {{ pageNew }}
          <span class="sr-only">(current)</span>
        </span>
      </li>
      <li
      v-show="pageNew < totalPage"
      @click.prevent="handleNextPage(1)"
      class="page-item">
        <a
        class="page-link"
        href="#">
        {{ pageNew + 1 }}
        </a>
      </li>
      <li
        v-show="pageNew <= 1 && totalPage > 2"
        @click.prevent="handleNextPage(2)"
        class="page-item"
      >
        <a
        class="page-link"
        href="#">
        {{ pageNew + 2 }}
        </a>
      </li>
      <li class="page-item">
        <a
          v-show="pageNew < totalPage"
          @click.prevent="handleNextPage(1)"
          class="page-link"
          href="#"
          >Next</a
        >
      </li>
      <li class="page-item disabled">
        <a
        v-show="pageNew >= totalPage"
        class="page-link">
        Next
        </a>
      </li>
    </ul>
    <!-- End New Product -->
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PaginationNew',
  computed: {
    ...mapGetters({
      totalPage: 'totalPage',
      pageNew: 'pageNew'
    })
  },
  methods: {
    ...mapActions([
      'getPageNew'
    ]),

    handleNextPage (number) {
      const page = this.pageNew + number
      this.getPageNew(page)
    },

    handlePrevPage (number) {
      const page = this.pageNew - number
      this.getPageNew(page)
    }
  }
}
</script>

<style>
</style>
