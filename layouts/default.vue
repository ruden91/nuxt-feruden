<template>
  <div>
    <GlobalNav :onHandleFashSearchModal="handleFashSearchModal" />       
    <nuxt/>
    <Footer />
    <div class="modal" :class="{'is-active': isActivedFashSearch}" @keyup.esc="handleFashSearchModal">
      <div class="modal-background"></div>
      <div class="modal-card">
          <FastSearch :items="items" />
      </div>
      <button 
        class="modal-close is-large" 
        aria-label="close" 
        @click="handleFashSearchModal"></button>
    </div>    
  </div>
</template>
<script>
import GlobalNav from '~/components/GlobalNav';
import Footer from '~/components/Footer';
import FastSearch from '~/components/FastSearch';
import postDic from '~/static/postDic.json';
export default {
  components: {
    GlobalNav,
    FastSearch,
    Footer
  },
  data() {
    return {
      items: postDic.items,
      isActivedFashSearch: false
    }
  },
  methods: {
    handleFashSearchModal() {
      this.isActivedFashSearch = !this.isActivedFashSearch;
    }
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27 && this.isActivedFashSearch) {
        this.isActivedFashSearch = false;
      }
    })
  },
  head() {
    let baseUrl = 'https://loving-wright-d0eedb.netlify.com';
    let canonical = `${baseUrl}${this.$route.path}`;
    return {
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
<style>
</style>
