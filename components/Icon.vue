<template>
  <i :class="classNames" :style="iconStyles"/>
</template>
<script>
export default {
  name: "Icon",
  props: {
    customClassNames: {
      type: Object,
      default() {
        return {};
      }
    },
    iconType: {
      type: String,
      default: ""
    }
  },
  computed: {
    classNames() {
      return {
        feruden__icon: true,
        ...this.customClassNames,
        [`feruden__icon--${this.iconType}`]: true
      };
    },
    iconStyles() {
      return {};
    }
  }
};
</script>
<style lang="scss" scoped>
$list: "settings", "notification", "user", "search";
.iconBgSize {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 10px;
  background-size: contain;
}
.feruden {
  @include e("icon") {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    @include m("close") {
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 2px;
        height: 20px;
        background-color: #fff;
      }
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
    @each $item in $list {
      @include m(#{$item}) {
        @extend .iconBgSize;
        background-image: url("~assets/images/#{$item}.png");
      }
    }
  }
}
</style>


