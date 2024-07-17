<script>



export default {
    name: "AppFeatures"
}
</script>

<template>
    <div class="container-fluid d-flex bg-color">
        <div class="container position-relative">
            <div class="vertical-text position-absolute">
                17 years of experience helping people for best solutions
            </div>
            <div class="row py-5">
                <div class="col-4">
                    <h2 class="fs-1 lh-base">We Are Here To Make Your <span class="text-color">Website </span>Look More <span class="text-color">Elegant </span>And Stylish! </h2>

                    <!-- linea divisore -->

                    <div class="full-line mt-4 mb-4 d-flex gap-2">
                        <div class="short">

                        </div>
                        <div class="long">

                        </div>
                    </div>


                    <a href="#" class="btn btn-color mt-4">VIEW ALL</a>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-6 card">
                            <div><i class="icon fa-solid fa-gauge-high"></i></div>
                            <h3>Speed Optimization</h3>
                            <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                        <div class="col-6 card">
                            <div><i class="icon fa-solid fa-cloud"></i></div>
                            <h3>Cloud Solutions</h3>
                            <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                        <div class="col-6 card">
                            <div><i class="icon fa-solid fa-tablet-screen-button"></i></div>
                            <h3>Website Design</h3>
                            <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                            <div class="col-6 card">
                            <div><i class="icon fa-solid fa-stopwatch"></i></div>
                            <h3>Online Marketing</h3>
                            <p class="py-2 mini-font">Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.bg-color {
    background: white;
}

.text-color {
    color: $green-text;
}

.btn-color {
    background: $green-gradient ;
    color: white;
    border-radius: 24px;
    font-size: 0.7rem;
    padding: 12px 30px;
}

.mini-font {
    font-size: 0.8rem;
}

.icon {
    font-size: 3rem;
    display: inline-block;
    border-radius: 50%;
    padding: 1.2rem;
    margin-bottom: 20px ;
    color: $green-text;
}
.card {
    border: 1px solid white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: calc(100% / 2 - 30px);
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 30px;
    padding: 50px;
    &:hover{
        background: $green-gradient ;
        color: white;
        .icon{
            color: white;
        }
    }
}

// vertical text

.vertical-text{
    right: -20%;
    top: 50%;
    rotate: 270deg;
}

</style>