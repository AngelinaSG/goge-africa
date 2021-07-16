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
      try {
        await this._vm.$api.products.addProduct(productData);
        commit("addProduct", productData);
      } catch (e) {
        throw e;
      }
    },
    async getProductsList() {
      try {
        return await this._vm.$api.products.getProducts();
      } catch (e) {
        throw e;
      }
    },
  },
};
