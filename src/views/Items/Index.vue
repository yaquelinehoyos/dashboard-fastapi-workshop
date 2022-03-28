<template>
  <div class="items" v-if="showData">
    <div class="items__container" v-if="items.length != 0">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <h1>There are no Items yet! :(</h1>
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Items",
  components: {
    Item,
  },
  data() {
    return {
      showData: false,
      items: [],
    };
  },
  async created() {
    let response = await this.$store.dispatch("items/getItems");
    if (response.status == 200) {
      this.items = response.data;
    }
    this.showData = true;
  },
};
</script>

<style lang="scss" scoped>
.items {
  margin: $margin-view;

  &__container {
    @include grid-two-columns;
  }
}
</style>
