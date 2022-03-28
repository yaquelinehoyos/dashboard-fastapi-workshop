<template>
  <div class="user-card">
    <h5>
      Username: <b>{{ user.username }}</b>
    </h5>
    <h6>id: {{ user.id }}</h6>
    <div v-if="showInfo">
      <h6>Is active: {{ fullUserInfo.is_active }}</h6>
      <hr />
      <div class="user-card__header">
        <h6>Items:</h6>
        <b-dropdown ref="dropdown" text="Create new Item">
          <b-dropdown-form>
            <b-form-group>
              <b-form-input
                class="create-item-input"
                placeholder="title"
                v-model="newItem.title"
              ></b-form-input>
              <b-form-input
                class="create-item-input"
                placeholder="description"
                v-model="newItem.description"
              ></b-form-input>
              <div class="create-item-button">
                <b-button @click="createItem"> Create </b-button>
              </div>
            </b-form-group>
          </b-dropdown-form>
        </b-dropdown>
      </div>

      <template v-if="fullUserInfo.items && fullUserInfo.items.length != 0">
        <div
          class="user-card__item"
          v-for="item in fullUserInfo.items"
          :key="item.id"
        >
          <h6>Title: {{ item.title }}</h6>
          <h6>Description: {{ item.description }}</h6>
        </div>
      </template>

      <template v-else>
        <h6>This user doesn't have any items</h6>
      </template>
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
      createItemUser: false,
      newItem: {
        title: null,
        description: null,
      },
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
    async createItem() {
      let payload = {};
      payload.userId = this.user.id;
      payload.newItem = this.newItem;
      await this.$store.dispatch("items/createItem", payload);
      await this.showUserInfo();
      this.$refs.dropdown.hide(true);
      this.newItem.title = null;
      this.newItem.description = null;
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

  &__header {
    h6 {
      margin: 0;
    }

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

.create-item-input {
  width: 300px;
  margin: 10px 0px;
}

.create-item-button {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    @include button($primary-color, white);
  }
}
</style>
