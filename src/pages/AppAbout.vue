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
    <section>
        <AppAgency />
        <AppVision />
        <AppTeam />
        <AppFaq />
    </section>
</template>

<style lang="scss" scoped>

</style>