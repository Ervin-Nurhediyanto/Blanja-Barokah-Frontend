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
                            <input type="text" v-model="user.storeName" class="form-control form-control-lg my-auto col" :placeholder="user.storeName" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Email</label>
                            <input type="text" v-model="user.email" class="form-control form-control-lg my-auto col" :placeholder="user.email" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Phone Number</label>
                            <input type="number" v-model="user.phoneNumber" class="form-control form-control-lg my-auto col" :placeholder="user.phoneNumber" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Store Description</label>
                            <textarea v-model="user.storeDescription" class="form-control my-auto col" id="exampleFormControlTextarea1" rows="3" :placeholder="user.storeDescription"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col p-0">
                            <button style="background: #d31d0d" class="btn btn-danger rounded-pill m-0 w-50" type="submit" @click="updateProfile">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col">
                <div class="border-left ml-4">
                    <div class="row p-0">
                        <img :src="user.image" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                    </div>
                    <div class="row p-0">
                        <!-- <input class="" type="file" @change="onFileUpload"> -->
                        <!-- <button class="btn btn-outline-secondary rounded-pill m-0 px-3 mx-auto mt-4">Select image</button> -->
                        <button class="photo btn btn-outline-secondary rounded-pill m-0 px-3 mx-auto mt-4"><input class="photo" type="file" @change="onFileUpload"></button>
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
    //   name: this.user.name,
    //   email: this.user.email,
    //   gender: this.user.gender,
    //   dateOfBirth: this.user.dateOfBirth,
    //   phoneNumber: this.user.phoneNumber,
    //   storeName: this.user.storeName,
    //   storeDescription: this.user.storeDescription,
    //   FILE: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    //   userId: 'userId',
    //   userName: 'userName',
    //   userEmail: 'userEmail',
    //   userGender: 'userGender',
    //   userdateOfBirth: 'userdateOfBirth',
    //   userphoneNumber: 'userphoneNumber',
    //   userstoreName: 'userstoreName',
    //   userstoreDescription: 'userstoreDescription'
    })
  },
  mounted () {
    // this.getDataUser()
  },
  methods: {
    ...mapActions(['updateSeller']),
    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },
    // ...mapActions(['getDataUser']),
    updateProfile () {
      const data = {
        name: this.user.name,
        email: this.user.email,
        gender: this.user.gender,
        dateOfBirth: this.user.dateOfBirth,
        phoneNumber: this.user.phoneNumber,
        storeName: this.user.storeName,
        storeDescription: this.user.storeDescription
      }
      //   const formData = new FormData()
      //   formData.append('name', this.name)
      //   formData.append('email', this.email)
      //   formData.append('gender', this.gender)
      //   formData.append('dateOfBirth', this.dateOfBirth)
      //   formData.append('image', this.FILE, this.FILE.name)
      //   formData.append('phoneNumber', this.phoneNumber)
      //   formData.append('storeName', this.storeName)
      //   formData.append('storeDescription', this.storeDescription)

      this.updateSeller(data)
    }
  }
}
</script>
<style scoped>
.photo {
    max-width: 50px;
}
</style>
