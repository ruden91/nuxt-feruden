const categories = [
  {
    title: "테크뷰",
    description: "기술관련 아티클",
    type: "tech"
  },
  {
    title: "인기뷰",
    description: "가장 많이 본 아티클",
    type: "popular"
  },
  {
    title: "추천뷰",
    description: "알면 좋은 아티클",
    type: "recommend"
  }
];

export const state = () => ({
  selectedCategory: "",
  showCategories: false,
  categories,
  initialApp: true
});

export const mutations = {
  SELECT_CATEGORY(state, category) {
    state.selectedCategory = category;
  },
  OPEN_CATEGORIES(state) {
    state.showCategories = !state.showCategories;
  },
  INIT_APP(state) {
    state.initialApp = false;
  }
};

export const actions = {
  selectCategory({ commit }, category) {
    commit("SELECT_CATEGORY", category);
  },
  openCategoriesPanel({ commit }) {
    commit("OPEN_CATEGORIES");
  },
  initApp({ commit }) {
    commit("INIT_APP");
  }
};
