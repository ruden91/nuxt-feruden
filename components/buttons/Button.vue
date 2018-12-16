<template>
  <button :type="type" @click="click" :class="classNames" :style="buttonStyles">
    {{ name }}
    <template v-if="allowIcon">
      <slot name="icon">
        <Icon iconType="close"/>
      </slot>
    </template>
  </button>
</template>
<script>
import Icon from "~/components/Icon";
export default {
  name: "Button",
  components: {
    Icon
  },
  props: {
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
      return ["feruden__button", ...this.customClassNames];
    },
    buttonStyles() {
      return {
        width: this.size,
        height: this.size
      };
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.feruden {
  @include e("button") {
    background-color: #222335;
    border: none;
    outline: none;
  }
}
</style>