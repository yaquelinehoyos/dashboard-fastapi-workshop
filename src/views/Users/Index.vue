<template>
  <div class="users">
    <div class="users__add-user">
      <b-dropdown dropright ref="dropdown" text="Create new User">
        <b-dropdown-form>
          <b-form-group>
            <b-form-input
              class="users__username-input"
              placeholder="username"
              v-model="username"
              v-on:keyup.enter="createUser"
            ></b-form-input>
            <b-button class="users__create-user-button" @click="createUser">
              Create
            </b-button>
          </b-form-group>
        </b-dropdown-form>
      </b-dropdown>
    </div>
    <div class="users__container" v-if="users.length != 0">
      <User v-for="user in users" :key="user.id" :user="user" />
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
    User,
  },
  data() {
    return {
      users: [],
      username: null,
    };
  },
  async created() {
    let response = await this.$store.dispatch("users/getUsers");
    if(response.status == 200) {
      this.users =  response.data;
    }
  },
  methods: {
    async createUser() {
      let payload = {};
      payload.username = this.username;
      await this.$store.dispatch("users/createUser", payload);
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.users {
  margin: $margin-view;

  &__add-user {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
  }

  &__container {
    @include grid-two-columns;
  }

  &__username-input {
    width: 200px;
  }

  &__create-user-button {
    margin-top: 10px;
    @include button($primary-color, white);
  }
}

::v-deep {
  .btn-secondary {
    @include button($primary-color, white);
  }
}
</style>
