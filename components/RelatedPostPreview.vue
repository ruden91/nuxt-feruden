<template>
  <div class="container">
    <h3>Related posts</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <nuxt-link :to="`/blog/${item.fields.slug}`">
          <img :src="item.fields.heroImage.fields.file.url" />
          <p>{{ item.fields.title }}</p>          
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'RelatedPostPreview',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
  
<style scoped>
h3 {
  font-size: 24px;
  text-align: center;
}
ul:after {
  content: "";
  display: block;
  clear: both;
}
ul li {
  width: 33%;
  float: left;
  padding: 10px;
}
ul li img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media all and (max-width: 631px) {
  ul li {
    width: 100%;
  }
}
</style>