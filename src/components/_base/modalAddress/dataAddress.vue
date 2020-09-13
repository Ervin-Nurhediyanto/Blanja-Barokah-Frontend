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
        <p class="text-md-center font-weight-bold">Choose another address</p>
        <div class="addAddress"><p class="text-center">Add new address</p></div>
        <div class="address border border-danger">
            <div class="col-12 font-weight-bold">Andress Jane</div>
            <div class="col-12"><h6>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabuaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: bkok c 16] Sokaraja. Kab. Banyumas. 53181</h6></div>
            <button class="btn changeAddress">Change address</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'modalAddress',
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
    }
    .addAddress {
        margin-top: 30px;
        height: 80px;
        color: #d4d4d4;
        border: 2px dashed #d4d4d4;
    }
    .address {
        margin-top: 50px;
    }

    p {
        margin-top: 20px;
    }

    .changeAddress {
        height: 35px;
        margin: 10px;
        color: #D84242;
        border: 2px solid #D4D4D4;
        border-radius: 25px;
    }
</style>
