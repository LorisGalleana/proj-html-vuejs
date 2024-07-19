<script>
export default {
    name: "AppMore"
}
</script>

<template>
    <div class="container-fluid d-flex bg-color py-5">
        <div class="container h-100">
            <div class="row pt-100">
                <div class="col-8 Mycontainer">
                    <div class="containerGreen">
                        <img class="imgback" src="/public/img/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                    </div>
                     <img class="imgfront" src="/public/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">          
                </div>
                <div class="col-4">
                    <h2 class="fs-1 lh-base">Learn more about our  <span class="text-color">mission </span> </h2>
                    <!-- linea divisore -->
                    <div class="full-line mb-5 mt-5 d-flex gap-2">
                            <div class="short">

                            </div>
                            <div class="long">

                            </div>
                        </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
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
@use "../../styles/partials/variables" as *;
    .bg-color {
        background: $bg-gray ;
    }
    .text-color {
        color: $green-text;
    }
    .Mycontainer{
        position: relative;
        img{
            position: absolute;
        }
    }
    .imgfront{
        width:65% ;
        margin-left: 60px;
        top:0;
        border-radius: 10px;

    }
    .imgback{
        bottom: 0;
        left: 0;
        width:65% ;
        border-radius: 10px;

    }
    .container-fluid{
        height: 800px;
    }
  
  .containerGreen{
    width: 100%;
  }
  .containerGreen::after {
    content: "";
    top: -103px;
    left: 0;
    position: absolute;
    background: $green-gradient;
    width: 65%;
    height: 127%;
    opacity: .8;
    border-radius: 10px;

    
}

  .pt-100 {
    padding-top: 130px;
  }
</style>