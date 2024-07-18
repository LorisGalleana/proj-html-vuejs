<script>
export default {
    name: "HeaderComp",
    data() {
        return {
            routePage: [
                {
                    "name": "home",
                    "available": true
                },
                {
                    "name": "about",
                    "available": true
                },
                {
                    "name": "services",
                    "available": false
                },
                {
                    "name": "showcase",
                    "available": false
                },
                {
                    "name": "blog",
                    "available": false
                },
                {
                    "name": "contact",
                    "available": true
                }
            ],
            currentIndex: 0,
        }
    },
    methods: {
            toggleNav(index) {
            this.currentIndex = index;
        }
    }
}

</script>

<template>
    <div class="position-fixed sticky-top w-100 z-3">
        <div class="container-fluid black">
        <div class="container upper-container">
            <div class="contact">
                <i class="fa-solid fa-phone"></i>
                <div class="phone-number">
                    <div>(001)</div> 
                    <div>88451234</div>
                    <div>88455438</div>
                </div>
            </div>
            <div class="social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest-p"></i>
            </div>
        </div>
    </div>
    <div class="container-fluid white">
        <div class="container d-flex bottom-container">
            <div class="logo">
                <img src="/public/img/cropped-Group-39-2x.png" alt="">
            </div>
            <nav>
                <ul class="d-flex router-list">
                    <li v-for="(route,index) in routePage" :key="index" @click="toggleNav(index)">
                        <router-link :to="{ name: route.available ? route.name : 'NotFound' }" class="nav-link" :class="currentIndex === index ? 'active' : '' ">
                            {{route.name.toUpperCase()}}
                        </router-link>
                    </li>
                    
                </ul>
            </nav>
            <div class="purchase-search">
                <a href="#" class="btn btn-color ">PURCHASE</a>
                <button class="search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </div>
    </div>
    
    
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
    .btn-color {
        background: $green-gradient ;
        color: white;
        border-radius: 24px;
        font-size: 0.7rem;
        padding: 12px 30px;
    }
    .router-list {
        list-style: none;
        gap: 30px;
        li {
            a {
                font-size: 0.875rem;
                
                &:hover {
                    color: #aaa;
                }
            }
        }
    }
    .white {
        height: 100px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    }
    .bottom-container{
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .search {
        background-color: transparent;
        border: none;
        color: $green-text;
        margin-left: 30px;
    }
    .logo {
        transform: scale(0.8);
    }
    .black {
        background-color: #3d3d3d;
        height: 40px;
    }
    .upper-container {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    .contact {
        display: flex;
        align-items: center;
    }
    .social {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .phone-number {
        display: flex;
        gap: 10px;
        margin-left: 10px;
    }
    .active {
        font-weight: 600;
    }
</style>