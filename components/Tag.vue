<template>
  <span class="feruden-tag">{{ name }}</span>
</template>
<script>
export default {
  name: "Tag",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.feruden-tag {
  display: inline-block;
  border-radius: 5px;
  padding: 5px 8px;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
  background-image: linear-gradient(
    to right,
    #889ae7,
    #84a1e8,
    #82a7e7,
    #81ade7,
    #83b2e5
  );
}
</style>


