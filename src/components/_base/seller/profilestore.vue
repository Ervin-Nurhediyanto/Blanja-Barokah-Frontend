<template>
    <div>
        <h3 class="m-0">My Profile</h3>
        <p class="text-muted">manage your profile information</p>
        <hr>
        <div class="row ">
            <div class="col-9">
                <form>
                    <div class="form">
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Store Name</label>
                            <input type="text" v-model="textStoreName" class="form-control form-control-lg my-auto col" :placeholder="userstoreName" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Email</label>
                            <input type="text" v-model="textEmail" @change="notifEmail" class="form-control form-control-lg my-auto col" :placeholder="userEmail">
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Phone Number</label>
                            <input type="text" v-model="textPhone" class="form-control form-control-lg my-auto col" :placeholder="userphoneNumber" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Store Description</label>
                            <textarea v-model="textStoreDesc" class="form-control my-auto col" id="exampleFormControlTextarea1" rows="3" :placeholder="userstoreDescription"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col p-0">
                            <button style="background: #d31d0d" class="btn btn-danger rounded-pill m-0 w-50" type="submit" @click.prevent="updateProfile">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col profile">
                <div class="border-left">
                    <div class="row p-0 img-container">
                        <img v-if="userImg" :src="userImg" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                        <img v-else src="../../../assets/Profile/pp.png" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                    </div>
                    <div class="row cek ml-1">
                      <form class="upload mt-2">
                        <input type="file" name="file" id="file" class="inputFile" @change="onFileUpload" />
                        <label for="file" @change="onFileUpload"><i class="fa fa-pencil-square-o"> Edit</i></label>
                        <button type="submit" class="btn-submit mt-3" @click.prevent="handleUploadImg">Upload</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'profilstore',
  data () {
    return {
      FILE: '',
      textStoreName: '',
      textEmail: '',
      textPhone: '',
      textStoreDesc: ''
    }
  },
  computed: {
    ...mapGetters({
      // Form Placeholder
      userstoreName: 'userstoreName',
      userEmail: 'userEmail',
      userphoneNumber: 'userphoneNumber',
      userstoreDescription: 'userstoreDescription',
      userImg: 'userImg',
      // End Form Placeholder

      // Data User
      userName: 'userName',
      userGender: 'userGender',
      userdateOfBirth: 'userdateOfBirth',
      userId: 'userId'
      // End Data User
    })
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'getUserID',
      'updateSeller',
      'uploadImageStore'
    ]),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    updateProfile () {
      const data = {
        name: this.userName,
        email: this.userEmail,
        gender: this.userGender,
        dateOfBirth: this.userdateOfBirth,
        phoneNumber: this.textPhone || this.userphoneNumber,
        storeName: this.textStoreName || this.userstoreName,
        storeDescription: this.textStoreDesc || this.userstoreDescription
      }
      const input = {
        id: this.userId,
        data: data
      }
      this.updateSeller(input)
        .then((res) => {
          this.getUserID(this.userId)
            .then((res) => {
              this.textStoreName = ''
              this.textEmail = ''
              this.textPhone = ''
              this.textStoreDesc = ''
              this.$swal({
                icon: 'success',
                title: 'Success',
                showConfirmButton: false,
                timer: 1500
              })
            })
        })
    },

    handleUploadImg () {
      const formData = new FormData()
      formData.append('image', this.FILE, this.FILE.name)
      const input = {
        id: this.userId,
        data: formData
      }
      this.uploadImageStore(input)
        .then((res) => {
          this.getUserID(this.userId)
            .then((res) => {
              this.textStoreName = ''
              this.textEmail = ''
              this.textPhone = ''
              this.textStoreDesc = ''
              this.$swal({
                icon: 'success',
                title: 'Success',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .catch(() => {
              this.$swal({
                icon: 'error',
                title: 'Failed',
                showConfirmButton: false,
                timer: 1500
              })
            })
        })
    },

    notifEmail () {
      this.textEmail = 'Cannot change email'
    }
  }
}
</script>
<style scoped>
.img-container {
  width: 120px;
  height: 120px;
  margin-left: 40px;
}
.img-container img {
  width: 100%;
  height: 100%;
}
.profile {
  margin-right: 20px;
}
.cek {
  max-width: 170px;
  height: auto;
}
.btn-submit {
  border: none;
  background-color: #d31d0d;
  color: #fff;
  width: 65px;
  height: 35px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
}
.upload {
  width: 200px;
}
.upload input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.upload label {
  font-size: 14px;
  font-weight: 700;
  color: #d31d0d;
  padding: 5px;
  width: 70px;
  height: 50px;
  margin-left: 15px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  background-color: #fff;
  display: inline-block;
}

.upload input:focus + label,
.upload input + label:hover {
  background-color: #ee6a5e;
  color: #fff;
}
.upload input + label {
  cursor: pointer;
}
</style>
