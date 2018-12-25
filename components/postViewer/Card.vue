<template>
  <div :class="['card', mode]">
    <div class="card__image-holder">
      <span v-if="allowRank">{{ rank }}</span>
      <img :src="image" :alt="title">
    </div>
    <div class="card__content-holder">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card__tag-holder" v-if="allowTag">
        <Tag v-for="tag in tags" :name="tag" :key="tag"/>
      </div>
    </div>
  </div>
</template>
<script>
import Tag from "~/components/Tag";
export default {
  name: "Card",
  components: {
    Tag
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    description: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    rank: {
      type: Number,
      default: 0
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
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  color: #000;
}
.description {
  margin-top: 3px;
  color: #666;
  font-weight: 500;
}
.card {
  @include clearfix;
  box-shadow: none;
  &.horizontal {
    .card {
      @include e("image-holder") {
        position: relative;
        float: left;
        width: 90px;
        height: 75px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      @include e("content-holder") {
        padding-left: 100px;
        h2 {
          @extend .title;
          font-size: 16px;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }
        p {
          @extend .description;
        }
      }
    }
  }
  &.vertical {
    .card {
      @include e("image-holder") {
        position: relative;
        height: 160px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 35px;
          height: 35px;
          color: #fff;
          background-color: #000;
          opacity: 0.65;
          text-align: center;
          line-height: 35px;
          font-weight: 600;
        }
      }
      @include e("content-holder") {
        margin-top: 10px;
        h2 {
          @extend .title;
        }
        p {
          @extend .description;
        }
      }
      @include e("tag-holder") {
        margin-top: 10px;
        .feruden-tag {
          font-size: 11px;
          margin-right: 7px;
        }
      }
    }
  }
}
</style>


