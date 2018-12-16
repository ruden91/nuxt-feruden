<template>
  <section class="feruden-main">
    <div v-swiper:mySwiper="swiperOption">
      <!-- <div class="feruden-main__swiper-holder-line">
        <div>
          <span class="feruden-main__swiper-holder-line-highlight"/>
        </div>
      </div>-->
      <div class="swiper-wrapper feruden-main__swiper-wrapper">
        <div
          class="swiper-slide feruden-main__swiper-slide"
          v-for="(post, index) in posts"
          :key="post.sys.id"
        >
          <nuxt-link :to="`/blog/${post.fields.slug}`">
            <div class="feruden-main__swiper-slide-backdrop">
              <img :src="post.fields.heroImage.fields.file.url">
            </div>
            <div class="feruden-main__swiper-slide-content">
              <div>
                <div class="feruden-main__swiper-slide-content-inner-img-wrapper">
                  <img :src="post.fields.heroImage.fields.file.url">
                </div>
                <div class="feruden-main__swiper-slide-inner-content">
                  <p>{{ ++index }}</p>
                  <h2>{{post.fields.title}}</h2>
                  <time>{{post.fields.publishDate}}</time>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <!-- <section>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(post, index) in posts" :key="index">
          <div class="main-card">
            <nuxt-link :to="`/blog/${post.fields.slug}`">
            <div class="card-image">
              <figure class="image is-5by3">
                <img :src="post.fields.heroImage.fields.file.url" />
              </figure>
              <div class="main-card__content">
                <p class="main-card__title">{{ post.fields.title }}</p>
                <span class="tag">{{ post.fields.categories[0] }}</span>
                <p class="main-card__description">{{ post.fields.description}}</p>
                <time>{{ transformDateToMomentDate(post.fields.publishDate)}}</time>
              </div>
            </div>
            </nuxt-link>
          </div>        
        </div>
      </div>
    </div>        
  </section>-->
</template>
  
<script>
import moment from "moment";
import "moment/locale/ko";
import client from "~/plugins/contentful";
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
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
  }
  @include e("swiper-holder-line") {
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    overflow: hidden;
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