<template>
  <div class="card-holder">
    <div class="card-holder__item-holder" v-for="(item, index) in items" :key="item.id">
      <Card
        :title="item.title"
        :rank="++index"
        :image="item.image"
        :description="transformDateToMomentDate(item.publishDate)"
        :tags="item.tags"
      />
    </div>
  </div>
</template>
<script>
import postMixins from "~/helpers/post";
import Card from "./Card";
export default {
  name: "CardHolder",
  mixins: [postMixins],
  components: {
    Card
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card-holder {
  @include e("item-holder") {
    background-color: #fff;
    padding: 12px;
    margin-bottom: 10px;
    border: none;
  }
}
</style>


