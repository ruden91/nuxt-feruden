<template>
  <div class="card-holder">
    <div class="card-holder__item-holder" v-for="(item, index) in items" :key="item.id">
      <nuxt-link :to="makeNuxtLink(item.slug)">
        <Card
          :title="item.title"
          :rank="++index"
          :image="item.image"
          :description="transformDateToMomentDate(item.publishDate)"
          :tags="item.tags"
          :allowTag="allowTag"
          :allowRank="allowRank"
          :mode="mode"
        />
      </nuxt-link>
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
    },
    allowRank: {
      type: Boolean,
      default: true
    },
    allowTag: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: "vertical"
    }
  },
  methods: {
    makeNuxtLink(slug) {
      return `/blog/${slug}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.card-holder {
  padding-top: 10px;
  @include e("item-holder") {
    background-color: #fff;
    padding: 12px;
    margin-bottom: 10px;
    border: none;
  }
}
</style>


