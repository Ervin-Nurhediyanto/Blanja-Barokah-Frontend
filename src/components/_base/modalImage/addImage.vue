<template>
    <!-- modal -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header mr-auto border border-0">
                    <button type="button" class="close mr-auto" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5>Add Image</h5>
                </div>
                <form class="upload mt-1 mb-5">
                    <input type="file" name="file" id="file" class="inputFile" @change="onFileUpload" />
                    <label for="file" @change="onFileUpload"><i class="fa fa-pencil-square-o"> Upload Image</i></label>
                    <button type="submit" class="btn-submit mt-3" @click.prevent="handleUploadImg">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'addImage'
}
</script>

<style scoped>
.upload {
    margin-left: auto;
    margin-right: auto;
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
  width: 150px;
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
</style>
