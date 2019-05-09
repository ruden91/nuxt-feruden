<template>
  <nav class="navigation">
    <ul>
      <li v-for="item in items" :key="item.name">
        <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  padding-top: 25px;
  padding-bottom: 20px;
  ul {
    li {
      display: inline-block;
      margin-right: 30px;
      &:last-child {
        margin-right: none;
      }
      a {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.54);
        text-transform: uppercase;
        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
