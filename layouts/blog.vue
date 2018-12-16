<template>
  <div class="feruden">
    <header :class="['feruden__header', scrollState]">
      <Link size="55px" :customClassNames="['feruden__header-close']" linkURL="/"/>
    </header>
    <div class="feruden__content">
      <nuxt/>
    </div>
    <footer class="feruden__footer">footer</footer>
  </div>
</template>
<script>
import Link from "~/components/buttons/Link";
export default {
  components: {
    Link
  },
  data() {
    return {
      scroll: 0,
      scrollState: "up"
    };
  },
  mounted() {
    this.scroll = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      const state = window.scrollY > this.scroll ? "down" : "up";

      this.scroll = window.scrollY;
      this.scrollState = state;
    }
  }
};
</script>
<style lang="scss" scoped>
.feruden {
  @include e("header") {
    width: 100%;
    position: fixed;
    top: 0;
    @include clearfix;
    height: $topGnbHeight;
    background-color: #fafafa;
    transform: translateY(0);
    transition: transform 0.35s ease-in-out;
    &.down {
      transform: translateY(-$topGnbHeight);
    }
  }
  @include e("content") {
    margin-top: $topGnbHeight;
    margin-bottom: $bottomGnbHeight;
  }
  @include e("footer") {
    width: 100%;
    height: $bottomGnbHeight;
    position: fixed;
    bottom: 0;
    border-top: 1px solid $gnbBorderColor;
    line-height: $bottomGnbHeight;
    padding: 0 30px;
    background-color: #fff;
  }
  @include e("header-close") {
    float: right;
  }
}
</style>