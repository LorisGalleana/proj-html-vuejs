<script>
import AppForm from '../components/ContactsComponents/AppForm.vue';
import AppMap from '../components/ContactsComponents/AppMap.vue';

export default {
    name: "AppContact",
    components: {
        AppMap,
        AppForm,
    },  
}
</script>

<template>
    <div class="container-fluid text-center ">
        <h2 class="title-contacts"> Contact Page </h2>
    </div>
    <AppMap />
    <AppForm />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.title-contacts {
    background-color: $bg-gray;
    color: $green-text;
    font-size: 2.5rem;
    padding: 40px 0;
    margin-bottom: 50px;
    margin-top: 150px;
}

</style>