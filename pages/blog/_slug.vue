<template>
  <section class="feruden__blog">
    <Tag :name="currentPost.fields.categories[0]"/>
    <h1 class="feruden__blog-title">{{ currentPost.fields.title }}</h1>
    <time class="feruden__blog-time">{{ transformDateToMomentDate(currentPost.sys.createdAt) }}</time>
    <div class="feruden__blog-md-content" v-html="$md.render(currentPost.fields.body)"></div>
    <no-ssr>
      <div class="fb-comments" :data-href="postURL" data-numposts="5"></div>
      <!-- <vue-disqus
        :shortname="shortname"
        :identifier="currentPost.sys.id"
        :url="`${baseUrl}/blog/${currentPost.fields.slug}`"
      ></vue-disqus>-->
    </no-ssr>
  </section>
</template>
  
<script>
import Vue from "vue";
import RelatedPostPreview from "~/components/RelatedPostPreview.vue";
import client from "~/plugins/contentful";
import postMixins from "~/helpers/post";
import Tag from "~/components/Tag";
import { setBlogSEO } from "~/helpers/seo";
import meta from "~/static/meta.json";
export default {
  mixins: [postMixins],
  scrollToTop: true,
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
    postURL() {
      const { slug } = this.currentPost.fields;
      return `${meta.baseURL}/blog/${slug}`;
    },
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
  },
  head() {
    const { title, description, slug, heroImage } = this.currentPost.fields;
    const image = heroImage.fields.file.url;
    return setBlogSEO({ title, description, slug, image });
  }
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
      font-weight: 600 !important;
      margin: 0.67em 0 !important;
    }
    h1 {
      font-size: 1.6em !important;
    }
    h2 {
      font-size: 1.5em !important;
    }
    h3 {
      font-size: 1.17em !important;
    }
    h4 {
    }
    h5 {
      font-size: 0.83em !important;
    }
    h6 {
      font-size: 0.67em !important;
    }
  }

  @include e("blog-md-content") {
    margin-top: 15px;
    pre {
      background-color: #fff;
      padding: 1.25rem 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.feruden {
  @include e("blog") {
    max-width: 1082px;
    margin: 0 auto;
    margin-top: 25px;
    padding-bottom: 50px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>