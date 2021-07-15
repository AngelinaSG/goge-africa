export default {
  state: {},
  actions: {
    async signUp(_, password, email) {
      await this.$api.auth.signUp(password, email);
      localStorage.setItem("logged_in", true);
    },
    logout() {
      localStorage.removeItem("logged_in");
    },
  },
};
