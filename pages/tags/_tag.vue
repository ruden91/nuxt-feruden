<template>
<div class="container">
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Tags
        </h1>
        <h2 class="subtitle">
          {{tag}} ({{ tagPostCount }})
        </h2>
      </div>
    </div>
  </section>  
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box" v-for="(item, index) in items" :key="index">
        <nuxt-link :to="`/blog/${item.fields.slug}`">
          <h3>{{ item.fields.title }}</h3>
          <p>{{ item.fields.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>    
</div>
</template>
  
<script>
import client from '~/plugins/contentful';
export default {
  async asyncData({ params }) {
    let { tag } = params;
    const { items } = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      'fields.tags': tag
    });

    return {
      tag,
      items
    }
  },
  computed: {
    tagPostCount() {
      return `${this.items.length.toLocaleString()}개`;
    }
  },
  head() {
    return {
      title: `${this.tag} 포스팅 전체보기`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.tag}에 관련된 전체 포스팅을 살펴볼 수 있습니다.` },
        { hid: 'og:title', property: 'og:title', content: `FERuden | ${this.tag} 포스팅 전체보기`},
        { hid: 'og:description', property: 'og:description', content: `${this.tag}에 관련된 전체 포스팅을 살펴볼 수 있습니다.` },
        { hid: 'og:type', property: 'og:type', content: 'article'},
        { hid: 'og:locale', property: 'og:locale', content: 'ko'},
        { hid: 'og:url', property: 'og:url', content: `https://blog.feruden.com/tags/${this.tag}`},
        // { hid:'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url},        
      ]      
    }
  }    
}
</script>

<style scoped>
section h2 {
  text-transform: uppercase;
}
</style>