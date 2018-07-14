<template>
  <section>
    <nuxt-link to="/">back to home</nuxt-link>
    <div>
      <img :src="image" :alt="post.fields.title" />
      <p>{{ post.fields.title }}</p>
      <div v-html="$md.render(post.fields.body)">
      </div>
    </div>
  </section>
</template>
  
<script>
import client from '~/plugins/contentful'
export default {
  name: 'post',
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
      post: items[0],
      image: `https:${items[0].fields.heroImage.fields.file.url}`
    }
  }  
}
</script>
  
<style>
</style>