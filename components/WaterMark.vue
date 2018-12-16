<template>
  <div class="feruden-water-mark">
    <span class="feruden-water-mark__text">powered by</span>
    <span class="feruden-water-mark__img-holder">
      <img :src="icon" alt="vw 아이콘">
    </span>
  </div>
</template>
<script>
import brandIcon from "~/static/icon.png";
export default {
  name: "WaterMark",
  props: {
    icon: {
      type: String,
      default: brandIcon
    }
  }
};
</script>
<style lang="scss" scoped>
.feruden-water-mark {
  max-width: 320px;
  text-align: center;
  margin: 10px auto;
  span {
    vertical-align: middle;
  }
  @include e("text") {
    display: inline-block;
    color: #454545;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  @include e("img-holder") {
    display: inline-block;
    width: 35px;
    margin-left: 3px;
    transform: translateY(4px);
  }
}
</style>
