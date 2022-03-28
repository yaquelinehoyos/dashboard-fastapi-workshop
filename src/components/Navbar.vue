<template>
  <div class="navbar">
    <h4 class="navbar__title">Dashboard <b>FastAPI</b> Workshop</h4>
    <b-dropdown id="dropdown-form" dropleft ref="dropdown" text="Configuration">
      <b-dropdown-form>
        <b-form-group>
          <b-form-input
            class="navbar__input"
            id="tokenInput"
            placeholder="token"
            v-model="token"
            v-on:keyup.enter="setToken"
          ></b-form-input>
          <b-button class="navbar__button-set-token" @click="setToken">
            Set token
          </b-button>
        </b-form-group>

        <b-dropdown-divider></b-dropdown-divider>

        <b-form-group>
          <b-form-input
            class="navbar__input"
            id="apiUrlInput"
            placeholder="http://127.0.0.1:8000/"
            v-model="apiUrl"
            v-on:keyup.enter="setApiUrl"
          ></b-form-input>
          <b-button class="navbar__button-set-token" @click="setApiUrl">
            Set API URL
          </b-button>
        </b-form-group>
      </b-dropdown-form>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      token: null,
      apiUrl: null,
    };
  },
  created() {
    this.token = localStorage.getItem("workshop-fastapi");
    this.apiUrl = localStorage.getItem("workshop-fastapi-api-url");
  },
  methods: {
    setToken() {
      if (this.token != null && this.token != "") {
        localStorage.setItem("workshop-fastapi", this.token);
      }
      location.reload();
    },
    setApiUrl() {
      if (this.apiUrl != null && this.apiUrl != "") {
        localStorage.setItem("workshop-fastapi-api-url", this.apiUrl);
      }
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $secondary-color;
  padding: 20px;

  &__title {
    color: $primary-color;
  }

  &__input {
    width: 250px;
  }

  &__button-set-token {
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
