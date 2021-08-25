export default {
  state: {
    userProducts: [],
  },
  getters: {
    userProducts: (s) => s.userProducts,
  },
  mutations: {
    addProduct(state, productData) {
      state.userProducts.push(productData);
    },
  },
  actions: {
    async addProduct({ commit }, productData) {
      await this._vm.$api.products.addProduct(productData);
      commit("addProduct", productData);
    },
    updateProductInfo(_, [productId, newInfo]) {
      return this._vm.$api.products.updateProductInfo(productId, newInfo);
    },
    getProductsList() {
      return this._vm.$api.products.getProducts();
    },
    getProductById(_, productId) {
      return this._vm.$api.products.getProductById(productId);
    },
  },
};
