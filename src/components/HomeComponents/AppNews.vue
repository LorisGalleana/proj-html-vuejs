<script>
export default {
    name: "AppNews",
    data(){
        return{
            cards:[
                {
                    card_image:'/public/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',
                    card_absolute_title:'Marketing Ideas',
                    card_absolute_date:'May 24, 2018 •by Alex',
                },
                {
                    card_image:'/public/img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',
                    card_absolute_title:'Rest During Working Hours',
                    card_absolute_date:'May 24, 2018 •by Alex',
                },
                {
                    card_image:'/public/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',
                    card_absolute_title:'Develop Your Startup Idea',
                    card_absolute_date:'May 24, 2018 •by Alex',
                },
            ]
        }
    }
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
                <div class="col-4 position-relative my-card" v-for="(card,i) in cards" :key="i">
                    <div class="card-absolute position-absolute">
                        <div class="card-absolute-date">
                            {{ card.card_absolute_date }}
                        </div>
                        <div class="card-absolute-title">
                            {{ card.card_absolute_title }}
                        </div>
                    </div>
                    <div class="img-container">
                        <img :src="card.card_image" alt="card">
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-12 my-margin-top">
                    <a href="#" class="btn-color-black">
                        <span class="overlay overlay-green"></span>
                        <span class="my-btn-text position-absolute">VIEW&nbsp;ALL&nbsp;POST</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.my-margin-top{
    margin-top: 100px;
}

.color-bg {
    background: white;
    height: 500px;
}
.mini-font {
    font-size: 0.7rem;
}

img{
    max-width: 100%;
    border-radius: 20px;
    box-shadow: 5px 10px #f1f1f1;
    object-fit: cover;
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

/* Card-absolute */
.card-absolute{
    bottom: -20%;
    left: 50%;
    transform: translate(-50%,-20%);
    background-color: white;
    width: 70%;
    padding: 20px;
    box-shadow: 20px 0 40px 0 rgba(0, 0, 0, .06);
    border-radius: 5px;
}

.card-absolute-date{
    font-size: 0.7rem;
}

.card-absolute-title{
    font-weight: bold;
}

.card-absolute-title::before{
    content: '•';
    color: $green-text;
    margin-right: 5px;
}

.margin-top{
    margin-top: 70px;
}

/* Animazioni */
img:hover{
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
}

.img-container{
    max-width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

.my-card:hover .card-absolute{
    transition: all 0.5s ease-in-out;
    bottom: -25%;
    color: white;
    background: $green-gradient-right;
    z-index: 9;
}

.btn{
    &:hover{
        background: $green-gradient ;
        color: white;
    }
}
</style>