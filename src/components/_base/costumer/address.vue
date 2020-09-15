<template>
    <div>
        <h3 class="m-0">Choose another address</h3>
        <p class="text-muted">Manage your shipping address</p>
        <hr>
        <a href="" data-toggle="modal" data-target="#exampleModal">
            <div id="addAddress">
                <h4>Add new address</h4>
            </div>
        </a>
        <div id="addressBox">
            <a href="" class="text-danger" data-toggle="modal" data-target="#exampleModal">
                <h6>change address</h6>
            </a>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border border-0">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body border border-0">
                        <h4 class="text-center">Add new address</h4>
                        <form>
                            <div class="form p-4">
                                <div class="col mb-2">
                                    <label>Save address as (ex : home address, office address)</label>
                                    <input type="text" class="form-control form-control-lg" id="validationDefault01" required>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="col mb-2">
                                            <label>Recipient’s name</label>
                                            <input type="text" class="form-control form-control-lg" required>
                                        </div>
                                        <div class="col mb-2">
                                            <label>Address</label>
                                            <input type="text" class="form-control form-control-lg" required>
                                        </div>
                                        <div class="col mb-2">
                                            <label>City or Subdistrict</label>
                                            <input type="text" class="form-control form-control-lg" required>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="col mb-2">
                                            <label>Recipient's telephone number</label>
                                            <input type="number" class="form-control form-control-lg" required>
                                        </div>
                                        <div class="col mb-2">
                                            <label>Postal code</label>
                                            <input type="text" class="form-control form-control-lg" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check ml-3 mb-4">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                                    <label class="form-check-label" for="gridCheck1">
                                        Make it the primary address
                                    </label>
                                </div>
                                <div class="row">
                                    <div class="ml-auto px-5">
                                        <button type="button" class="btn btn-outline-secondary rounded-pill px-5" data-dismiss="modal">Cancel</button>
                                        <button type="submit" style="background: #d31d0d" class="btn btn-danger rounded-pill px-5">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'address'
}
</script>

<style scoped>
#addAddress {
    display: flex;
    height: 90px;
    border: 2px dashed #9B9B9B;
    box-sizing: border-box;
    border-radius: 8px;
}

#addAddress h4 {
    color: #9B9B9B;
    margin: auto;
}

#addressBox {
    margin-top: 30px;
    padding: 9px;
    height: 140px;
    border: 1px solid #DB3022;
    box-sizing: border-box;
    border-radius: 4px;
}
</style>
