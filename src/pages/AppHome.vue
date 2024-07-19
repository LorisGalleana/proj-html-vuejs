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
      showButton.value = window.scrollY > 500; // Mostra il pulsante dopo 500px di scroll
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
    <a href="#" class="position-fixed scroll-button" v-if="showButton">&uparrow;</a>
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
</style>