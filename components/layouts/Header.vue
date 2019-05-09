<template>
  <header class="header">
    <div class="header__inner">
      <slot>header</slot>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

  @include e("inner") {
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
    height: 65px;
  }
}
</style>
