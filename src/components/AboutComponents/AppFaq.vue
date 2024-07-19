<script>
export default {
    name: "AppFaq"
}
</script>

<template>
    <div class="container-fluid my-3">
        <div class="container text-white font-size align-items-center justify-content-center d-flex text-center fw-semibold lh-lg ">
            <div>
                <div>PLEASE SEND US YOUR <span class="text-color">QUESTIONS</span> AND </div>
                <div>WE CAN <span class="text-color">HELP</span> YOU BETTER</div>
                <a href="#" class="btn-color">
                        <span class="overlay overlay-black"></span>
                        <span class="my-btn-text position-absolute">CONTACT&nbsp;US</span>
                    </a>
            </div>
        </div>
    </div>
    <div class="white-space"></div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid {
    height: 70vh;
    background-image: url(img/Businessman-with-smartphone-standing-at-staircase.@2x.jpg);
    background-size: cover;
    position: relative;
    background-position: center left;
}
.container-fluid::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(258deg, #0c0c0c 0%, #474747 100%);
    opacity: .88;
}
.container {
    height: 100%;
    position: relative;
}
.text-color {
    color: $green-text;
}
.font-size {
    font-size: 3rem;
}
</style>