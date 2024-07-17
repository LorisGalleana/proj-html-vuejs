<script>
export default {
    name: "AppPricing"
}
</script>

<template>
    <div class="container">
        <div class="row align-items-center">
        <div class="col-3">
            <!-- Interlinea -->
            <h2 class="fs-1 lh-base">
                With <span class="green-text">live chat 24/7</span> &
                support
            </h2>
            <!-- Interlinea -->
            <div class="full-line mt-4 mb-5 d-flex gap-2">
                <div class="short">

                </div>
                <div class="long">

                </div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countriesVokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
        </div>
        <div class="col-9 d-flex gap-4 text-center">
        <div class="col">
            <div class="card mb-4 shadow-sm">
                <div class="bg-color black"></div>
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">DESIGNING</h4>
                <div>All Design</div>
            </div>
            <div class="body">
                <div class="bg-color black py-4">
                    <h1 class="card-title pricing-card-title">$10<small class="fw-light">/Design</small></h1>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                <li class="mb-2"><i class="fa-solid fa-check"></i>Creative Design Enabled</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Vibrant Color Usage</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Eye Catching Design</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Extreme Typography</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Exceptional Design</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-4 shadow-sm">
            <div class="bg-color green"></div>
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">DEVELOPMENT</h4>
                <div>WordPress Projects</div>
            </div>
            <div class="body">
                <div class="bg-color green py-4">
                    <h1 class="card-title pricing-card-title">$15<small class="fw-light">/Design</small></h1>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                <li class="mb-2"><i class="fa-solid fa-check"></i>Creative Design Enabled</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Vibrant Color Usage</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Eye Catching Design</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Extreme Typography</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Exceptional Design</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-4 shadow-sm">
                <div class="bg-color black"></div>
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">DESIGNING</h4>
                <div>All Design</div>
            </div>
            <div class="body">
                <div class="bg-color black py-4">
                    <h1 class="card-title pricing-card-title">$10<small class="fw-light">/Product</small></h1>
                </div>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="mb-2"><i class="fa-solid fa-check"></i>Creative Design Enabled</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Vibrant Color Usage</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Eye Catching Design</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Extreme Typography</li>
                <li class="mb-2"><i class="fa-solid fa-check"></i>Exceptional Design</li>
                </ul>
            </div>
            </div>
        </div>
        </div>

    </div>
    </div>
  
    

</template>

<style lang="scss" scoped>
@use '/src/styles/partials/variables' as *;
.green-text{
    color: $green-text;
}

.bg-color{
    color: white;
    width: 100%;
    min-height: 15px;
}

.black{
    background-color: black;
}

.green{
    background: $green-gradient;
}

.card{
    border-radius: 20px;
}
</style>