<template>
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
    </div>

    <div class="navbar-end">
      <!-- navbar items -->
        <a class="navbar-item" @click.prevent="onHandleFashSearchModal">
          빠른검색
        </a>      
    </div>        
    </div>      
  </nav>  
</template>
<script>
import { EventBus } from "~/utils/event-bus";
export default {
  name: "GlobalNav",
  props: ["onHandleFashSearchModal"],
  data() {
    return {
      toggleNav: false
    };
  },
  methods: {
    toggleNavButton() {
      this.toggleNav = !this.toggleNav;
    }
  },
  mounted() {
    EventBus.$on("toggleNavButton", this.toggleNavButton);
  }
};
</script>
<style scoped>
.navbar {
  border-bottom: 1px solid #ddd;
}
</style>
