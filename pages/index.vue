<template>
  <section class="feruden-main">
    <div v-swiper:mySwiper="swiperOption" @slideChange="runOnChange">
      <div class="feruden-main__swiper-holder-line">
        <div class="feruden-main__swiper-holder-line-inner">
          <span
            class="feruden-main__swiper-holder-line-highlight"
            :style="{'background-image': selectedPallete.gradient }"
          />
        </div>
      </div>
      <div class="swiper-wrapper feruden-main__swiper-wrapper">
        <div
          class="swiper-slide feruden-main__swiper-slide"
          v-for="(post, index) in posts"
          :key="post.sys.id"
        >
          <nuxt-link :to="`/blog/${post.fields.slug}`">
            <div class="feruden-main__swiper-slide-backdrop">
              <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.title">
            </div>
            <div class="feruden-main__swiper-slide-content">
              <div>
                <div class="feruden-main__swiper-slide-content-inner-img-wrapper">
                  <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.title">
                </div>
                <div class="feruden-main__swiper-slide-inner-content">
                  <p :style="{color: selectedPallete.color }">{{ ++index }}</p>
                  <h2 :style="{color: selectedPallete.color }">{{post.fields.title}}</h2>
                  <time>{{transformDateToMomentDate(post.fields.publishDate)}}</time>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import postMixins from "~/helpers/post";
import { mapState, mapGetters } from "vuex";
import { palette } from "~/api";
import sample from "lodash/sample";
export default {
  mixins: [postMixins],
  data() {
    return {
      palette,
      selectedPallete: {},
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true
      }
    };
  },
  computed: {
    ...mapGetters("posts", ["filteredPosts"]),
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  created() {
    this.runOnChange();
  },
  methods: {
    runOnChange() {
      this.selectedPallete = sample(this.palette);
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("posts/getPosts", params);
  }
};
</script>

<style lang="scss" scoped>
.feruden-main {
  position: relative;
  @include e("swiper-slide") {
    position: relative;
    height: $contentHeight;
  }
  @include e("swiper-slide-backdrop") {
    position: relative;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.65);
    }
  }
  @include e("swiper-slide-content") {
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    > div {
      margin: 35px;
      height: 425px;
    }
  }
  @include e("swiper-slide-content-inner-img-wrapper") {
    height: 215px;
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  @include e("swiper-slide-inner-content") {
    padding: 20px 35px;
    > p,
    h2 {
      @include column-break(3);
      font-weight: bold;
    }
    > p {
      font-size: 20px;
      margin-bottom: 7px;
    }
    > h2 {
      font-size: 26px;
      margin-bottom: 30px;
    }

    > small {
      font-size: 13px;
      color: #999;
    }
    time {
      position: absolute;
      bottom: 15px;
      color: #777;
    }
  }
  @include e("swiper-holder-line") {
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    overflow: hidden;
    pointer-events: none;
    > div {
      height: 470px;
      border: 12px solid rgba(0, 0, 0, 0.3);
      margin: 35px 35px 0 35px;
    }
  }
  @include e("swiper-holder-line-highlight") {
    position: absolute;
    right: 41px;
    top: 97.6%;
    z-index: 1;
    display: block;
    width: 120px;
    height: 12px;
    background-image: linear-gradient(
      to right,
      #889ae7,
      #84a1e8,
      #82a7e7,
      #81ade7,
      #83b2e5
    );
    transform: skew(45deg, 0deg);
  }
}
</style>