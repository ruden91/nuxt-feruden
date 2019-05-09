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
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
  margin-top: 50px;
}
</style>

