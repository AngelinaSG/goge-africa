import axios from "axios";

export default function () {
  return {
    async getCocktailById(cocktailId) {
      return await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
    },
    async getCocktails() {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d"
      );
    },
    async getCocktailBySearchValue(searchValue) {
      return await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
    },
    async getAlcFilter() {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
      );
    },
    async getCatFilter() {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
    },
    async getGlassFilter() {
      return await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
      );
    },
    async getCocktailByFilter(filter) {
      if (filter.alcFilter) {
        return await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter.alcFilter}`
        );
      }
      if (filter.catFilter) {
        const catFilter = filter.catFilter.replace(/ /g, "_");
        return await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${catFilter}`
        );
      }
      if (filter.glassFilter) {
        const glassFilter = filter.glassFilter.replace(/ /g, "_");
        return await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassFilter}`
        );
      }
    },
  };
}
