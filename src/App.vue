<template>
  <div id="app">
    <Navbar />
    <div class="divider"></div>
    <Subnavbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Subnavbar from "@/components/Subnavbar";

export default {
  name: "App",
  components: {
    Navbar,
    Subnavbar
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary-color;
}

.divider {
  width: 100%;
  height: 0.5px;
}
</style>
