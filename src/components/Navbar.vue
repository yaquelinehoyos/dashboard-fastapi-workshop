<template>
    <div class="navbar">
        <h4 class="navbar__title">@tiangolo</h4>
        <section>
            <input 
                class="navbar__input-token"
                type="text" 
                placeholder="token" 
                v-model="token" 
                v-on:keyup.enter="setToken"
            />
            <button id="tokenInput" class="navbar__button-set-token" @click="setToken">Set token</button>
        </section>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            token: null
        }
    },
    created() {
        this.token = localStorage.getItem("workshop-fastapi");
    },
    methods: {
        setToken() {
            if(this.token != null && this.token != "") {
                localStorage.setItem("workshop-fastapi", this.token);
            }
            document.getElementById("tokenInput").focus();
            location.reload();
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin default-components {
    border-radius: 5px;
    outline: none;
    border: none;
}

.navbar {
    width: 100%;
    background-color: $secondary-color;
    padding: 20px;

    &__title {
        color: $primary-color;
    }

    &__input-token {
        @include default-components;
        padding: 5px;
        margin-right: 10px;
    }

    &__button-set-token {
        @include default-components;
        background-color: $primary-color;
        padding: 5px 10px;
        color: $secondary-color;

        &:hover {
            background: rgba($primary-color, 0.7)
        }
    }
}
</style>