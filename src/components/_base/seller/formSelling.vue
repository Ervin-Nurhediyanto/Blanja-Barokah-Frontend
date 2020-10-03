<template>
<div class="scroll">
  <div id="area">
            <div id="form-invent" class="shadow ml-5 p-4">
                <h4 class="m-0">inventory</h4>
                <hr>
                <div class="row ">
                    <div class="col-8">
                        <form>
                            <!-- Product-Name -->
                            <div class="form">
                                <div class="col mb-3">
                                    <label class="col-6 text-left">Name of goods</label>
                                    <input
                                    v-model="name"
                                    type="text"
                                    class="form-control form-control-lg my-auto col"
                                    id="validationDefault01"
                                    required>
                                </div>
                            </div>
                            <!-- End Product-Name -->
                        </form>
                    </div>
                </div>
            </div>
            <div id="form-item" class="shadow ml-5 p-4">
                <h4 class="m-0">Item details</h4>
                <hr>
                <div class="row ">
                    <div class="col-8">
                        <form>
                            <div class="form">
                                <!-- Product-Price -->
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Unit price</label>
                                    <input
                                    v-model="price"
                                    type="number"
                                    class="form-control form-control-lg my-auto col"
                                    id="validationDefault01"
                                    required>
                                </div>
                                <!-- End Product-Price -->

                                <!-- Product-Stock -->
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Stock</label>
                                    <input
                                    v-model="stock"
                                    type="number"
                                    class="form-control form-control-lg my-auto col"
                                    id="validationDefault02"
                                    required>
                                </div>
                                <!-- End Product-Stock -->

                                <!-- Product-Condition -->
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Condition</label>
                                    <div class="col my-auto">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                            v-model="condition"
                                            type="radio"
                                            id="customRadioInline1"
                                            name="customRadioInline1"
                                            class="custom-control-input"
                                            value="new">
                                            <label class="custom-control-label" for="customRadioInline1">New</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                            v-model="condition"
                                            type="radio"
                                            id="customRadioInline2"
                                            name="customRadioInline1"
                                            class="custom-control-input"
                                            value="old">
                                            <label class="custom-control-label" for="customRadioInline2">Old</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Product-Condition -->

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <div id="area">
            <div id="form-photo" class="shadow ml-5 p-4">

                <!-- Product-Image -->
                <h4 class="m-0">Photo of goods</h4>
                <hr>
                <div class="row ">
                    <div class="col-12 border rounded">
                       <div class="box-photo">
                            <input class="photo" type="file" @change="onFileUpload">
                       </div>
                       <hr>
                       <div class="btn-area">
                            <button class="btn btn-upload rounded-pill ml-0 w-40" type="submit">Upload foto</button>
                        </div>
                    </div>
                </div>
                <!-- End Product-Image -->

            </div>
        </div>
        <div id="area">
            <div id="form-desc" class="shadow ml-5 p-4">

                <!-- Product-Description -->
                <h4 class="m-0">Desription</h4>
                <hr>
                <div class="row ">
                    <div class="col-8">
                        <form>
                            <div class="form">
                                <div class="col-12">
                                    <vue-editor
                                    v-model="description"
                                    :editor-toolbar="customToolbar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End Product-Description -->

            </div>
        </div>
        <div class="row">
            <div class="col-8 m-5"></div>
              <div class="col p-3">
                  <button
                  style="background: #d31d0d"
                  class="btn btn-danger rounded-pill m-0 w-50"
                  type="submit"
                  @click="handleAddProduct">
                  Jual
                  </button>
                </div>
            </div>
    </div>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'formSelling',
  components: { VueEditor },
  data () {
    return {
      // Form input product
      name: '',
      FILE: null,
      price: '',
      color: '',
      category: '',
      size: '',
      brand: '',
      author: '',
      condition: '',
      stock: '',
      description: 'description of product',
      // End Form input product

      // Vue Editor
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ]
      // End Vue Editor
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions([
      'addProduct',
      'getNewProduct',
      'imageProduct'
    ]),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    handleAddProduct () {
      const data = {
        name: this.name,
        price: this.price,
        rate: 0,
        condition: this.condition,
        stock: this.stock,
        description: this.description,
        idSeller: this.userId
      }
      this.addProduct(data)
        .then((res) => {
          this.getNewProduct()
            .then((res) => {
              const idProduct = res.data.result[0].id
              const formData = new FormData()
              formData.append('image', this.FILE, this.FILE.name)
              const input = {
                id: idProduct,
                data: formData
              }
              this.imageProduct(input)
                .then((res) => {
                  this.name = ''
                  this.price = ''
                  this.condition = ''
                  this.stock = ''
                  this.condition = 'description of product'
                })
            })
        })
    }
  }
}
</script>

<style scoped>
    .container-fluid {
            height: 100vh;
            padding: 0;
            margin: 0;
        }

        #profil {
            width: 28%;
            padding-top: 45px;
        }

        #photo {
            border-radius: 50%;
        }

        #icon {
            display: flex;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        #profil h6:hover {
            background: rgb(255, 242, 124);
        }

        #icon img {
            margin: auto;
        }

        #area {
            width: 100%;
            margin-left: 0;
            background: #F5F5F5;
        }

        #form-invent {
            background: white;
            margin-top: 45px;
            width: 730px;
            height: 200px;
        }
        #form-item {
            background: white;
            margin-top: 45px;
            width: 730px;
            height: 400px;
        }
        #form-desc {
            background: white;
            margin-top: 45px;
            width: 730px;
            height: 400px;
        }
        #form-photo {
            background: white;
            margin-top: 45px;
            margin: auto;
            width: 730px;
            height: 500px;
        }
        .box-photo {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 730px;
            height: 300px;
            /* border: 1px solid black; */
            border-radius: 4px;
        }
        .main-foto {
            width: 190px;
            height: 190px;
            margin: 30px 20px;
            background-color: #D4D4D4;
        }
        .foto {
            width: 120px;
            height: 120px;
            margin: 10px;
            margin-top: 60px;
            background-color: #D4D4D4;
        }
        .logo {
            display: flex;
            margin: 60px;
            width: 50px;
            height: 50px;
            font-size: 100px;
            color: white;
            align-items: center;
            /* border: 1px solid black; */
        }
        .foto .logo {
            display: flex;
            margin: 30px;
            width: 50px;
            height: 50px;
            font-size: 80px;
            color: white;
            align-items: center;
            /* border: 1px solid black; */
        }
        .btn-upload {
            border: 1px solid #9B9B9B;
        }
        .btn-area {
            margin-left: 350px;
            margin-bottom: 20px;
            /* border: 1px solid #9B9B9B; */
        }
        textarea {
            resize: none;
            width: 670px;
            height: 240px;
            border: 1px solid #D4D4D4;
        }
        .scroll {
            overflow-y: scroll;
            max-height: 460px;
        }
        .scroll::-webkit-scrollbar {
                display: none;
        }

</style>
