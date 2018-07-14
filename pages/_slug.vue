<template>
  <section>
    <nuxt-link to="/">back to home</nuxt-link>
    <div>
      <img 
        :src="post.fields.heroImage.fields.file.url"
        :alt="post.fields.title" 
      />
      <p>{{ post.fields.title }}</p>
      <div class="content" v-html="$md.render(post.fields.body)">
      </div>
    </div>
  </section>
</template>
  
<script>
import client from '~/plugins/contentful'
export default {
  async asyncData({ params, errors, payload }) {
    if (payload) {
      return {
        post: payload
      }
    }

    let { items } = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug
    });
    
    return {
      post: items[0]
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title},
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description},
        { hid:'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url},        
      ]      
    }
  },   
}
</script>
  
<style>
</style>