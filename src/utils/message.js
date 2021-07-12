export default {
  install(Vue) {
    Vue.prototype.$message = function (html) {
      this.$bvToast.toast(html, {
        autoHideDelay: 3000,
        toaster: "b-toaster-top-center",
        "append-toast": true,
      });
    };
  },
};
