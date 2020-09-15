<template>
  <div class="modal">
    <div class="modal-dialog modal-md">
        <div class="modal-content container">
            <div class="modal-header">
                <div class="row m-0">
                    <div class="col-2 mt-2">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="this.closeModal">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="col-10">
                        <p class="text-left font-weight-bold">Select Payment</p>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <h5 class="text-left">Payment method</h5>
                <div class="row">
                    <div class="col-3">
                        <img src="../../../assets/payment/Logo-GoPay-Vector-CDR-dan-PNG 1.png">
                    </div>
                    <div class="col-7">
                        <h5 class="text-left mt-2">Gopay</h5>
                    </div>
                    <div class="col-2">
                        <label class="container">
                        <input type="checkbox">
                        <div class="checkmark"></div>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <img src="../../../assets/payment/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png">
                    </div>
                    <div class="col-7">
                        <h5 class="text-left mt-2">Pos indonesia</h5>
                    </div>
                    <div class="col-2">
                        <label class="container">
                        <input type="checkbox">
                        <div class="checkmark"></div>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <img src="../../../assets/payment/mc.png">
                    </div>
                    <div class="col-7">
                        <h5 class="text-left mt-2">Mastercard</h5>
                    </div>
                    <div class="col-2">
                        <label class="container">
                        <input type="checkbox">
                        <div class="checkmark"></div>
                        </label>
                    </div>
                </div>
                <hr>
                <div class="summary-box">
                <div class="col-12"><h5 class="text-left font-weight-bold">Shopping summary</h5></div>
                    <div class="row">
                        <div class="col-6"><h6 class="text-left">Order</h6></div>
                        <div class="col-6"><h6 class="text-right font-weight-bold">$ 40.0</h6></div>
                    </div>
                    <div class="row">
                        <div class="col-6"><h6 class="text-left">Delivery</h6></div>
                        <div class="col-6"><h6 class="text-right font-weight-bold">$ 5.0</h6></div>
                    </div>
                </div>
            <div class="modal-footer">
                <div class="col">
                    <div class="row-10"><h5 class="text-left font-weight-bold">Shopping summary</h5></div>
                    <div class="row-6"><h5 class="text-left-danger">$ 45.0</h5></div>
                </div>
                <button type="button" class="btn btn-danger rounded-pill w-25">Buy</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modalPayment',
  props: {
    closeModal: {
      type: Function
    }
  }
}
</script>

<style scoped>
    .modal {
        display: block;
    }
    .container {
  display: block;
  position: relative;
  padding-left: 0px;
  margin-bottom: 12px;
  font-size: 22px;
  /* border: 1px solid black; */
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  /* cursor: pointer; */

  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: 5px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #D84242;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.summary-box {
    width: 420px;
    height: 130px;
}

</style>
