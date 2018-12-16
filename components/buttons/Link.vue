<template>
  <nuxt-link :class="classNames" :style="linkStyles" :to="linkURL">
    {{ name }}
    <template v-if="allowIcon">
      <slot name="icon">
        <Icon iconType="close"/>
      </slot>
    </template>
  </nuxt-link>
</template>
<script>
import Icon from "~/components/Icon";
export default {
  name: "Link",
  components: {
    Icon
  },
  props: {
    linkURL: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "40px"
    },
    allowIcon: {
      type: Boolean,
      default: true
    },
    customClassNames: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    classNames() {
      return ["feruden__link", ...this.customClassNames];
    },
    linkStyles() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.feruden {
  @include e("link") {
    display: inline-block;
    background-color: #222335;
    text-decoration: none;
    border: none;
    outline: none;
  }
}
</style>