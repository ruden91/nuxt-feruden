<template>
  <section class="feruden__blog">
    <p>태그 목록</p>
    <h1 class="feruden__blog-title">타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀</h1>
  </section>
</template>
  
<script>
import RelatedPostPreview from "~/components/RelatedPostPreview.vue";
import moment from "moment";
import "moment/locale/ko";
import client from "~/plugins/contentful";
import { sampleSize } from "lodash";
export default {
  layout: "blog",
  scrollToTop: true,
  components: {
    RelatedPostPreview
  },
  data() {
    return {
      shortname: "https-ruden91-github-io",
      baseUrl: "https://blog.feruden.com"
    };
  },
  async asyncData({ params, errors, payload }) {
    if (payload) {
      return {
        post: payload
      };
    }

    let { items } = await client.getEntries({
      content_type: "blogPost"
    });
    let post = items.filter(item => item.fields.slug === params.slug)[0];
    let relatedPosts = items.filter(
      item =>
        item.fields.categories[0] === post.fields.categories[0] &&
        post.sys.id !== item.sys.id
    );
    console.log("get");
    return {
      post,
      relatedPosts
    };
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.fields.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `FERuden | ${this.post.fields.title}`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.fields.description
        },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:locale", property: "og:locale", content: "ko" },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://blog.feruden.com/blog/${this.post.fields.slug}`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.fields.heroImage.fields.file.url
        }
      ]
    };
  },
  methods: {
    transformDateToMomentDate(date) {
      return moment(date).format("YYYY-MM-DD (ddd)");
    }
  }
};
</script>

<style lang="scss" scoped>
.feruden {
  @include e("blog-title") {
  }
}
</style>