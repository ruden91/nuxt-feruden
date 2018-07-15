<template>
  <section>
    <div>
      <img 
        :src="post.fields.heroImage.fields.file.url"
        :alt="post.fields.title" 
      />
      <p>{{ post.fields.title }}</p>
      <div class="content" v-html="$md.render(post.fields.body)">
      </div>
    </div>
    <div class="comments">
      <vue-disqus 
        :shortname="shortname"
        :identifier="post.sys.id" 
        :url="`${baseUrl}/blog/${post.fields.slug}`"
      ></vue-disqus>
    </div>    
  </section>
</template>
  
<script>
import client from '~/plugins/contentful'
export default {
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
      content_type: 'blogPost',
      'fields.slug': params.slug
    });
    console.log(items[0]);
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
.content pre {
  padding: 0;
  background-color: transparent;
}
</style>