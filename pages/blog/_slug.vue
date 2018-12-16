<template>
  <section class="feruden__blog">
    <Tag :name="currentPost.fields.categories[0]"/>
    <h1 class="feruden__blog-title">{{ currentPost.fields.title }}</h1>
    <time class="feruden__blog-time">{{ transformDateToMomentDate(currentPost.sys.createdAt) }}</time>
    <div class="feruden__blog-md-content" v-html="$md.render(currentPost.fields.body)"></div>
  </section>
</template>
  
<script>
import RelatedPostPreview from "~/components/RelatedPostPreview.vue";
import client from "~/plugins/contentful";
import postMixins from "~/helpers/post";
import Tag from "~/components/Tag";
export default {
  layout: "blog",
  mixins: [postMixins],
  scrollToTop: true,
  // transition(to, from) {
  //   if (!from) {
  //     return;
  //   }
  //   return from.path === "/" ? "out-bounce" : "in-bounce";
  // },
  components: {
    Tag,
    RelatedPostPreview
  },
  data() {
    return {
      shortname: "https-ruden91-github-io",
      baseUrl: "https://blog.feruden.com"
    };
  },
  computed: {
    currentPost() {
      return this.$store.state.posts.currentPost;
    },
    isLoading() {
      return this.$store.state.posts.isLoading;
    }
  },
  async fetch({ store, params }) {
    const { slug } = params;
    await store.dispatch("posts/getPostBySlug", slug);
  }
  // head() {
  //   return {
  //     title: this.post.fields.title,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.post.fields.description
  //       },
  //       {
  //         hid: "og:title",
  //         property: "og:title",
  //         content: `FERuden | ${this.post.fields.title}`
  //       },
  //       {
  //         hid: "og:description",
  //         property: "og:description",
  //         content: this.post.fields.description
  //       },
  //       { hid: "og:type", property: "og:type", content: "article" },
  //       { hid: "og:locale", property: "og:locale", content: "ko" },
  //       {
  //         hid: "og:url",
  //         property: "og:url",
  //         content: `https://blog.feruden.com/blog/${this.post.fields.slug}`
  //       },
  //       {
  //         hid: "og:image",
  //         property: "og:image",
  //         content: this.post.fields.heroImage.fields.file.url
  //       }
  //     ]
  //   };
  // }
};
</script>

<style lang="scss">
.feruden {
  @include e("blog") {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
      margin: 0.67em 0;
    }
    h1 {
      font-size: 1.6em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.17em;
    }
    h4 {
    }
    h5 {
      font-size: 0.83em;
    }
    h6 {
      font-size: 0.67em;
    }
  }

  @include e("blog-md-content") {
    margin-top: 15px;
    pre {
      background-color: #fff;
      padding: 1.25rem 0;
      margin: 0 -12px;
    }
  }
}
</style>

<style lang="scss" scoped>
.feruden {
  @include e("blog") {
    padding: 12px 12px 20px 12px;
  }
  @include e("blog-title") {
  }
  @include e("blog-time") {
    color: #999;
    font-size: 12px;
    letter-spacing: 0;
  }
}
</style>