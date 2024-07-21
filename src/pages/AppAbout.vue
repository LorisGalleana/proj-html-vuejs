<script>
import AppAgency from '../components/AboutComponents/AppAgency.vue'
import AppVision from '../components/AboutComponents/AppVision.vue'
import AppTeam from '../components/AboutComponents/AppTeam.vue'
import AppFaq from '../components/AboutComponents/AppFaq.vue'

export default {
    name: "AppAbout",
    components: {
        AppAgency,
        AppVision,
        AppTeam,
        AppFaq
    }
}
</script>

<template>
    <section >
        <div class="container-fluid text-center extra-margin ">
            <h2 class="title py-3 ">About Page</h2>
        </div>
        <AppAgency />
        <AppVision />
        <AppTeam />
        <AppFaq />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.extra-margin {
    padding-top: 5%;
}
</style>