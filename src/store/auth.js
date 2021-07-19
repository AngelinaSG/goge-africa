export default {
  state: {
    auth: false,
  },
  getters: {
    auth: s => s.auth,
  },
  mutations: {
    changeAuth(s, value) {
      s.auth = value;
    }
  },
  actions: {
    async signUp({ commit }, password, email) {
      await this.$api.auth.signUp(password, email);
      localStorage.setItem("logged_in", true);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPass",password);
      commit("changeAuth", true);
    },
    logout({commit}) {
      localStorage.removeItem("logged_in");
      commit("changeAuth", false)
    },
  },
};
