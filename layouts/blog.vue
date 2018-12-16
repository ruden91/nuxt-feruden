<template>
  <div class="feruden">
    <header class="feruden__header">
      <Link size="55px" :customClassNames="['feruden__header-close']" linkURL="/"/>
    </header>
    <nuxt/>
    <footer class="feruden__footer">footer</footer>
  </div>
</template>
<script>
import Link from "~/components/buttons/Link";
export default {
  components: {
    Link
  }
};
</script>
<style lang="scss" scoped>
.feruden {
  @include e("header") {
    @include clearfix;
    height: $topGnbHeight;
    background-color: #fafafa;
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