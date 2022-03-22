<template>
    <div class="subnavbar">
        <router-link to="/"><b>USERS</b></router-link> 
        <router-link to="/items"><b>ITEMS</b></router-link> 
    </div>
</template>

<script>
export default {
    name: "Subnavbar"
}
</script>

<style lang="scss" scoped>
.subnavbar {
    background-color: $secondary-color;
    color: white;
    padding: 0px 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: white;
        padding: 10px;
    }
}

a.router-link-exact-active {
    border-bottom: 3.5px solid $primary-color;
}
</style>