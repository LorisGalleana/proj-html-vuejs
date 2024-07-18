<script>
export default {
    name: "FooterComp",
    data() {
        return {
            logos: [
                {
                    "name": "avant garde",
                    "image": "/img/client-1-2x.png"
                },
                {
                    "name": "fast lane",
                    "image": "/img/client-9-2x.png"
                },
                {
                    "name": "ron jones",
                    "image": "/img/client-7-2x.png"
                },
                {
                    "name": "chippy's",
                    "image": "/img/client-3-2x.png"
                },
                {
                    "name": "bullseye",
                    "image": "/img/client-4-2x.png"
                },
                {
                    "name": "mighty furnitures",
                    "image": "/img/client-5-2x.png"
                }
            ]
        }
    }
}

</script>

<template>
    <div class="gray-block container-fluid">
        <div class="absolute container">
            <div class="absolute-black">
                <div class="small-text">
                    Are You Ready?
                </div>
                <div class="title">
                    Start a New Project
                </div>
                <div class="email">
                    <input type="email" name="" placeholder="Enter Your Email Address">
                    <input type="submit" value="SUBMIT">
                </div>
            </div>
            <div class="absolute-green">
                <div class="small-text">
                    What Are You Waiting for?
                </div>
                <div class="title">
                    Let's Talk About Work
                </div>
                <div class="start">
                    <a href="#" class="btn btn-color ">START NOW</a>
                </div>
            </div>
        </div>
        <div class="logos-container container">
            <img :src="logo.image" alt="" v-for="(logo,index) in logos" :key="index">
        </div>
    </div>
    <div class="white-block container-fluid"></div>
    <div class="black-block container-fluid"></div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.gray-block {
    background-color: #f6f6f6;
    height: 400px;
    position: relative;
}
.white-block {
    background-color: #fff;
    height: 400px;
}
.black-block {
    background: $black-gradient;
    height: 100px;
}
.absolute {
    display: flex;
    position: absolute;
    gap: 40px;
    top: -150px;
    left: 50%;
    transform: translateX(-50%);
}
.absolute-black {
    width: 50%;
    height: 300px;
    background: $black-gradient;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
input[type=email] {
    border-bottom: none;
    background: rgba(112, 112, 112, .35);
    border-radius: 100px;
    color: rgba(255, 255, 255, .6);
    border: none;
    padding: 18px 90px 18px 41px;
    width: 380px;
    outline: none;
}
.absolute-green {
    width: 50%;
    height: 300px;
    background: $green-gradient-right;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.small-text {
    color: rgba(255, 255, 255, .7);

}
.title {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 20px;
}
input[type=submit] {
    background: 0 0;
    color: rgba(255, 255, 255, .6);
    border: none;
    cursor: pointer;
    position: absolute;
    right: 140px;
    top: 190px;
}
.btn-color {
        background: $black-gradient ;
        color: white;
        border-radius: 30px;
        font-size: 0.7rem;
        padding: 18px 45px;
}
.logos-container {
    position: relative;
    top: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100%;
    }

}    

</style>