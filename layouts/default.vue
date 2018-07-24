<template>
  <div>
    <GlobalNav :onHandleFashSearchModal="handleFashSearchModal" />       
    <nuxt/>
    <Footer />
    <div class="modal" :class="{'is-active': isActivedFashSearch}">
      <div class="modal-background"></div>
      <div class="modal-card">
          <button class="delete" aria-label="close" @click="handleFashSearchModal"></button>
          <FastSearch />
      </div>
    </div>    
  </div>
</template>
<script>
import GlobalNav from '~/components/GlobalNav';
import Footer from '~/components/Footer';
import FastSearch from '~/components/FastSearch';
export default {
  components: {
    GlobalNav,
    FastSearch,
    Footer
  },
  data() {
    return {
      isActivedFashSearch: false
    }
  },
  methods: {
    handleFashSearchModal() {
      this.isActivedFashSearch = !this.isActivedFashSearch;
    }
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
