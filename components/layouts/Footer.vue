<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <WaterMark/>
        <!-- <strong>FERuden</strong> by <a href="https://github.com/ruden91" target="_blank">ruden</a>. -->
      </p>
    </div>
  </footer>
</template>
<script>
import WaterMark from "@/components/WaterMark";
export default {
  name: "Footer",
  components: {
    WaterMark
  }
};
</script>
<style scoped>
.footer {
  margin-top: 50px;
}
</style>

