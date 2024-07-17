<script>
import AppFeatures from '../components/HomeComponents/AppFeatures.vue';
import AppJumbo from '../components/HomeComponents/AppJumbo.vue';
export default {
    name: "AppHome",
    components: {
        AppJumbo,
        AppFeatures,
    }
}
</script>

<template>
   <AppJumbo />
   <AppFeatures />

</template>

<style scoped>

</style>