<template>
  <div>
    <h3 class="m-0">Choose another address</h3>
    <p class="text-muted">Manage your shipping address</p>
    <hr />
    <a href="" data-toggle="modal" data-target="#addNewAddress">
      <div id="addAddress">
        <h4>Add new address</h4>
      </div>
    </a>

    <!-- User Address -->
    <div class="scroll">
        <div v-for="address in userAddress" :key="address.id">
            <div id="addressBox">

                <div class="row pl-3 pr-3 justify-content-between">
                    <a
                        href=""
                        class="text-danger"
                        data-toggle="modal"
                        data-target="#changeAddress"
                    >
                        <h6 @click.prevent="handleSelectAddress(address)">change address</h6>
                    </a>
                    <div class="d-flex justify-content-end">
                        <i v-if="address.setAddress === 1" class="fa fa-key mr-2 text-warning" aria-hidden="true"></i>
                        <i class="fa fa-trash text-danger" aria-hidden="true" @click.prevent="handleDelete(address)"></i>
                    </div>
                </div>

                <h5>{{address.title}}</h5>
                <h5>{{ address.address }}. Kota {{address.city}}. Kode Pos {{address.postalCode}}</h5>
                <h6>Penerima: {{address.name}} ({{address.telephoneNumber}})</h6>
            </div>
        </div>
    </div>
    <!-- End User Address -->

    <!-- Modal Add New Address-->
    <div
      class="modal fade"
      id="addNewAddress"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header border border-0">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body border border-0">
            <h4 class="text-center">Add new address</h4>
            <form>
              <div class="form p-4">
                <div class="col mb-2">
                  <label
                    >Save address as (ex : home address, office address)</label
                  >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="validationDefault01"
                    required
                    v-model="textTitle"
                  />
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="col mb-2">
                      <label>Recipient’s name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        required
                        v-model="textName"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>Address</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        required
                        v-model="textAddress"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>City or Subdistrict</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        required
                        v-model="textCity"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="col mb-2">
                      <label class="telp">Recipient's telephone number</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        required
                        v-model="textTelephoneNumber"
                      />
                    </div>
                    <div class="col mb-2">
                      <label>Postal code</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        required
                        v-model="textPostalCode"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-check ml-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    Make it the primary address
                  </label>
                </div>
                <div class="row">
                  <div class="ml-auto px-5">
                    <button
                      type="button"
                      class="btn btn-outline-secondary rounded-pill px-5"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style="background: #d31d0d"
                      class="btn btn-danger rounded-pill px-5"
                      @click.prevent="handleAddAddress"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal Add New Address-->

    <!-- Modal Change Address-->
      <div
        class="modal fade"
        id="changeAddress"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border border-0">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body border border-0">
              <h4 class="text-center">Change Address</h4>
              <form>
                <div class="form p-4">
                  <div class="col mb-2">
                    <label
                      >Save address as (ex : home address, office
                      address)</label
                    >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="validationDefault01"
                      required
                      v-model="textTitle"
                      :placeholder="selectAddress.title"
                    />
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="col mb-2">
                        <label>Recipient’s name</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                          v-model="textName"
                          :placeholder="selectAddress.name"
                        />
                      </div>
                      <div class="col mb-2">
                        <label>Address</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                          v-model="textAddress"
                          :placeholder="selectAddress.address"
                        />
                      </div>
                      <div class="col mb-2">
                        <label>City or Subdistrict</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                          v-model="textCity"
                          :placeholder="selectAddress.city"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="col mb-2">
                        <label class="telp">Recipient's telephone number</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                          v-model="textTelephoneNumber"
                          :placeholder="selectAddress.telephoneNumber"
                        />
                      </div>
                      <div class="col mb-2">
                        <label>Postal code</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          required
                          v-model="textPostalCode"
                          :placeholder="selectAddress.postalCode"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-check ml-3 mb-4">
                    <input
                        v-if="selectAddress.setAddress === 1"
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                      checked="checked"
                      v-model="setPrimary"
                    />
                    <input
                    v-else
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                      v-model="setPrimary"
                    />
                    <label class="form-check-label" for="gridCheck1">
                      Make it the primary address
                    </label>
                  </div>
                  <div class="row">
                    <div class="ml-auto px-5">
                      <button
                        type="button"
                        class="btn btn-outline-secondary rounded-pill px-5"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        style="background: #d31d0d"
                        class="btn btn-danger rounded-pill px-5"
                        @click.prevent="handleChangeAddress(selectAddress)"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Change Address-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'address',
  data () {
    return {
      // Form Input Address
      textTitle: '',
      textName: '',
      textAddress: '',
      textCity: '',
      textTelephoneNumber: '',
      textPostalCode: '',
      // End Form Input Address
      setPrimary: ''
    }
  },
  computed: {
    ...mapGetters({
      userAddress: 'userAddress',
      selectAddress: 'selectAddress',
      userId: 'userId'
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
      'getSelectAddress',
      'addAddress',
      'updateAddress',
      'deleteAddress',
      'setPrimaryAddress'
    ]),

    handleSelectAddress (address) {
      this.getSelectAddress(address)
    },

    handleAddAddress () {
      const data = {
        title: this.textTitle,
        name: this.textName,
        address: this.textAddress,
        city: this.textCity,
        telephoneNumber: this.textTelephoneNumber,
        postalCode: this.textPostalCode,
        idUser: this.userId
      }

      this.addAddress(data)
        .then((res) => {
          const data = {
            id: this.userId
          }
          this.getUserAddress(data)
            .then((res) => {
              this.textTitle = ''
              this.textName = ''
              this.textAddress = ''
              this.textCity = ''
              this.textTelephoneNumber = ''
              this.textPostalCode = ''
            })
          this.$swal({
            icon: 'success',
            title: res.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },

    handleChangeAddress (address) {
      if (this.setPrimary) {
        const data = {
          idUser: this.userId
        }
        const input = {
          id: address.id,
          data: data
        }
        this.setPrimaryAddress(input)
          .then((res) => {
            this.setPrimary = ''
          })
      }

      const data = {
        title: this.textTitle || address.title,
        name: this.textName || address.name,
        address: this.textAddress || address.address,
        city: this.textCity || address.city,
        telephoneNumber: this.textTelephoneNumber || address.telephoneNumber,
        postalCode: this.textPostalCode || address.postalCode
      }

      const input = {
        id: address.id,
        data: data
      }

      this.updateAddress(input)
        .then((res) => {
          const data = {
            id: this.userId
          }
          this.getUserAddress(data)
            .then((res) => {
              this.textTitle = ''
              this.textName = ''
              this.textAddress = ''
              this.textCity = ''
              this.textTelephoneNumber = ''
              this.textPostalCode = ''
            })
          this.$swal({
            icon: 'success',
            title: res.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },

    handleDelete (address) {
      this.deleteAddress(address.id)
        .then((res) => {
          const data = {
            id: this.userId
          }
          this.getUserAddress(data)
          this.$swal({
            icon: 'success',
            title: res.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>

<style scoped>
#addAddress {
  display: flex;
  height: 90px;
  border: 2px dashed #9b9b9b;
  box-sizing: border-box;
  border-radius: 8px;
}

#addAddress h4 {
  color: #9b9b9b;
  margin: auto;
}

#addressBox {
  margin-top: 30px;
  padding: 9px;
  height: 140px;
  border: 1px solid #db3022;
  box-sizing: border-box;
  border-radius: 4px;
}

.scroll {
    height: 280px;
    overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
    display: none;
}

i {
    cursor: pointer;
}

.telp {
  width: 300px;
  margin-left: 0;
  text-align: left;
  padding-left: 20px;
}

</style>
