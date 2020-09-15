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
            <h6>Save address as (ex: home address, office address)</h6>
            <input type="text" class="form-control" placeholder="Rumah">
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <h6>Recipient's name</h6>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <h6>Recipient's telephone number</h6>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <h6>Address</h6>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <h6>Postal code</h6>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <h6>City or Subdistrict</h6>
                    <input type="text" class="form-control">
                </div>
            </div>
            </div>
        </div>
            <div class="col">
                <input type="checkbox" id="scales" name="scales" checked>
                <label for="scales"><h6>Make it the primary address</h6></label>
            </div>
        <div class="row mb-150">
            <div class="col-sm-6"></div>
            <div class="col-sm-6">
                <button type="button" class="btn btn-light rounded-pill w-50" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger rounded-pill w-50">Save</button>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ModalAddress',
  props: {
    closeModal: {
      type: Function
    }
  }
}
</script>

<style scoped>
    .modal {
        display: block;
    }
    .container {
        height: 555px;
        margin-bottom: 50px;
    }
    h6 {
        color: #d4d4d4;
    }
    label {
        width: 230px;
    }
</style>
