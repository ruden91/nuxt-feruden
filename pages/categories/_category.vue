<template>
  <section class="feruden-category">
    <header>
      <h2>{{ category }}</h2>
    </header>
    <div>
      <article class="feruden-category__main-article">
        <nuxt-link :to="`/blog/${items[0].slug}`">
          <div>
            <img :src="items[0].image" :alt="items[0].title">
            <h3>{{ items[0].title }}</h3>
            <p>{{ items[0].description }}</p>
          </div>
        </nuxt-link>
      </article>
    </div>
    <div class="feruden-category__article-list">
      <article class="feruden-category__article" v-for="item in items.slice(1)" :key="item.id">
        <nuxt-link :to="`/blog/${item.slug}`">
          <img :src="item.image" :alt="item.title">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </nuxt-link>
      </article>
    </div>
  </section>
</template>
  
<script>
import client from "~/plugins/contentful";
import { refineContentfulPost } from "~/utils/helpers";
// import { setBlogSEO } from "~/helpers/seo";
// import meta from "~/static/meta.json";
export default {
  async asyncData({ params }) {
    const category = params.category;
    let items = [];
    const res = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
      "fields.categories": category
    });

    if (res.items.length > 0) {
      items = res.items.map(item => refineContentfulPost(item));
    }

    return {
      category,
      items,
      total: res.total
    };
  },
  scrollToTop: true,

  head() {
    // const { title, description, slug, heroImage } = this.currentPost.fields;
    // const image = heroImage.fields.file.url;
    // return setBlogSEO({ title, description, slug, image });
  }
};
</script>

 <style lang="scss" scoped>
.feruden-category {
  max-width: 1072px;
  margin: 0 auto;
  padding: 0 16px;
  header {
    h2 {
      font-size: 62px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  @include e("main-article") {
    @include clearfix;
    img {
      float: left;
      width: 676px;
      height: 352px;
      object-fit: cover;
      margin-right: 20px;
    }
    h3 {
      font-size: 28px;
      @include column-break(2);
    }
    p {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.54);
      @include column-break(2);
    }
  }

  @include e("article-list") {
    @include clearfix;
    article {
      float: left;
      height: 350px;
      padding: 10px;
      margin: 35px 0;
      img {
        height: 240px;
      }
      h3 {
        @include column-break(2);
        color: rgba(0, 0, 0, 0.84);
      }
      p {
        @include column-break(2);
        color: rgba(0, 0, 0, 0.54);
      }
      &:nth-of-type(-n + 2) {
        width: 50%;
      }
      &:nth-child(n + 3):nth-child(-n + 5) {
        width: 33.33%;
      }
      &:nth-child(n + 6) {
        width: 50%;
      }
    }
  }
}
</style>