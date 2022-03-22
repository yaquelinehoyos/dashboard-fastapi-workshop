<template>
  <div class="users">
    <h1>Users view</h1>
    <Card v-for="user in users" :key="user.id" :user="user"/>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Users",
  components: {
    Card
  },
  data() {
    return {
      users: null
    };
  },
  async created() {
    this.users = await this.$store.dispatch("users/getUsers");
  },
};
</script>

<style lang="scss" scoped>
.users {
  margin-top: $margin-top-view;
}
</style>
