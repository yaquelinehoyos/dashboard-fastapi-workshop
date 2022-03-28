<template>
  <div class="item-card">
    <h5><b>Title: </b>{{ item.title }}</h5>
    <hr />
    <h6><b>Description: </b>{{ item.description }}</h6>
    <h6><b>id: </b>{{ item.id }}</h6>
    <h6><b>User id: </b>{{ item.user_id }}</h6>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-card {
  @include card;
}
</style>
