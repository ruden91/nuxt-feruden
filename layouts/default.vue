<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <span>FERuden</span>
        </nuxt-link>

        <a 
          role="button" 
          class="navbar-burger" 
          aria-label="menu" 
          aria-expanded="false"
          :class="{'is-active': toggleNav}"
          @click.prevent="toggleNavButton"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div 
        class="navbar-menu" 
        :class="{'is-active': toggleNav}"
        id="navMenu"
      >
      <div class="navbar-start">
        <!-- navbar items -->
        <a class="navbar-item">
          Home
        </a>        
      </div>

      <div class="navbar-end">
        <!-- navbar items -->
      </div>        
      </div>      
    </nav>       
    <div class="container">
      <nuxt/>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleNav: false
    }
  },
  methods: {
    toggleNavButton() {
      this.toggleNav = !this.toggleNav;
    }
  }
}
</script>
<style>
</style>
