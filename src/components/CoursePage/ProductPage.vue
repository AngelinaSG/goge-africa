<template>
  <div class="container product__container">
    <div class="row">
      <h1 class="product__title">{{ productInfo.strDrink }}</h1>
    </div>
    <div class="row">
      <img
        :src="productInfo.strDrinkThumb"
        :alt="productInfo.strImageAttribution"
        class="product__img"
      />
      <div>
        <h3 class="bold">Characteristics</h3>
        <ul class="mt-2 ml-3 mb-5 list-group">
          <li>{{ productInfo.strAlcoholic }}</li>
          <li>{{ productInfo.strCategory }}</li>
          <li>{{ productInfo.strGlass }}</li>
        </ul>
        <h3 class="bold">Ingredients</h3>
        <div class="row">

          <ul class="d-flex flex-column mt-2">
            <li v-for="ingredient in productIngredients">
                {{ingredient}}
            </li>
          </ul>

          <ul class="d-flex flex-column product__measure-list mt-2">
            <li v-for="measure in productMeasures">
              {{measure}}
            </li>
          </ul>

        </div>
      </div>
      <div>
        <h3 class="bold">Preparing</h3>
        <p>{{productInfo.strInstructions}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CoursePage",
  data: () => ({
    productInfo: {},
  }),
  async created() {
    console.log(this.$route.params.id);
    const productInfo = await this.getCocktailById(this.$route.params.id);
    this.productInfo = productInfo[0];
  },
  computed: {
    productIngredients() {
      let productIngredients = [];
      for(let key in this.productInfo) {
        if (key.includes('strIngredient') & this.productInfo[key] !== null) {
          productIngredients.push(this.productInfo[key])
        }
      }
      return productIngredients
    },
    productMeasures() {
      let productMeasures = [];
      for(let key in this.productInfo) {
        if (key.includes('strMeasure') & this.productInfo[key] !== null) {
          productMeasures.push(this.productInfo[key])
        }
      }
      return productMeasures
    }
  },
  methods: {
    ...mapActions(["getCocktailById"]),
  },
};
</script>

<style scoped>
.product__container {
  padding: 40px;
}

.product__title {
  margin-bottom: 25px;
}

.product__img {
  width: 20%;
  height: 20%;
  border-radius: 10px;
  margin: 0 20px 20px 0;
}

.product__measure-list {
  list-style: none;
}

</style>
