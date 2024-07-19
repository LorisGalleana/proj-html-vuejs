<script>



export default {
    name: "AppAgency"
}
</script>

<template>
    <div class="container-fluid d-flex bg-color">
        <div class="container">
            <div class="row py-5">
                <div class="col-4">
                    <h2 class="fs-1 lh-base">We are a creative web <span class="text-color">design agency</span> </h2>
                    <!-- linea divisore -->
                    <div class="full-line mb-5 mt-5 d-flex gap-2">
                            <div class="short">

                            </div>
                            <div class="long">

                            </div>
                        </div>
                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                    <a href="#" class="btn-color">
                        <span class="overlay overlay-black"></span>
                        <span class="my-btn-text position-absolute">READ&nbsp;MORE</span>
                    </a>
                </div>
                <div class="col-8"><img class="w-100" src="/public/img/imagenotfound.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
    .bg-color {
        background: linear-gradient(to right, $bg-gray 70%, white 30%);
    }
    .text-color {
        color: $green-text;
    }
  
</style>