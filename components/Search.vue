<template>
  <form @submit.prevent="handleSearchForm">
    <input :placeholder="placeholder" v-model="keyword">
    <Button type="submit" iconType="search" size="20px"/>
  </form>
</template>
<script>
import Button from "~/components/buttons/Button";
export default {
  name: "Search",
  props: {
    placeholder: {
      type: String,
      default: "키워드 검색"
    }
  },
  data() {
    return {
      keyword: ""
    };
  },
  components: {
    Button
  },
  methods: {
    handleSearchForm() {
      this.$emit("changeKeyword", this.keyword);
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  position: relative;
  border-bottom: 2px solid #000;
  input {
    display: block;
    padding: 12px 0;
    outline: none;
    border: none;
    width: 100%;
    padding-right: 30px;
  }
  button {
    &.feruden__button {
      position: absolute;
      top: 12px;
      right: 12px;
      background-color: #fff;
    }
  }
}
</style>

