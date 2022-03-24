<template>
  <div class="user-card">
    <h5>
      Username: <b>{{ user.username }}</b>
    </h5>
    <h6>id: {{ user.id }}</h6>
    <div v-if="showInfo">
      <h6>Is active: {{ fullUserInfo.is_active }}</h6>
      <hr />
      <div v-if="fullUserInfo.items.length != 0">
        <h6>Items:</h6>
        <div
          class="user-card__item"
          v-for="item in fullUserInfo.items"
          :key="item.id"
        >
          <h6>Title: {{ item.title }}</h6>
          <h6>Description: {{ item.description }}</h6>
        </div>
      </div>
      <div v-else>
        <h6>This user does not have any items</h6>
      </div>
    </div>
    <div class="user-card__options">
      <!-- <button class="user-card__options--delete">Delete</button>
            <button class="user-card__options--edit">Edit</button> -->
      <button
        v-if="!showInfo"
        class="user-card__options--info"
        @click="showUserInfo()"
      >
        Show Full Info
      </button>
      <button
        v-else
        class="user-card__options--close-info"
        @click="showInfo = false"
      >
        Close Full Info
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showInfo: false,
      fullUserInfo: null,
    };
  },
  methods: {
    async showUserInfo() {
      this.fullUserInfo = await this.$store.dispatch(
        "users/getUserInfo",
        this.user.id
      );
      this.showInfo = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  @include card;

  &__item {
    width: 100%;
    border: 0.5px solid #d1d1d1;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  &__options {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    &--delete {
      @include button(#d82148, white);
      margin-right: 10px;
    }

    &--edit {
      @include button($primary-color, white);
    }

    &--info {
      border: none;
      outline: none;
      background-color: transparent;
      color: $primary-color;

      &:hover {
        text-decoration: underline;
      }
    }

    &--close-info {
      border: none;
      outline: none;
      background-color: transparent;
      color: #d82148;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
