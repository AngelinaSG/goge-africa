export default {
  actions: {
    async getCocktails() {
      let cocktails = await this._vm.$api.cocktails.getCocktails();
      return cocktails.data.drinks;
    },
    async getCocktailById(cocktailId) {
      console.log(cocktailId);
      let cocktail = await this._vm.$api.cocktails.getCocktailById(cocktailId);
      console.log(cocktail);
      return cocktail.data.drinks;
    },
    async getCocktailBySearchValue({ commit }, searchValue) {
      try {
        let cocktailByName =
          await this._vm.$api.cocktails.getCocktailBySearchValue(searchValue);
        commit("getCocktail", searchValue);
        return cocktailByName.data.drinks;
      } catch (e) {
        throw e;
      }
    },
    async getFilters() {
      const alcFilter = await this._vm.$api.cocktails.getAlcFilter();
      const catFilter = await this._vm.$api.cocktails.getCatFilter();
      const glassFilter = await this._vm.$api.cocktails.getGlassFilter();
      return {
        alcFilter: alcFilter.data.drinks,
        catFilter: catFilter.data.drinks,
        glassFilter: glassFilter.data.drinks,
      };
    },
    async getItemsByFilter({ commit }, filter) {
      let cocktailByFilter = await this._vm.$api.cocktails.getCocktailByFilter(
        filter
      );
      commit("getCocktail", cocktailByFilter);
      return cocktailByFilter.data.drinks;
    },
  },
};
