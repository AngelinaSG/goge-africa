<template>
  <div class="container product__container">
    <div class="row mb-5">
      <router-link to="/dashboard">
        <IconBack class="product__link-back-icon" />
        <span>Back</span>
      </router-link>
    </div>

    <b-spinner v-if="isLoading" label="Loading..."></b-spinner>

    <template v-else>
      <form>
        <div class="row">
          <input class="form-control product__title" v-model="newProductInfo.strDrink"/>
        </div>
        <div class="row">
          <img
            :src="productInfo.strDrinkThumb"
            :alt="productInfo.strImageAttribution"
            class="product__img"
          />
          <div>
            <h3 class="bold mb-3">Characteristics</h3>
            <div class="form-group">
              <input class="form-control edit-product__input" v-model="newProductInfo.strAlcoholic"/>
              <input class="form-control edit-product__input" v-model="newProductInfo.strCategory"/>
              <input class="form-control edit-product__input" v-model="newProductInfo.strGlass"/>
            </div>
          </div>
          <div class="col-6 ml-5">
            <h3 class="bold mb-2">Ingredients</h3>
            <p>{{ productInfo.strInstructions }}</p>
          </div>
        </div>
      </form>

    </template>

  </div>
</template>


<script>
import IconBack from "@/components/icons/IconBack";
import { mapActions } from "vuex";

export default {
  name: "ProductEdit",
  components: {
    IconBack
  },
  data: () => ({
    productInfo: {},
    newProductInfo: {
      strDrink: "",
      strAlcoholic: "",
      strGlass: ""
    },
    isLoading: true,
  }),
  async created() {
    const productInfo = await this.getProductById(this.$route.params.id);
    this.productInfo = productInfo.data;
    this.newProductInfo = this.productInfo;
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["getProductById"]),
  }
};
</script>

<style scoped>

.product__container {
  padding: 40px;
}

.product__title {
  margin-bottom: 25px;
  border: none;
  cursor: pointer;
}

.edit-product__input {
  margin-bottom: 20px;
  border: none;
}

.product__img {
  width: 20%;
  height: 20%;
  border-radius: 10px;
  margin: 0 20px 20px 0;
}


.product__link-back-icon {
  margin-right: 20px;
  transition: transform 0.2s ease;
}

a:hover > .product__link-back-icon {
  transform: translateX(-4px);
}

</style>
