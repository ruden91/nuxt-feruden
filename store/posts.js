import client from "~/plugins/contentful";
import { refineContentfulPost } from "~/utils/helpers";

export const state = () => ({
  posts: [],
  currentPost: {},
  isLoading: true
});

export const getters = {
  filteredPosts(state, getters, rootState) {
    const { selectedCategory } = rootState;
    return [];
  }
};

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setCurrentPost(state, payload) {
    state.currentPost = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  }
};

export const actions = {
  async getPosts({ commit }) {
    const res = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt"
    });

    if (res.items.length > 0) {
      const data = res.items.map(item => refineContentfulPost(item));
      commit("setPosts", data);
    }
  },
  async getPostBySlug({ commit }, slug) {
    commit("setLoading", true);
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug
    });
    commit("setCurrentPost", response.items[0]);
    commit("setLoading", false);
  }
};
