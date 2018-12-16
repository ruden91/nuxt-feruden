import client from "~/plugins/contentful";
export const state = () => ({
  posts: [],
  currentPost: {},
  isLoading: true
});

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
      commit("setPosts", res.items);
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
