<template>
<div class="scroll">
  <div id="area">
            <div id="form-invent" class="shadow ml-5 p-4">
                <h4 class="m-0">inventory</h4>
                <hr>
                <div class="row ">
                    <div class="col-8">
                        <form>
                            <div class="form">
                                <div class="col mb-3">
                                    <label class="col-6 text-left">Name of goods</label>
                                    <input type="text" class="form-control form-control-lg my-auto col" id="validationDefault01" required>
                                </div>
                            </div>
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
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Unit price</label>
                                    <input v-model="price" type="number" class="form-control form-control-lg my-auto col" id="validationDefault01" required>
                                </div>
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Stock</label>
                                    <input v-model="stock" type="text" class="form-control form-control-lg my-auto col" id="validationDefault02" required>
                                </div>
                                <div class="col mb-3">
                                    <label class="my-auto col-3 text-left">Stock</label>
                                    <div class="col my-auto">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline1">Baru</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadioInline2">Bekas</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <div id="area">
            <div id="form-photo" class="shadow ml-5 p-4">
                <h4 class="m-0">Photo of goods</h4>
                <hr>
                <div class="row ">
                    <div class="col-12 border rounded">
                       <div class="box-photo">
                            <div class="main-foto"><div class="logo"><b>+</b></div></div>
                            <div class="foto"><div class="logo"><b>+</b></div></div>
                            <div class="foto"><div class="logo"><b>+</b></div></div>
                            <div class="foto"><div class="logo"><b>+</b></div></div>
                            <div class="foto"><div class="logo"><b>+</b></div></div>
                       </div>
                       <hr>
                       <div class="btn-area">
                            <button class="btn btn-upload rounded-pill ml-0 w-40" type="submit">Upload foto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="area">
            <div id="form-desc" class="shadow ml-5 p-4">
                <h4 class="m-0">Desription</h4>
                <hr>
                <div class="row ">
                    <div class="col-8">
                        <form>
                            <div class="form">
                                <div class="col-12">
                                    <!-- <img src="./img/Screenshot (86) 1.png"> -->
                                    <vue-editor v-model="content" :editor-toolbar="customToolbar" />
                                    <!-- <div>{{ content }}</div> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-8 m-5"></div>
              <div class="col p-3">
                  <button style="background: #d31d0d" class="btn btn-danger rounded-pill m-0 w-50" type="submit" @click="handleAdd">Jual</button>
                </div>
            </div>
    </div>
</div>

</template>

<script>
import { mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'formSelling',
  components: { VueEditor },
  data () {
    return {
      name: '',
      FILE: null,
      price: '',
      idCategory: '',
      color: '',
      category: '',
      size: '',
      brand: '',
      author: '',
      rate: '',
      condition: '',
      stock: '',
      description: '',
      idSeller: '',
      content: '<h1>Some initial content</h1>',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ]
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },
    handleAdd () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('condition', this.condition)
      formData.append('image', this.FILE, this.FILE.name)
      formData.append('description', this.description)
      formData.append('idCategory', this.idCategory)
      formData.append('color', this.color)
      formData.append('category', this.category)
      formData.append('size', this.size)
      formData.append('brand', this.brand)
      formData.append('author', this.author)
      formData.append('rate', this.rate)
      formData.append('idSeller', this.idSeller)

      this.addProduct(formData)
        .then((res) => {
          console.log(res)
        //   this.$router.go(0)
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
