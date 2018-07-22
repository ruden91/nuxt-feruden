<template>
  <section>
    <div class="bg-container">
      <img 
        :src="post.fields.heroImage.fields.file.url"
        :alt="post.fields.title" 
      />
      <h1>{{ post.fields.title }}</h1>
      <time>Published on {{ transformDateToMomentDate(post.fields.publishDate) }}</time>
      <div class="bounce">
        <img src="~assets/images/down-arrow.png" />
      </div>      
    </div>
    <div class="container container--comments">
      <div class="content" v-html="$md.render(post.fields.body)">
      </div>
      <div class="comments">
        <vue-disqus 
          :shortname="shortname"
          :identifier="post.sys.id" 
          :url="`${baseUrl}/blog/${post.fields.slug}`"
        ></vue-disqus>
      </div>      
    </div>
    <RelatedPostPreview :items="relatedPosts" />    
  </section>
</template>
  
<script>
import RelatedPostPreview from '~/components/RelatedPostPreview.vue';
import moment from 'moment';
import 'moment/locale/ko';
import client from '~/plugins/contentful';
import { sampleSize } from 'lodash';
export default {
  components: {
    RelatedPostPreview
  },
  data() {
    return {
      shortname: 'https-ruden91-github-io',
      baseUrl: 'https://loving-wright-d0eedb.netlify.com'
    }
  },
  async asyncData({ params, errors, payload }) {
    if (payload) {
      return {
        post: payload
      }
    }

    let { items } = await client.getEntries({
      content_type: 'blogPost'
    });
    let post = items.filter(item => item.fields.slug === params.slug)[0];
    let relatedPosts = items.filter(item => (item.fields.categories[0] === post.fields.categories[0]) && post.sys.id !== item.sys.id);

    if (relatedPosts.length === 0) {
      relatedPosts = items.filter(item => post.sys.id !== item.sys.id);
    }
    relatedPosts = sampleSize(relatedPosts, 3);
    
    return {
      post,
      relatedPosts
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title},
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description},
        { hid: 'og:type', property: 'og:type', content: 'article'},
        { hid: 'og:locale', property: 'og:locale', content: 'ko'},
        { hid: 'og:url', property: 'og:url', content: `https://loving-wright-d0eedb.netlify.com/blog/${this.post.fields.slug}`},
        { hid:'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url},        
      ]      
    }
  },
  methods: {
    transformDateToMomentDate(date) {
      return moment(date).format('YYYY-MM-DD (ddd)')
    }
  }     
}
</script>
<style>
.content pre {
  padding: 0;
  background-color: transparent;
}
</style>

<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  to {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
  60% {
    transform: translateY(-2px);
  }
}
.container {
  margin-top: 30px;
  padding: 15px;
}
.bg-container {
  position: relative;
  height: calc(100vh - 52px);
}
.bg-container .bounce {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 15px;
  color: #b3b3b3;
  animation: bounce 2s infinite;
}
.bg-container .bounce img {
  width: 16px;
}
.bg-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    hsla(0, 0%, 7%, 0.8),
    hsla(0, 0%, 7%, 0.5),
    transparent,
    transparent
  );
  transition: all 0.4s ease-in-out;
}
.bg-container h1 {
  text-align: center;
  color: #fbfbfb;
  font-weight: 300;
  font-size: 3.5vw;
  text-shadow: 2px 2px 2px #111;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15%;
  max-width: 80%;
  margin: auto;
}
.bg-container time {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #b3b3b3;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: 16px;
}
.bg-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container--comments {
  min-height: 250px;
}
</style>