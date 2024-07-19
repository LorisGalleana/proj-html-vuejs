<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';
  
    // import required modules
    import { Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation],
        };
      },
      data() {
        return {
            slides: [
                {
                    title: 'We are a Web Design ',
                    aquaTitle: 'Agency',
                    imgPath: 'Group-36-2x.png',
                    para: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.',
                    btnText: 'READ MORE',
                    socials: [
                        'Facebook',
                        'Instagram',
                        'Twitter',
                        'Youtube'
                    ]
                },
                {
                    title: 'A Group of Expert ',
                    aquaTitle: 'Planners',
                    imgPath: 'Group-35-2x.png',
                    para: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.',
                    btnText: 'READ MORE',
                    socials: [
                        'Facebook',
                        'Instagram',
                        'Twitter',
                        'Youtube'
                    ]
                },
                {
                    title: 'Focus on Your ',
                    aquaTitle: 'Business',
                    imgPath: 'Group-40-2x.png',
                    para: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.',
                    btnText: 'READ MORE',
                    socials: [
                        'Facebook',
                        'Instagram',
                        'Twitter',
                        'Youtube'
                    ]
                }
            ],
        }
      },
    };
</script>


<template>
    <swiper :navigation="true" :loop="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(slide, i) in slides" :key="i">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-4">
                        <h4 class="aqua-text fs-6 mb-4"> 17 YEARS OF EXPERIENCE </h4>
                        <h1 class="enormous mb-4"> {{ slide.title }} <span class="aqua-text"> {{ slide.aquaTitle }} </span> </h1> 

                        <!-- linea divisore -->

                        <div class="full-line mb-4 d-flex gap-2">
                            <div class="short">

                            </div>
                            <div class="long">

                            </div>
                        </div>

                        <!-- para -->

                        <p class="fw-light"> {{ slide.para }} </p>

                        <div class="btn-color margtb"> <a class="nodeco" href="#">  {{ slide.btnText }} </a> </div>

                        <!-- socials -->

                        <div class="d-flex social-container gap-3">
                            <div v-for="(item, j) in slide.socials" :key="j">
                                <a href="#" class="color-black nodeco">{{ item }}</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-8">
                        <img :src="'/img/' + slide.imgPath" alt="Jumbo image">
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>

    
</template>

  
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

// swiper arrows

// styles

.container-fluid {
    height: 120vh;
    background-color: $bg-gray;
}

.container-fluid:hover {
    cursor: pointer;
}

.row {
    height: 100%;
    width: 80%;
    margin: 0 auto;
}

.enormous {
    font-size: 4rem;
    font-weight: bolder;
}

.aqua-text {
    color: $green-text;
}

.nodeco {
    text-decoration: none;
}

.btn-color {
    background: #202020 ;
    border-radius: 24px;
    font-size: 0.7rem;
    padding: 12px 30px;
    a {
        color: white;
    }
    &:hover {
        box-shadow: 10px 10px 50px 0 rgba(0, 217, 166, .8);
        background-color: #00d9a6;
    }
}

.margtb {
    cursor: pointer;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 100px;
}

.col-8 img {
    width: 100%;
}
</style>