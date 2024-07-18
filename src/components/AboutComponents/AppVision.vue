<script>
export default {
    name: "AppVision"
}
</script>

<template>
    <div class="container-fluid color-bg">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 text-white text-center py-5 fs-1">
                    Our Visions
                </div>
                <div class="col-12 d-flex justify-content-center">
                     <!-- linea divisore -->
                    <div class="full-line-w mb-4 d-flex gap-2">
                        <div class="short" id="white">

                        </div>
                        <div class="long">

                        </div>
                    </div>
                </div>
               
            </div>
            <div class="row my-5 gap-5 flex-nowrap text-white text-center">
                <div class="col-3">
                    <div class=""><i class="icon fa-solid fa-database" style="color: #ffffff;"></i></div>
                    <p class="fs-6 fw-semibold">Virtual Document </p>
                    <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia...</p>
                </div>
                <div class="col-3">
                    <div><i class="icon fa-solid fa-money-bill-1-wave"></i></div>
                    <p class="fs-6 fw-semibold">Flexible Payments</p> 
                    <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia...</p>
                </div>
                <div class="col-3">
                    <div><i class="icon fa-solid fa-gauge-high"></i></div>
                    <p class="fs-6 fw-semibold">SEO Tools</p>
                    <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia...</p>
                </div>
                <div class="col-3">
                    <div><i class="icon fa-regular fa-gem"></i></div>
                    <p class="fs-6 fw-semibold">UI Design</p>
                    <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.color-bg {
    background: $green-gradient;
    padding: 100px 0px;
}

.mini-font {
    font-size: 0.7rem;
}

#white{
    background-color: white;
}

// cards

.col-3 {
    padding: 60px 40px;
    border-radius: 10%;
    &:hover {
        background: $black-gradient;
        opacity: 0.6;
        cursor: pointer;
    }
}

.icon {
    font-size: 3rem;
    display: inline-block;
    border: solid 1px white;
    border-radius: 50%;
    padding: 1.2rem;
    margin-bottom: 20px ;
}

// divisore

.full-line-w {
    width: 90px;
    height: 8px;
    .short {
        width: 15px;
        background: white;
        height: 100%;
        border-radius: 10px;
    }
    .long {
        width: 65px;
        background:white;
        height: 100%;
        border-radius: 10px;
    }
}
</style>