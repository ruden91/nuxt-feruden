<template>
  <section class="feruden__blog">
    <div
      v-show="modalState"
      :class="['feruden-blog__modal-dim', {'has-animate': allowTransition}]"
      :style="{'height': dimHeight}"
      @click="handleModal(false)"
    />
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
          :class="['feruden-blog__modal', {'show': modalState, 'has-animate': allowTransition}]"
          :style="{ height: `${height}px`, transform: `translateY(${calcTranslateY}px)`}"
        >
          <div class="feruden-blog__modal-close-handler"/>
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
      calcTranslateY: 500,
      allowTransition: true,
      dimHeight: "100%"
    };
  },
  watch: {
    modalState() {
      if (process.browser) {
        let el = document.getElementsByTagName("html")[0];
        if (this.modalState) {
          el.style.overflow = "hidden";
        } else {
          el.style.overflow = "auto";
        }
      }
    }
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
      this.allowTransition = false;
      if (this.isDragging) {
        this.isDragging = true;
        this.lastPosY = el.offsetTop;
      }
      posY = el.deltaY + this.lastPosY;
      this.calcTranslateY = posY <= 0 ? 0 : posY;

      if (el.isFinal) {
        this.isDragging = false;
        this.allowTransition = true;
        if (this.calcTranslateY >= 250) {
          this.handleModal(false);
        } else {
          this.handleModal();
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
  mounted() {
    this.dimHeight = `${document.body.scrollHeight}px`;
  },
  head() {
    return {
      title: this.currentPost.fields.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentPost.fields.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `FERuden | ${this.currentPost.fields.title}`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.currentPost.fields.description
        },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:locale", property: "og:locale", content: "ko" },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://blog.feruden.com/blog/${
            this.currentPost.fields.slug
          }`
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.currentPost.fields.heroImage.fields.file.url
        }
      ]
    };
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
    background-color: #fff;
    width: 100%;
    padding: 30px;
    position: fixed;
    bottom: 0;
    margin-left: -12px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    /* transition: all 0.35s ease-in-out; */
    transform: translateY(500px);
    &.show {
      transform: translateY(0);
    }
    &.has-animate {
      transition: all 0.35s ease-in-out;
    }
  }
  @include e("modal-dim") {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @include e("modal-close-handler") {
    position: absolute;
    width: 35px;
    height: 4px;
    background-color: #fff;
    border-radius: 10px;
    top: -1.5%;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
  }
}
</style>