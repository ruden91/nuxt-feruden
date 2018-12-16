<template>
  <section class="feruden__blog">
    <Tag :name="currentPost.fields.categories[0]"/>
    <h1 class="feruden__blog-title">{{ currentPost.fields.title }}</h1>
    <time class="feruden__blog-time">{{ transformDateToMomentDate(currentPost.sys.createdAt) }}</time>
    <div class="feruden__blog-md-content" v-html="$md.render(currentPost.fields.body)"></div>
    <footer class="feruden-blog__footer">
      <button
        class="feruden-blog__comments"
        :style="{'background-image': `url(${commentIcon})`}"
        @click="handleModal"
      />
    </footer>
    <no-ssr>
      <v-touch @pan="onPan">
        <div
          :class="['feruden-blog__modal', {'show': modalState}]"
          :style="{ height: `${height}px`, transform: `translateY(${calcTranslateY}px)`}"
        >
          <button
            class="feruden-blog__comments"
            :style="{'background-image': `url(${commentIcon})`}"
            @click="handleModal(false)"
          />
          <vue-disqus
            :shortname="shortname"
            :identifier="currentPost.sys.id"
            :url="`${baseUrl}/blog/${currentPost.fields.slug}`"
          ></vue-disqus>
        </div>
      </v-touch>
    </no-ssr>
  </section>
</template>
  
<script>
let Velocity;
if (process.browser) {
  Velocity = require("velocity-animate");
}
import Vue from "vue";
import RelatedPostPreview from "~/components/RelatedPostPreview.vue";
import client from "~/plugins/contentful";
import postMixins from "~/helpers/post";
import Tag from "~/components/Tag";

// icon
import commentIcon from "~/assets/images/comments.svg";

export default {
  layout: "blog",
  mixins: [postMixins],
  scrollToTop: true,
  components: {
    Tag,
    RelatedPostPreview
  },
  data() {
    return {
      commentIcon,
      shortname: "https-ruden91-github-io",
      baseUrl: "https://blog.feruden.com",
      modalState: false,
      lastPosY: 0,
      isDragging: false,
      height: 500,
      calcTranslateY: 500
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
  },
  methods: {
    onPan(el) {
      let posY = 0;
      const target = el.target;
      if (this.isDragging) {
        this.isDragging = true;
        this.lastPosY = el.offsetTop;
      }
      posY = el.deltaY + this.lastPosY;
      this.calcTranslateY = posY <= 0 ? 0 : posY;
      if (this.calcTranslateY >= 500) {
        this.handleModal(false);
      }
      if (el.isFinal) {
        this.isDragging = false;
        if (this.calcTranslateY > 0) {
          console.log(this.calcTranslateY);
          this.handleModal(false);
        }
      }
    },
    handleModal(state = true) {
      if (state) {
        this.calcTranslateY = 0;
      } else {
        this.calcTranslateY = 500;
      }
      this.modalState = state;
    }
  },
  mounted() {}
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
.feruden-blog {
  @include e("footer") {
    width: 100%;
    height: $bottomGnbHeight;
    position: fixed;
    bottom: 0;
    border-top: 1px solid $gnbBorderColor;
    line-height: $bottomGnbHeight;
    padding: 0 30px;
    background-color: #fff;
    margin-left: -12px;
  }
  @include e("comments") {
    width: $bottomGnbHeight;
    height: $bottomGnbHeight;
    background-size: contain;
    background-position-y: 4px;
    background-size: 30px 30px;
  }
  @include e("modal") {
    background-color: #777;
    width: 100%;
    padding: 30px;
    position: fixed;
    bottom: 0;
    margin-left: -12px;
    /* transition: all 0.35s ease-in-out; */
    transform: translateY(500px);
    &.show {
      transform: translateY(0);
    }
  }
  @include e("modal-handler") {
    position: absolute;
    width: 80px;
    height: 5px;
    background-color: #222;
    border-radius: 10px;
    top: -4%;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
  }
}
</style>