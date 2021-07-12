import Vue from "vue";
import Vuex from "vuex";
import cocktails from "./cocktails";
import cart from "./cart";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [
      { title: "Become A Social Media Expert", type: "Free" },
      { title: "Advance Your 3d Modelling Skill", type: "Premium" },
      { title: "The Art Of Growing Relationship", type: "Free" },
      { title: "Skills Needed In Becoming A Designer", type: "Premium" },
      { title: "Get Weekly Shopping Tips From Tesha", type: "Premium" },
      { title: "Learn Logo Design", type: "Free" },
      { title: "Become A Web Developer", type: "Premium" },
      { title: "Embark On The Journey Of Becoming An Artist", type: "Free" },
      { title: "4 Weeks Photography Bootcamp", type: "Premium" },
      { title: "Learn Organization Management", type: "Free" },
      { title: "3 in 1 Course Of Becoming A Makeup Artist", type: "Free" },
      { title: "How To Have A Good Listening Ear For Music", type: "Premium" },
    ],
    newCocktails: [],
    cocktailsInCart: [],
  },
  getters: {
    courses: (s) => s.courses,
    cocktailsInCart: (s) => s.cocktailsInCart,
  },
  mutations: {
    getCocktail: (state, value) => {
      state.newCocktails = value;
    },
    addCocktailToCart: (state, value) => {
      let isInCart = false;
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
  actions: {},
  modules: {
    cocktails,
    cart,
    products,
  },
});
