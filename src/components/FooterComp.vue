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
            ],
            quickLinks: [
                {
                    "name": "Careers",
                    "address": "#"
                },
                {
                    "name": "News",
                    "address": "#"
                },
                {
                    "name": "Terms of use",
                    "address": "#"
                },
                {
                    "name": "Privacy Projects",
                    "address": "#"
                },
                {
                    "name": "About",
                    "address": "#"
                },
                {
                    "name": "Contact",
                    "address": "#"
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
                <div class="title-absolute">
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
                <div class="title-absolute">
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
    <div class="white-block container-fluid">
        <div class="container d-flex">
            <div class="description">
                <img src="/public/img/cropped-Group-39-2x.png" alt="">
                <div class="description-text">While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.</div>
            </div>
            <div class="quick-links">
                <div class="footer-title">QUICK LINKS</div>
                <!--inizio linea divisore -->
                <div class="full-line mb-4 d-flex gap-2">
                        <div class="short">
                        </div>
                        <div class="long">

                        </div>
                    </div>
                <!-- fine linea divisore -->
                 <ul>
                    <li v-for="(quick,index) in quickLinks" :key="index">
                        <a :href="quick.address">{{ quick.name }}</a>
                    </li>
                 </ul>
            </div>
            <div class="contacts">
                <div class="footer-title">CONTACT</div>
                <!--inizio linea divisore -->
                <div class="full-line mb-4 d-flex gap-2">
                    <div class="short">
                    </div>
                    <div class="long">

                    </div>
                </div>
                <!-- fine linea divisore -->
                 <div class="address">
                    Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051
                 </div>
                 <div class="email">
                    info@yourdomain.com
                 </div>
                 <div class="phone-number">
                    +99 (0) 101 0000 888
                 </div>
            </div>
            <div class="location-map">
                <div class="footer-title">LOCATION ON MAP</div>
                <!--inizio linea divisore -->
                <div class="full-line mb-4 d-flex gap-2">
                    <div class="short">
                    </div>
                    <div class="long">

                    </div>
                </div>
                <!-- fine linea divisore -->
                 <img class="map" src="/public/img/map.png" alt="">

            </div>
        </div>
    </div>
    <div class="black-block container-fluid"></div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.gray-block {
    background-color: #f6f6f6;
    height: 400px;
    position: relative;
    margin-top: 25%;
}
.white-block {
    background-color: #fff;
    height: 400px;
    margin-top: 8%;
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
.title-absolute {
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
ul {
    padding: 0;
    margin-top: 10%;
    line-height: 1.7;
    li {
    list-style: none;
        a {
            text-decoration: none;
            color: black;
        }
        
    }
}
.description, .quick-links, .contacts, .location-map {
    width: 25%;
}
.footer-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 4%;
}
.location-map {

    img {
        width: 100%;
    }
} 
.description-text {
    margin-top: 8%;
}   
.address {
    margin: 10% 0 5%;
}
.email {
    margin-bottom: 5%;
}
.map {
    margin-top: 5%;
}

</style>