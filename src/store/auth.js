export default {
  state: {
    auth: false,
  },
  getters: {
    auth: (s) => s.auth,
  },
  mutations: {
    changeAuth(s, value) {
      s.auth = value;
    },
  },
  actions: {
    async signUp({ commit }, [email, password]) {
      console.log(email, password);
      await this._vm.$api.auth.signUp(email, password);
      localStorage.setItem("logged_in", true);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPass", password);
      commit("changeAuth", true);
    },
    async login({ commit }, [email, password]) {
      await this._vm.$api.auth.login(email, password);
      commit("changeAuth", true);
    },
    logout({ commit }) {
      localStorage.removeItem("logged_in");
      commit("changeAuth", false);
    },
  },
};
