<template>
  <section class="main">
    <section class="main__left-side-holder">
      <section class="main__featured-article">
        <header>featured</header>
        <article>
          <div class="main__featured-article-img-holder">
            <nuxt-link :to="`/blog/${featuredPost.slug}`">
              <img :src="featuredPost.image" :alt="featuredPost.title">
            </nuxt-link>
          </div>
          <div class="main__featured-article-content-holder">
            <nuxt-link :to="`/blog/${featuredPost.slug}`">
              <h1>{{ featuredPost.title }}</h1>
              <p>{{ featuredPost.description }}</p>
            </nuxt-link>
          </div>
        </article>
      </section>
      <section class="main__latest-section">
        <header>
          <h2>latest</h2>
        </header>
        <div>
          <article v-for="post in restPosts" :key="post.title" class="main__latest-article">
            <div>
              <h3>
                <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
              </h3>
              <p>
                <nuxt-link :to="`/blog/${post.slug}`">{{ post.description }}</nuxt-link>
              </p>
            </div>
            <span>
              <nuxt-link :to="`/blog/${post.slug}`">
                <img :src="post.image" :alt="post.title">
              </nuxt-link>
            </span>
          </article>
        </div>
      </section>
    </section>
    <section class="main__right-side-holder"></section>
  </section>
</template>
<script>
import MobileMain from "@/components/pages/mobile/Main";

export default {
  name: "Main",
  extends: MobileMain,
  computed: {
    featuredPost() {
      return this.posts.slice(0, 1)[0];
    },
    restPosts() {
      return this.posts.slice(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  .linesEllipsis {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 65px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  section {
    > header {
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.76);
      font-weight: bold;
      font-size: 14px;

      h2 {
        margin: 0;
        padding-bottom: 8px;
        color: rgba(0, 0, 0, 0.76);
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
  @include e("latest-section") {
    margin-top: 40px;
    > div {
      padding: 12px 0;
    }
  }
  @include e("latest-article") {
    @include clearfix;
    padding: 15px 0;
    > div {
      float: left;
      width: 80%;
      padding-right: 15px;
      h3 {
        font-size: 18px;
        font-weight: bold;
        color: #4a4a4a;
        @extend .linesEllipsis;
      }
      p {
        margin-top: 5px;
        color: rgba(0, 0, 0, 0.54);
        @extend .linesEllipsis;
      }
    }

    > span {
      float: left;
      width: 20%;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @include e("left-side-holder") {
    max-width: 680px;
  }
  @include e("right-side-holder") {
    max-width: 328px;
  }
  @include e("featured-article-img-holder") {
    margin-top: 14px;
    a {
      display: block;
      height: 382px;
      img {
        object-fit: cover;
      }
    }
  }
  @include e("featured-article-content-holder") {
    h1 {
      font-weight: 600;
      margin: 0;
    }
    p {
      margin-top: 4px;
      color: rgba(0, 0, 0, 0.54);
    }
  }
}
</style>

