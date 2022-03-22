<template>
    <div class="user-card">
        <h1>{{ user.username }}</h1>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.user-card {
    padding: 10px;
}
</style>