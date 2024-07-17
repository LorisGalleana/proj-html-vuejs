<script>
export default {
    name: "AppFeedback"
}
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex ">
            <div class="green-block"></div>
            <div class="white-block"></div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid {
    background-image: $gray-gradient;
    height: 500px;
    padding: 50px 0 1000px;
    
}
.green-block {
    background: $green-gradient;
    height: 500px;
    width: 500px;
}
.white-block {
    background-color: white;
    height: 500px;
    width: 500px;
}

</style>