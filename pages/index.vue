<template>
  <section>
    <h2 v-for="(item, index) in items" :key="index">
      <img :src="item.fields.heroImage.fields.file.url" />
      <nuxt-link :to="`/blog/${item.fields.slug}`">{{ item.fields.title }}</nuxt-link>
    </h2>
  </section>
</template>
  
<script>
import client from '~/plugins/contentful'
export default {
  name: 'index',
  async asyncData() {
    let { items } = await client.getEntries({
      content_type: 'blogPost'
    });
    return {
      items
    }
  }
}
</script>
  
<style>
.index {
}
</style>