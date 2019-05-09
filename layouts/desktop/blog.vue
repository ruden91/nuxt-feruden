<template>
  <div class="feruden">
    <Header>
      <Logo class="feruden__logo"/>
    </Header>
    <section class="feruden__content">
      <nuxt/>
    </section>
  </div>
</template>
<script>
import Header from "@/components/layouts/Header";
import Logo from "@/components/Logo";
import Footer from "@/components/layouts/Footer";
export default {
  components: {
    Header,
    Logo
  }
};
</script>
<style lang="scss" scoped>
.feruden {
  @include e("logo") {
    position: relative;
    top: 53%;
    transform: translateY(-50%);
    width: 50px;
  }
}
</style>