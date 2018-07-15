<template>
  <div>
    <GlobalNav />       
    <div class="container">
      <nuxt/>
    </div>
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
  }
}
</script>
<style>
</style>
