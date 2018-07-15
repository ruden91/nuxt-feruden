<template>
  <section>
    <div class="columns">
      <div class="column is-3" v-for="n in 4" :key="n">
        <div class="card" v-for="(item, index) in items" :key="index">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="item.fields.heroImage.fields.file.url" />
            </figure>
            <nuxt-link :to="`/blog/${item.fields.slug}`">{{ item.fields.title }}</nuxt-link>
          </div>
        </div>        
      </div>
    </div>        
  </section>
</template>
  
<script>
import client from '~/plugins/contentful'
export default {
  name: 'index',
  async asyncData() {
    let { items } = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt'
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