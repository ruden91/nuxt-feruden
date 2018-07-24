<template>
  <section>
    <h2>Tags: {{tag}} ({{ tagPostCount }})</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <nuxt-link :to="`/blog/${item.fields.slug}`">
          <h3>{{ item.fields.title }}</h3>
          <p>{{ item.fields.description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
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
        { hid: 'og:url', property: 'og:url', content: `https://loving-wright-d0eedb.netlify.com/tags/${this.tag}`},
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