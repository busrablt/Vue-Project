const state = {
  isLoggedIn: false,
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  loggedIn(state) {
    state.isLoggedIn = true;
  },

  signOut(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
};
const actions = {
  loggedIn({ commit }) {
    commit("loggedIn");
  },

  signOut({ commit }) {
    commit("signOut");
  },

  setUser({ commit }, user) {
    commit("setUser", user);
  },
};
const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
