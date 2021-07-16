export default {
  state: {
    cocktailsInCart: [],
  },
  getters: {
    cocktailsInCart: (s) => s.cocktailsInCart,
  },
  mutations: {
    addCocktailToCart: (state, value) => {
      let isInCart = false;
      console.log(state.cocktailsInCart);
      state.cocktailsInCart.forEach((item) => {
        if (item.idDrink === value.idDrink) {
          isInCart = true;
          item.quantity++;
        }
      });
      if (!isInCart) {
        state.cocktailsInCart.push({ ...value, quantity: 1 });
      }
    },
    addOneMoreCocktail(state, cocktailId) {
      state.cocktailsInCart.forEach((item) => {
        if (item.idDrink === cocktailId) {
          item.quantity++;
        }
      });
    },
    deleteOneCocktail(state, cocktailId) {
      state.cocktailsInCart.forEach((item) => {
        if (item.idDrink === cocktailId) {
          item.quantity--;
        }
      });
    },
    deleteFromCart(state, productId) {
      state.cocktailsInCart.forEach((item, idx) => {
        if (item.idDrink === productId) {
          state.cocktailsInCart.splice(idx, 1);
          localStorage.removeItem(productId);
        }
      });
    },
  },
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
