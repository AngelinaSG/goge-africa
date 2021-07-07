export default {
  actions: {
    async addToCart({ commit }, cocktailId) {
      const cocktailInfo = await this._vm.$api.cocktails.getCocktailById(
        cocktailId
      );
      localStorage.setItem(cocktailId, cocktailId);
      commit("addCocktailToCart", cocktailInfo.data.drinks[0]);
    },
  },
};
