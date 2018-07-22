<template>
  <div>
    <GlobalNav />       
    <nuxt/>
    <Footer />
  </div>
</template>
<script>
import GlobalNav from '~/components/GlobalNav';
import Footer from '~/components/Footer';
export default {
  components: {
    GlobalNav,
    Footer
  },
  head() {
    let baseUrl = 'https://loving-wright-d0eedb.netlify.com';
    let canonical = `${baseUrl}${this.$route.path}`;
    console.log(canonical);
    return {
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
<style>
</style>
