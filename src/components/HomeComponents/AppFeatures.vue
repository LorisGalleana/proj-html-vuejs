<script>



export default {
    name: "AppFeatures",
    data(){
        return{
            cards:[
                {
                    card_icon:'icon fa-solid fa-gauge-high',
                    card_title:'Speed Optimization',
                    card_description:'Far far away, behind the word mountains, far from the countries Vokalia Separated...',
                },
                {
                    card_icon:'icon fa-solid fa-cloud',
                    card_title:'Cloud Solutions',
                    card_description:'Far far away, behind the word mountains, far from the countries Vokalia Separated...',
                },
                {
                    card_icon:'icon fa-solid fa-tablet-screen-button',
                    card_title:'Website Design',
                    card_description:'Far far away, behind the word mountains, far from the countries Vokalia Separated...',
                },
                {
                    card_icon:'icon fa-solid fa-stopwatch',
                    card_title:'Online Marketing',
                    card_description:'Far far away, behind the word mountains, far from the countries Vokalia Separated...',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container-fluid my-5 d-flex bg-color">
        <div class="container position-relative">
            <div class="vertical-text position-absolute">
                17 years of experience helping people for best solutions
            </div>
            <div class="row py-5">
                <div class="col-4">
                    <h2 class="fs-1 lh-base">We Are Here To Make Your <span class="text-color">Website </span>Look More <span class="text-color">Elegant </span>And Stylish! </h2>

                    <!-- linea divisore -->

                    <div class="full-line mt-5 mb-5 d-flex gap-2">
                        <div class="short">

                        </div>
                        <div class="long">

                        </div>
                    </div>


                    <a href="#" class="btn-color">
                    <span class="overlay overlay-black"></span>
                    <span class="my-btn-text position-absolute">VIEW ALL</span>
                </a>
                </div>
                <div class="col-8">
                    <div class="my-row">
                        <div class="card" v-for="(card,i) in cards" :key="i">
                            <div class="background-col"></div>
                            <div class="my-card-text">
                                <div><i :class="card.card_icon"></i></div>
                                <h3>{{ card.card_title }}</h3>
                                <p class="py-2 mini-font">{{ card.card_description }}</p>
                            </div>
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

.mini-font {
    font-size: 0.8rem;
}

/* Cards */
.my-row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
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
    width: calc(100% / 2 - 30px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
}
// vertical text

.vertical-text{
    right: -20%;
    top: 50%;
    rotate: 270deg;
}

/* Effetto hover su card */
.card:hover{
    cursor: pointer;
    transition: all 0.3s linear;
    color: white;
}

.card:hover .icon{
    transition: all 0.3s linear;
    color: white;
}

.card:hover .background-col{
    opacity: 1;
    transition: all 0.3s ease-in-out;
}

.background-col{
    background: $green-gradient-right;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    padding: 20px;
}

.my-card-text{
    z-index: 200;
    padding: 20px;
}

</style>