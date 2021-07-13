export default {
  install(Vue) {
    Vue.prototype.$message = function (text) {
      this.$bvToast.toast(text, {
        autoHideDelay: 3000,
        toaster: "b-toaster-top-center",
        "append-toast": true,
      });
    };
  },
};
