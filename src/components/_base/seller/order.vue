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
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="sent-tab" data-toggle="tab" href="#sent" role="tab" aria-controls="sent" aria-selected="false">Sent</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="completed-tab" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="false">Order Cancel</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>All items</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>Get paid</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>Processed</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
            <div class="tab-pane fade" id="sent" role="tabpanel" aria-labelledby="sent-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>Sent</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
            <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col " type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>Completed</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
            <div class="tab-pane fade" id="order" role="tabpanel" aria-labelledby="order-tab">
                <form class="form-inline rounded-pill bg-white row mt-3 ml-1 mb-2">
                    <a href="#" type="submit">
                        <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                    </a>
                    <input class="form-control rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                </form>
                <h1>Order Cancel</h1>
                <div class="row">
                    <img src="../../../assets/respond-myorder.png" class="mx-auto" alt="responsive-image"><br>
                </div>
                <p class="text-center">There are no orders yet</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'order'
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
a {
    text-decoration: none !important;
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
    width: 72%;
    background: #F5F5F5;
}
#form {
    background: white;
    margin-top: 45px;
    width: 850px;
    height: 500px;
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
</style>
