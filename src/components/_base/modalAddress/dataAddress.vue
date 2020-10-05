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

        <!-- List User Address -->
        <div class="address border border-danger" v-for="address in userAddress" :key="address.id">
            <div class="col-12 font-weight-bold">{{address.title}}</div>
            <div class="col-12">
              <h6>{{ address.address }}. Kota {{address.city}}. Kode Pos {{address.postalCode}}</h6>
              <h6>Penerima: {{address.name}} ({{address.telephoneNumber}})</h6>
            </div>
            <button class="btn changeAddress" @click.prevent="getSelectAddress(address)">Change address</button>
        </div>
        <!-- End List User Address -->

      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'modalAddress',
  props: {
    closeModal: {
      type: Function
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      userAddress: 'userAddress'
    })
  },
  mounted () {
    const data = {
      id: this.userId
    }
    this.getUserAddress(data)
  },
  methods: {
    ...mapActions([
      'getUserAddress',
      'getSelectAddress'
    ])
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
