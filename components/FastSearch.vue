<template>
<nav class="panel">
  <p class="panel-heading">
    빠른검색
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input 
        class="input is-small" 
        type="text" 
        placeholder="포스트 이름이나 카테고리를 입력하세요."
        v-model="content"
        ref="fastSearchInput"
      >
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a 
      :class="{'is-active': selectedFilterIndex === index}" 
      v-for="(category, index) in categories" :key="index"
      @click.prevent="handleCategoryTab(index)"
    >{{ category }}</a>
  </p>
  <div class="panel-content">
    <div @click="handleFastSearchItem" >
      <nuxt-link 
        class="panel-block"
        v-for="(item, index) in typingFilteredItems" 
        :key="index"
        :to="`/blog/${item.fields.slug}`"
      >
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        {{ item.fields.title }}
      </nuxt-link>      
    </div>
  </div>
</nav>
</template>
  
<script>
import { EventBus } from "~/utils/event-bus";
import { filter, uniq } from "lodash";
export default {
  name: "FastSearch",
  props: ["items"],
  data() {
    return {
      content: "",
      selectedFilterIndex: 0
    };
  },
  computed: {
    categories() {
      return [
        "전체",
        ...uniq(this.items.map(item => item.fields.categories[0]))
      ];
    },
    filteredItems() {
      if (this.selectedFilterIndex === 0) {
        return this.items;
      }
      // return filter(this.items, item => item.fields.title.includes(this.content) || item.fields.categories[0].includes(this.content));
      return filter(
        this.items,
        item =>
          item.fields.categories[0] ===
          this.categories[this.selectedFilterIndex]
      );
    },
    typingFilteredItems() {
      return filter(this.filteredItems, item => {
        let title = item.fields.title.toLowerCase();
        let category = item.fields.categories[0].toLowerCase();
        let content = this.content.toLowerCase();
        return title.includes(content) || category.includes(content);
      });
    }
  },
  mounted() {
    this.$refs.fastSearchInput.focus();
  },
  methods: {
    handleFastSearchItem() {
      EventBus.$emit("toggleModal", false);
    },
    handleCategoryTab(index) {
      this.selectedFilterIndex = index;
    }
  }
};
</script>
  
<style scoped>
.panel {
  background-color: #fff;
}
.panel-tabs {
  display: block;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.panel-tabs a {
  display: inline-block;
  padding: 10px;
}
.panel-content {
  height: 300px;
  overflow-y: auto;
}
</style>