<template>
    <div>
        <h4 class="mb-4">My Order</h4>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All Items</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Not yet paid</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Packed</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col " type="search" placeholder="Search" aria-label="Search">
                </form>
                <div class="boxes">
                    <nav class="navbar navbar-light">
                        <button type="button" class="btn btn-outline-secondary border border-0">Product name &#x21C5;</button>
                        <div class="ml-auto"><button type="button" class="btn btn-outline-secondary border border-0">Price &#x21C5;</button>
                        <button type="button" class="btn btn-outline-secondary border border-0">Stock &#x21C5;</button></div>
                    </nav>
                    <div class="row mt-5">
                        <img src="../../../assets/respond-product.png" class="mx-auto" alt="responsive-image">
                    </div>
                    <p class="text-center">There are no orders yet</p>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col " type="search" placeholder="Search" aria-label="Search">
                </form>
                <div class="boxes">
                    <nav class="navbar navbar-light">
                        <button type="button" class="btn btn-outline-secondary border border-0">Product name &#x21C5;</button>
                        <div class="ml-auto"><button type="button" class="btn btn-outline-secondary border border-0">Price &#x21C5;</button>
                        <button type="button" class="btn btn-outline-secondary border border-0">Stock &#x21C5;</button></div>
                    </nav>
                    <div class="row mt-5">
                        <img src="../../../assets/respond-product.png" class="mx-auto" alt="responsive-image">
                    </div>
                    <p class="text-center">There are no orders yet</p>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col " type="search" placeholder="Search" aria-label="Search">
                </form>
                <div class="boxes">
                    <nav class="navbar navbar-light">
                        <button type="button" class="btn btn-outline-secondary border border-0">Product name &#x21C5;</button>
                        <div class="ml-auto"><button type="button" class="btn btn-outline-secondary border border-0">Price &#x21C5;</button>
                        <button type="button" class="btn btn-outline-secondary border border-0">Stock &#x21C5;</button></div>
                    </nav>
                    <div class="row mt-5">
                        <img src="../../../assets/respond-product.png" class="mx-auto" alt="responsive-image">
                    </div>
                    <p class="text-center">There are no orders yet</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product'
}
</script>

<style scoped>
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
}
.form-inline {
    border: 1px solid #bdb7b7 !important;
    overflow: hidden;
    padding: 0;
    height: 35px;
    width: 250px;
}
.form-inline input {
    border: none;
}
.boxes{
    height: 300px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
}
nav{
    background: #f7f3f3;
}
</style>
