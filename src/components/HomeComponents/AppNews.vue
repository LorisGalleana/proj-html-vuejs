<script>
export default {
    name: "AppNews"
}
</script>

<template>
    <div class="container-fluid color-bg">
        <div class="container position-relative">
            <div class="vertical-text position-absolute">
                17 years of experience helping people for best solutions
            </div>
            <div class="row text-center">
                <div class="col-12 text-center py-5 fs-1">
                    <h2 class="fs-1 lh-base">Latest News & Our <span class="text-color">Blog </span></h2>
                </div>
                <div class="col-12 d-flex justify-content-center">

                     <!-- linea divisore -->
                      
                    <div class="full-line mb-4 d-flex gap-2">
                        <div class="short" id="white">

                        </div>
                        <div class="long">

                        </div>
                    </div>
                </div>
               
            </div>
            <div class="row text-center">
                <div class="col-4">
                    <img src="/public/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/public/img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg" alt="">
                </div>
                <div class="col-4">
                    <img src="/public/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.color-bg {
    background: white;
    height: 500px;
}
.mini-font {
    font-size: 0.7rem;
}

img{
    max-width: 100%;
    margin-top: 20px;
}

.text-color {
    color: $green-text;
}

// vertical text

.vertical-text{
    left: -20%;
    top: 70%;
    rotate: 270deg;
    font-size: 0.8rem;
}

</style>