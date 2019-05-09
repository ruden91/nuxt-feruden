<template>
  <div :class="['sider', className]">
    <slot name="header">header</slot>
    <slot name="content">Sider</slot>
  </div>
</template>
<script>
export default {
  name: "Sider",
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        "is-opened": this.open
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.sider {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  transform: translateX(100%);
  transition: all 0.25s ease-in-out;
  &.is-opened {
    transform: translateX(0);
  }
}
</style>

