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

    const handleScroll = () => {
      showButton.value = window.scrollY > 300;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showButton
    };
  }
}
</script>

<template>
    <transition name="slide-up"><!-- Componente di vue -->
        <a href="#" class="position-fixed scroll-button" v-if="showButton">&uparrow;</a>
    </transition>
    <AppJumbo />
    <AppFeatures />
    <AppMore />
    <AppProjects />
    <AppFeedback />
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

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>