<template>
  <div class="modal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content container">
      <div class="modal-body">
          <div class="col-12">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="this.closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <p class="text-md-center font-weight-bold">Add new address</p>
         <div class="form-group">
            <label>Save address as (ex : home address, office address</label>
            <input type="text" class="form-control">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'addAddress',
  props: {
    closeModal: {
      type: Function
    }
  }
}
</script>

<style scoped>

</style>
