<template>
  <div class="feruden">
    <div class="feruden__content">
      <nuxt/>
    </div>
    <div class="feruden__more-view">
      <button type="button" class="feruden__more-view-btn" @click="handleMoreView">
        <i class="feruden__arrow-icon"/>
      </button>
      <p>{{ footerTitle }}</p>
    </div>
  </div>
</template>
<script>
import Footer from "~/components/Footer";
import postDic from "~/static/postDic.json";
export default {
  components: {
    Footer
  },
  data() {
    return {
      items: postDic.items,
      footerTitle: "큐피드"
    };
  },
  methods: {
    handleMoreView() {
      console.log("handleMoreView");
    }
  },
  head() {
    let baseUrl = "https://blog.feruden.com";
    let canonical = `${baseUrl}${this.$route.path}`;
    return {
      link: [{ rel: "canonical", href: canonical }]
    };
  }
};
</script>
<style lang="scss" scoped>
$bottomSize: 40px;
.feruden__more-view {
  width: 100%;
  height: $bottomSize;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ddd;
  line-height: $bottomSize;
  padding-left: 30px;
  .feruden__more-view-btn {
    position: relative;
    width: $bottomSize;
    height: $bottomSize;
    background-color: #222;
    border: none;
    transform: translateY(-1px);
  }
  .feruden__arrow-icon {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-135deg);
    border: solid #fff;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
  }
  p {
    font-weight: bold;
    display: inline-block;
    padding-left: 15px;
    vertical-align: top;
    font-size: 14px;
  }
}
</style>
