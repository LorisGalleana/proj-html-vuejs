<script>
export default {
    name: "AppCustomer"
}
</script>

<template>
    <div class="container-fluid my-3">
        <div class="container text-white font-size align-items-center justify-content-center d-flex text-center  lh-lg ">
            <div>
                <div class="quote text-color">“</div>
                <div class="fst-italic">When it comes to barbequing, there are two main schools of </div>
                <div class="fst-italic">thought for the techniques that you can use. Freshly scrambled</div>
                <div class="fst-italic">eggs with applewood smoked bacon - are amazing!</div>
                <div><img src="/public/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt=""></div>
                <div class="text-color client-name ">LISSA DURBIN</div>
                <div class="client">Client</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Rufina:wght@400;700&display=swap');
.container-fluid {
    height: 97vh;
    background-image: url(img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
    background-size: cover;
    position: relative;
    background-position: center left;
}
.container-fluid::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(258deg, #0c0c0c 0%, #474747 100%);
    opacity: .88;
}
.container {
    height: 100%;
    position: relative;
}
.text-color {
    color: $green-text;
}
.font-size {
    font-size: 1.7rem;
}


img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-top: 10%;
    margin-bottom: 3%;
}   
.client-name {
    font-size: 1.5rem;
    font-weight: 500;
} 
.client {
    font-size: 1.15rem;
    font-weight: 600;
}
.quote {
    font-size: 10rem;
    font-family: rufina, Sans-serif;
    line-height: 120px;
}

</style>