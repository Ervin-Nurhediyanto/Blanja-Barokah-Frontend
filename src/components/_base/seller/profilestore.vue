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
            <div class="col">
                <div class="border-left ml-4">
                    <div class="row p-0">
                        <img v-if="userImg" :src="userImg" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                        <img v-else src="../../../assets/Profile/pp.png" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                    </div>
                    <div class="row p-0">
                        <form>
                          <input class="photo" type="file" @change="onFileUpload">
                          <button class="photo btn btn-outline-secondary rounded-pill m-0 px-3 mx-auto mt-4"
                          @click.prevent="handleUploadImg"
                          >
                            Upload
                            </button>
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
.photo {
    max-width: 50px;
}
</style>
