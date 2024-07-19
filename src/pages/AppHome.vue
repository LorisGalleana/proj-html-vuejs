<script>
import AppJumbo from '../components/HomeComponents/AppJumbo.vue'
import AppFeatures from '../components/HomeComponents/AppFeatures.vue'
import AppMore from '../components/HomeComponents/AppMore.vue'
import AppProjects from '../components/HomeComponents/AppProjects.vue'
import AppFeedback from '../components/HomeComponents/AppFeedback.vue'
import AppPricing from '../components/HomeComponents/AppPricing.vue'
import AppCustomer from '../components/HomeComponents/AppCustomer.vue'
import AppNews from '../components/HomeComponents/AppNews.vue' 
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: "AppHome",
    components: {
        AppJumbo,
        AppFeatures,
        AppMore,
        AppProjects,
        AppFeedback,
        AppPricing,
        AppCustomer,
        AppNews,
    },
    setup() {
    const showButton = ref(false);
    const showFeatures = ref(false);
    const showMore = ref(false);
    const showProjects = ref(false);
    const showFeedback = ref(false);


    const handleScroll = () => {
        showFeatures.value = window.scrollY > 250;
        showButton.value = window.scrollY > 300;
        showMore.value = window.scrollY > 1000;
        showProjects.value = window.scrollY > 1700;
        showFeedback.value = window.scrollY > 2400;

      
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showButton,
      showFeatures,
      showMore,
      showProjects,
      showFeedback,
    };
  }
}
</script>

<template>
    <transition name="slide-up"><!-- Componente di vue -->
        <a href="#" class="position-fixed scroll-button" v-if="showButton">&uparrow;</a>
    </transition>
    <AppJumbo />
    <transition name="slide-right">
        <AppFeatures v-if="showFeatures" />
    </transition>
    <transition name="slide-left">
        <AppMore v-if="showMore" />
    </transition>
    <transition name="slide-right">
        <AppProjects v-if="showProjects" />
    </transition>
    <transition name="slide-left">
        <AppFeedback v-if="showFeedback" />
    </transition>
    <AppPricing />
    <AppCustomer />
    <AppNews /> 
</template>

<style scoped>
a{
    text-align: center;
    bottom: 40px;
    right: 40px;
    z-index: 3000;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
    padding: 4px 12px;
    background-color: white;
}
/* Slide up */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 1s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
/* Slide right */
.slide-right-enter-active{
  transition: all 2s ease;
}
.slide-right-enter-from{
  transform: translateX(100%);
  opacity: 0;
}

/* Slide left */
.slide-left-enter-active{
  transition: all 2s ease;
}
.slide-left-enter-from{
  transform: translateX(-100%);
  opacity: 0;
}
</style>