<script>
import AppMap from '../components/ContactsComponents/AppMap.vue';

export default {
    name: "AppContact",
    components: {
        AppMap,
    },  
}
</script>

<template>
    <div class="container-fluid text-center ">
        <h2 class="title-contacts py-4 "> Contacts </h2>
    </div>
    <AppMap />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.title-contacts {
    background-color: $bg-gray;
    color: $green-text;
    font-size: 2rem;
}

</style>