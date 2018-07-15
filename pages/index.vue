<template>
  <section>
    <div class="container">
      <div class="columns is-2 is-multiline is-mobile">
        <div class="column is-one-third" v-for="(item, index) in items" :key="index">
          <div class="main-card">
            <nuxt-link :to="`/blog/${item.fields.slug}`">
            <div class="card-image">
              <figure>
                <img :src="item.fields.heroImage.fields.file.url" />
              </figure>
              <div class="main-card__content">
                <p class="main-card__title">{{ item.fields.title }}</p>
                <span class="tag">{{ item.fields.categories[0] }}</span>
                <p class="main-card__description">{{ item.fields.description}}</p>
                <time>{{ transformDateToMomentDate(item.fields.publishDate)}}</time>
              </div>
            </div>
            </nuxt-link>
          </div>        
        </div>
      </div>
    </div>        
  </section>
</template>
  
<script>
import moment from 'moment';
import 'moment/locale/ko';
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
  },
  methods: {
    transformDateToMomentDate(date) {
      return moment(date).fromNow();
    }
  }
}
</script>
  
<style scoped>
section {
  margin-top: 20px;
  padding: 0 15px;
}

.main-card {
}
.main-card__content {
  position: relative;
  padding: 0 10px;
}

.main-card__description {
  color: #7a7a7a;
  font-size: 12px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}
.main-card time {
  padding-top: 5px;
  float: right;
  font-size: 10px;
  color: #7a7a7a;
}
.main-card img {
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 225px;
  object-fit: cover;
}
.main-card .main-card__title {
  color: #363636;
  font-size: 14px;
  padding-right: 45px;
}
.main-card .card-image {
}
.main-card .tag {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  border-radius: 3px;
  color: #7a7a7a;
  height: 2rem;
  line-height: 1.2;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-bottom: 1px;
}
</style>