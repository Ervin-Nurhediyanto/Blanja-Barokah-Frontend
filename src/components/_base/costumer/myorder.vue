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
                <h1>home</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita molestiae maxime quibusdam inventore voluptate. Sunt itaque molestiae ad debitis ipsam perspiciatis recusandae corrupti nam eius nesciunt quibusdam neque beatae officiis omnis alias, ratione
                quae animi cum. Id, quae. Molestiae voluptate tempore impedit iusto eius, rerum pariatur! Laboriosam tempora ullam corporis distinctio numquam, unde necessitatibus fugit ab porro vero, quidem reiciendis adipisci, accusamus quis
                odit vitae dignissimos. Tempore magni dignissimos ratione reiciendis optio laborum eaque tenetur sed saepe, nisi nihil, modi provident placeat est unde laboriosam cum et consequuntur doloribus recusandae explicabo exercitationem,
                illo odit. Aspernatur possimus sapiente soluta voluptatum facere.
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h1>Not yet paid</h1>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <h1>Packed</h1>
            </div>
            <div class="tab-pane fade" id="sent" role="tabpanel" aria-labelledby="sent-tab">
                <h1>Sent</h1>
            </div>
            <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                <h1>Completed</h1>
            </div>
            <div class="tab-pane fade" id="order" role="tabpanel" aria-labelledby="order-tab">
                <h1>Order Cancel</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myorder'
}
</script>
