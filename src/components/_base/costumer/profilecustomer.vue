<template>
    <div>
        <h3 class="m-0">My Profile</h3>
        <p class="text-muted">manage your profile information</p>
        <hr>
        <div class="row ">
            <div class="col-8">
                <form>
                    <div class="form">
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Name</label>
                            <input type="text" class="form-control form-control-lg my-auto col" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Email</label>
                            <input type="text" class="form-control form-control-lg my-auto col" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Phone Number</label>
                            <input type="number" class="form-control form-control-lg my-auto col" required>
                        </div>
                        <div class="row mb-3">
                            <label class="my-auto col-3 text-right">Gender</label>
                            <div class="col my-auto">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline1">Laki-laki</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline2">perempuan</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="my-auto col-3 text-right">State of birth</label>
                        <div class="col-9">
                            <div class="row p-0">
                                <div class="col mb-3 p-0 mr-1 my-auto">
                                    <select class="custom-select" required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
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
                                    <select class="custom-select" id="validationDefault04" required>
                                        <option value="january">january</option>
                                        <option value="february">february</option>
                                        <option value="march">march</option>
                                        <option value="april">april</option>
                                        <option value="may">may</option>
                                        <option value="june">june</option>
                                        <option value="july">july</option>
                                        <option value="august">august</option>
                                        <option value="september">september</option>
                                        <option value="october">october</option>
                                        <option value="november">november</option>
                                        <option value="desember">desember</option>
                                    </select>
                                </div>
                                <div class="col mb-3 my-auto p-0">
                                    <select class="custom-select" id="validationDefault04" required>
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
                            <button style="background: #d31d0d" class="btn btn-danger rounded-pill m-0 w-50" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col">
                <div class="border-left ml-4">
                    <div class="row p-0">
                        <img src="../../../assets/christian-buehner-DItYlc26zVI-unsplash 1.png" class="rounded-circle mx-auto" alt="Responsive image" height="111px">
                    </div>
                    <div class="row p-0">
                        <button class="btn btn-outline-secondary rounded-pill m-0 px-3 mx-auto mt-4">Select image</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profilcustomer'
}
</script>
