<script>
export default {
    name: "AppTeam",
    data(){
        return{
            workers:[
                {
                    card_image:'/public/img/worker/1.png',
                    card_name:'ANNA PHILANDORS',
                    card_role:'Creative director',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                }, {
                    card_image:'/public/img/worker/2.png',
                    card_name:'DEXTER MATTHEW',
                    card_role:'Designer',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                },
                {
                    card_image:'/public/img/worker/3.png',
                    card_name:'RANDY SMITH',
                    card_role:'Project Manage',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                },
                {
                    card_image:'/public/img/worker/4.png',
                    card_name:'ANGELO GARNER',
                    card_role:'Co-founder',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                },
                {
                    card_image:'/public/img/worker/5.png',
                    card_name:'JIMMIE BENEDICT',
                    card_role:'Frontend Developer',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                },
                {
                    card_image:'/public/img/worker/6.png',
                    card_name:'JANET GARNER',
                    card_role:'Founder',
                    card_paragraph:'Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...',
                },
            ]
        }
    }
}
</script>

<template>
    <!-- Titolo sezione -->

    <section class="team-title text-center">
        <h2 class="fs-1 lh-base">Get to know <br>
            <span class="text-color">our team</span> 
        </h2>
    </section>

    <!-- Card container -->
    
     <div class="container">
        <div class="row d-flex justify-content-between">

            <!-- cards -->

            <div class="card" v-for="(worker,i) in workers" :key="i">
                <img :src="worker.card_image" alt="worker">
                <div class="card-info">
                    <div class="name fs-4">{{worker.card_name}}</div>
                    <div class="role fs-5">{{ worker.card_role }}</div>
                    <p class="mt-2">
                        {{ worker.card_paragraph }}
                    </p>
                    <div class="icons">
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>
            </div>

            
        </div>

     </div>
    
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.text-color {
        color: $green-text;
    }
.team-title{
    margin: 60px 0;
}
.card{
    width: calc(100% / 3 - 10px);
    padding: 0;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    
    &:hover .card-info{
        display: inline-block;
        animation: card-animation 1s;
        width: 100%;
        height: 100%;
    }
}

img{
    max-width: 100%;
}

.card-info{
    display: none;
    position: absolute;
    color: white;
    background: $green-gradient;
    padding: 10%;
    opacity: 0.90;
}

.icons{
    a{
        color: white;
        margin-right: 20px;
    }
}

.name, .role, p, .icons{
    animation-name: text-animation;
    animation-duration: 1.5s;
}

@keyframes card-animation {
    0% {
        width: 0;
        height: 0;
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    100% {
        top: 0;
        left: 0;
    }
    
}

@keyframes text-animation {
    0%{
        display: none;
    }
    99%{
        display: none;
    }
    100%{
        display: inline-block;
    }
    
}
</style>