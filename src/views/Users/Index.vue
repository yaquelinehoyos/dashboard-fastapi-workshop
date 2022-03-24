<template>
  <div class="users">
    <div class="users__add-user">
      <button class="add-user-button">Add new user</button>
    </div>
    <div class="users__container" v-if="users.length != 0">
      <User v-for="user in users" :key="user.id" :user="user"/>
    </div>
    <div v-else>
      <h1>There are no Users yet! :(</h1>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Users",
  components: {
    User
  },
  data() {
    return {
      users: []
    };
  },
  async created() {
    this.users = await this.$store.dispatch("users/getUsers");
  },
};
</script>

<style lang="scss" scoped>
.users {
  margin: $margin-view;

  &__add-user {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
  }

  &__container {
    @include grid-two-columns;
  }
}

.add-user-button {
  @include button($primary-color, white);
}
</style>
