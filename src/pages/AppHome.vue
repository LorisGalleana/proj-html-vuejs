<script>
import AppJumbo from '../components/HomeComponents/AppJumbo.vue'
import AppFeatures from '../components/HomeComponents/AppFeatures.vue'
/* import AppMore from '../components/HomeComponents/AppMore.vue' */
/* import AppProjects from '../components/HomeComponents/AppProjects.vue' */
/* import AppFeedback from '../components/HomeComponents/AppFeedback.vue' */
/* import AppPricing from '../components/HomeComponents/AppPricing.vue' */
import AppCustomer from '../components/HomeComponents/AppCustomer.vue'
/* import AppNews from '../components/HomeComponents/AppNews.vue' */

export default {
    name: "AppHome",
    components: {
        AppJumbo,
        AppFeatures,
        /* AppMore, */
        /* AppProjects, */
        /* AppFeedback, */
        /* AppPricing, */
        AppCustomer,
        /* AppNews */
    }
}
</script>

<template>
   <AppJumbo />
    <AppFeatures />
        <!-- <AppMore /> -->
        <!-- <AppProjects /> -->
    <!-- <AppFeedback /> -->
        <!-- <AppPricing /> -->
    <AppCustomer />
        <!-- <AppNews /> -->
</template>

<style scoped>

</style>