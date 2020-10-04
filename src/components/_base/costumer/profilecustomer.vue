<template>
  <div>
    <h3 class="m-0">My Profile</h3>
    <p class="text-muted">manage your profile information</p>
    <hr />
    <div class="row">
      <div class="col-8">
        <form>
          <div class="form">
            <div class="row mb-3">
              <label class="my-auto col-3 text-right">Name</label>
              <input
                v-model="textName"
                type="text"
                class="form-control form-control-lg my-auto col"
                :placeholder="userName"
                required
              />
            </div>
            <div class="row mb-3">
              <label class="my-auto col-3 text-right">Email</label>
              <input
                v-model="textEmail"
                type="text"
                class="form-control form-control-lg my-auto col"
                :placeholder="userEmail"
                @change="notifEmail"
              />
            </div>
            <div class="row mb-3">
              <label class="my-auto col-3 text-right">Phone Number</label>
              <input
                v-if="userphoneNumber !== 'undefined'"
                v-model="textPhone"
                type="text"
                class="form-control form-control-lg my-auto col"
                :placeholder="userphoneNumber"
                required
              />
              <input
                v-else
                v-model="textPhone"
                type="text"
                class="form-control form-control-lg my-auto col"
                placeholder="Insert phone number"
                required
              />
            </div>
            <div class="row mb-3">
              <label class="my-auto col-3 text-right">Gender</label>
              <div class="col my-auto">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    v-if="userGender === '1'"
                    v-model="gender"
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    class="custom-control-input"
                    value="1"
                    checked="checked"
                  />
                  <input
                    v-else
                    v-model="gender"
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    class="custom-control-input"
                    value="1"
                  />
                  <label class="custom-control-label" for="customRadioInline1"
                    >Laki-laki</label
                  >
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    v-if="userGender === '2'"
                    v-model="gender"
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    class="custom-control-input"
                    value="2"
                    checked="checked"
                  />
                  <input
                    v-else
                    v-model="gender"
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    class="custom-control-input"
                    value="2"
                  />
                  <label class="custom-control-label" for="customRadioInline2"
                    >perempuan</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <label class="my-auto col-3 text-right">State of birth</label>
            <div class="col-9">
              <div class="row p-0">
                <div class="col mb-3 p-0 mr-1 my-auto">
                  <select
                  class="custom-select"
                  required
                  v-model="day">
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div class="col mb-3 my-auto mr-1 p-0">
                  <select
                    class="custom-select"
                    id="validationDefault04"
                    required
                    v-model="month"
                  >
                    <option value="01">january</option>
                    <option value="02">february</option>
                    <option value="03">march</option>
                    <option value="04">april</option>
                    <option value="05">may</option>
                    <option value="06">june</option>
                    <option value="07">july</option>
                    <option value="08">august</option>
                    <option value="09">september</option>
                    <option value="10">october</option>
                    <option value="11">november</option>
                    <option value="12">desember</option>
                  </select>
                </div>
                <div class="col mb-3 my-auto p-0">
                  <select
                    class="custom-select"
                    id="validationDefault04"
                    required
                    v-model="year"
                  >
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group"></div>
          <div class="row">
            <div class="col-3"></div>
            <div class="col p-0">
              <button
                style="background: #d31d0d"
                class="btn btn-danger rounded-pill m-0 w-50"
                type="submit"
                @click.prevent="updateProfile"
              >
                Save
              </button>
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
  name: 'profilcustomer',
  data () {
    return {
      FILE: '',
      textName: '',
      textEmail: '',
      textPhone: '',
      gender: '',
      day: '',
      month: '',
      year: ''
    }
  },
  computed: {
    ...mapGetters({
      // Form Placeholder
      userName: 'userName',
      userEmail: 'userEmail',
      userphoneNumber: 'userphoneNumber',
      userGender: 'userGender',
      userImg: 'userImg',
      userdateOfBirth: 'userdateOfBirth',
      // End Form Placeholder

      // Data User
      userId: 'userId'
      // End Data User
    })
  },
  mounted () {
    if (this.userdateOfBirth) {
      this.day = this.userdateOfBirth.split(' ')[0]
      this.month = this.userdateOfBirth.split(' ')[1]
      this.year = this.userdateOfBirth.split(' ')[2]
    }

    if (this.userGender) {
      if (this.userGender === 'female') {
        this.gender = 2
      } else {
        this.gender = 1
      }
    }
  },
  methods: {
    ...mapActions([
      'getUserID',
      'updateCustomer',
      'uploadImageCustomer'
    ]),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    updateProfile () {
      const dateOfBirth = this.year + '-' + this.month + '-' + this.day
      console.log(dateOfBirth)

      const data = {
        name: this.textName || this.userName,
        email: this.userEmail,
        gender: Number(this.gender) || this.userGender,
        dateOfBirth: dateOfBirth || this.userdateOfBirth,
        phoneNumber: this.textPhone || this.userphoneNumber
      }
      const input = {
        id: this.userId,
        data: data
      }
      this.updateCustomer(input).then((res) => {
        this.getUserID(this.userId).then((res) => {
          this.textName = ''
          this.textEmail = ''
          this.textPhone = ''
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
      this.uploadImageCustomer(input)
        .then((res) => {
          this.getUserID(this.userId)
            .then((res) => {
              this.textName = ''
              this.textEmail = ''
              this.textPhone = ''
              this.$swal({
                icon: 'success',
                title: 'Success',
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
