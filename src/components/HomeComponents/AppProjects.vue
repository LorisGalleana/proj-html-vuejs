<script>
export default {
    name: "AppProjects",
    data(){
        return{
            projects:[
                {
                    project_img:'public/img/ina-soulis-227104-unsplash-1024x1024.jpg',
                    projects_title:'The Basket of Flowers',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/sunisa-misa-531163-unsplash-1024x1024.jpg',
                    projects_title:'A Famous Ferris Wheel',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/355H-1024x1024.jpg',
                    projects_title:'Complementary Colors',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/photo-1448932252197-d19750584e56-1024x1024.jpg',
                    projects_title:'Buisness Prestige',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/business-competition-PB366D8-1024x1024.jpg',
                    projects_title:'Colorful Origami Boats',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
                    projects_title:'Modern Couch',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/aa9a4539-PQGJ7HU-1024x1024.jpg',
                    projects_title:'Hot Air Balloons',
                    projects_categories: 'MARKETING',
                },
                {
                    project_img:'public/img/cody-davis-253928-unsplash-1024x1024.jpg',
                    projects_title:'Make Difference',
                    projects_categories: 'MARKETING',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container-fluid my-5">
        <div class="container position-relative">
            <div class="vertical-text position-absolute">17 years of experience helping people for best solutions</div>
            <div class="row align-items-end">
                <div class="col-6">
                    <!-- Interlinea -->
                    <div class="full-line mt-4 mb-5 d-flex gap-2">
                        <div class="short">

                        </div>
                        <div class="long">

                        </div>
                    </div>
                    <h2 class="fs-1 lh-base">
                        Our recent <span class="green-text">web designs</span> &
                        some examples of
                        past <span class="green-text">projects</span>
                    </h2>
                    <!-- Interlinea -->
                    <div class="full-line mt-4 mb-5 d-flex gap-2">
                            <div class="short">

                            </div>
                            <div class="long">

                            </div>
                        </div>
                </div>
                <div class="col-6">
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    </p>
                </div>
            </div>
        <!-- Cards -->
         <div class="row">
            <div class="col-3 g-1" v-for="(card,i) in projects" :key="i">
                <div class="my-card">
                    <div class="info">
                        <h5>{{ card.projects_title }}</h5>
                        <h6>{{ card.projects_categories }}</h6>
                    </div>
                    <img class="card-img" :src="card.project_img" alt="card">
                </div>
                
            </div>
         </div>
         <!-- Button -->
         <div class="row">
            <div class="col-12 text-center mt-5">
                <a href="#" class="btn-color">
                    <span class="overlay overlay-black"></span>
                    <span class="my-btn-text position-absolute">READ&nbsp;MORE</span>
                </a>
            </div>
         </div>
    </div>
    </div>
    

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


.green-text{
    color: $green-text;
}

.my-card{
    max-width: 100%;
    position: relative;
    &:hover .info{
        transition: all 0.5s ease-in-out;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: end;
        padding-left: 10%;
        padding-bottom: 10px;
        cursor: pointer;
        z-index: 9;
        opacity: 0.8;
        border-radius: 5px;
    }
}

.my-card:hover{
    transition: all 0.5s ease-in-out;
    transform: scale(1.2);
    z-index: 8;
}

.card-img{
        max-width: 100%;
        border-radius: 5px;
    }

.info{
        position: absolute;
        color: white;
        background: $green-gradient;
        opacity: 0;
}

h5,h6{
    animation: text-animation 1s ease-in-out;
}

/* Vertical text */
.vertical-text{
    right: -20%;
    top: 50%;
    rotate: 270deg;
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