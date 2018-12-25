<template>
  <div class="feruden">
    <header class="feruden__header">
      <div class="feruden__header-nav-holder">
        <div class="feruden__header-nav-center-holder">
          <button type="button" @click="openCategoriesPanel">
            {{ selectedCategory['title'] }}
            <i
              :class="['feruden__triangle', {'active': showCategories}]"
            />
          </button>
        </div>
        <div class="feruden__header-nav-right-holder">
          <div v-if="showCategories">
            <Button iconType="search"/>
            <Button iconType="settings"/>
          </div>
          <div v-else>
            <Button iconType="notification"/>
            <Button iconType="user"/>
          </div>
        </div>
      </div>
    </header>
    <transition v-on:enter="enter" v-on:leave="leave">
      <div class="feruden__inner-navigator" v-show="showCategories">
        <ul>
          <li v-for="category in categories" :key="category['title']">
            <button @click="handleSelectCategory(category)">
              <p>{{ category['title'] }}</p>
              <small>{{ category['description'] }}</small>
            </button>
          </li>
        </ul>
        <div class="feruden__ad-holder"></div>
        <WaterMark/>
      </div>
    </transition>
    <transition v-on:enter="contentEnter" v-on:leave="contentLeave">
      <div :class="['feruden__content']" v-show="!showCategories">
        <nuxt/>
      </div>
    </transition>
    <transition v-on:enter="footerEnter" v-on:leave="footerLeave">
      <footer :class="['feruden__more-view']" v-show="!showCategories">
        <button type="button" class="feruden__more-view-btn">
          <i class="feruden__arrow-icon"/>
        </button>
        <p>{{ footerTitle }}</p>
      </footer>
    </transition>
  </div>
</template>
<script>
let Velocity;
if (process.browser) {
  Velocity = require("velocity-animate");
}
import Footer from "~/components/Footer";
import postDic from "~/static/postDic.json";
import WaterMark from "~/components/WaterMark";
import Button from "~/components/buttons/Button";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Footer,
    WaterMark,
    Button
  },
  data() {
    return {
      items: postDic.items,
      footerTitle: "큐피드"
    };
  },
  computed: {
    ...mapState({
      selectedCategory: state => state.uiState.selectedCategory,
      categories: state => state.uiState.categories,
      showCategories: state => state.uiState.showCategories,
      initialApp: state => state.uiState.initialApp
    })
  },
  created() {
    if (this.initialApp) {
      this.selectCategory(this.categories[0]);
      this.initApp();
    }
  },
  methods: {
    ...mapActions("uiState", [
      "selectCategory",
      "openCategoriesPanel",
      "initApp"
    ]),
    handleSelectCategory(category) {
      this.selectCategory(category);
      this.openCategoriesPanel();
    },
    enter(el, done) {
      if (process.browser) {
        Velocity(el, "slideDown");
      }
    },
    leave(el, done) {
      if (process.browser) {
        Velocity(el, "slideUp");
      }
    },
    contentEnter(el, done) {
      if (process.browser) {
        Velocity(el, "fadeIn");
      }
    },
    contentLeave(el, done) {
      if (process.browser) {
        Velocity(el, "fadeOut");
      }
    },
    footerEnter(el, done) {
      if (process.browser) {
        Velocity(el, "slideDown");
      }
    },
    footerLeave(el, done) {
      if (process.browser) {
        Velocity(el, "slideUp");
      }
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
.feruden {
  @include e("header") {
    height: $topGnbHeight;
    border-bottom: 1px solid $gnbBorderColor;
    line-height: $topGnbHeight;
  }
  @include e("more-view") {
    width: 100%;
    height: $bottomGnbHeight;
    position: fixed;
    bottom: 0;
    border-top: 1px solid $gnbBorderColor;
    line-height: $bottomGnbHeight;
    padding-left: 30px;
    background-color: #fff;
  }
  @include e("more-view-btn") {
    position: relative;
    width: $bottomGnbHeight;
    height: $bottomGnbHeight;
    background-color: #222;
    border: none;
    outline: none;
    transform: translateY(-1px);

    p {
      font-weight: bold;
      display: inline-block;
      padding-left: 15px;
      vertical-align: top;
      font-size: 14px;
    }
  }
  @include e("arrow-icon") {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-135deg);
    border: solid #fff;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
  }
  @include e("triangle") {
    @include triangle("up", 4px);
    transform: translate(1px, -4px);
    transition: transform 0.35s ease-in-out;
    &.active {
      transform: translate(3px, -4px) rotate(180deg);
    }
  }
  @include e("content") {
    height: $contentHeight;
  }
  @include e("inner-navigator") {
    height: calc(#{$contentHeight}+#{$bottomGnbHeight});
    ul {
      text-align: center;
      li {
        height: 55px;
        line-height: 55px;
        button {
          display: block;
          width: 100%;
          height: 100%;
          /* &:active,
          &:focus {
            background-image: linear-gradient(
              to right,
              #889ae7,
              #84a1e8,
              #82a7e7,
              #81ade7,
              #83b2e5
            );
          } */
          small {
            color: #999;
            font-size: 11px;
          }
        }
      }
    }
  }
  @include e("header-nav-holder") {
    @include clearfix;
    position: relative;
    height: 100%;
  }
  @include e("header-nav-center-holder") {
    @include centerAlign;

    > button {
      padding-right: 4px;
      font-weight: 500;
      height: $topGnbHeight;
      margin-left: 15px;
    }
  }
  @include e("ad-holder") {
    background-image: linear-gradient(
      to right,
      #889ae7,
      #84a1e8,
      #82a7e7,
      #81ade7,
      #83b2e5
    );
    height: 80px;
  }
  @include e("header-nav-right-holder") {
    padding-top: 5px;
    float: right;
    height: 100%;
    button {
      background-color: transparent;
      padding: 10px;
      margin-right: 5px;
    }
  }
}
</style>
