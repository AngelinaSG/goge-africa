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
          <div class="form-group">
            <b-icon icon="pencil" class="rounded product-edit__icon" />
            <input
              class="form-control edit-product__input edit-product__title-input"
              v-model="newProductInfo.strDrink"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <label for="imageLink">Change image link</label>
            <input
              id="imageLink"
              type="text"
              class="form-control edit-product__img-input"
              placeholder="Change image link htttps://"
              v-model="newProductInfo.strDrinkThumb"
            />
            <img :src="productInfo.strDrinkThumb" class="product__img" />
          </div>
        </div>
        <div class="row">
          <div>
            <h3 class="bold mb-3">Characteristics</h3>
            <div class="form-group">
              <b-icon icon="pencil" class="rounded product-edit__icon" />
              <input
                class="form-control edit-product__input"
                v-model="newProductInfo.strAlcoholic"
              />
            </div>
            <div class="form-group">
              <b-icon icon="pencil" class="rounded product-edit__icon" />
              <input
                class="form-control edit-product__input"
                v-model="newProductInfo.strCategory"
              />
            </div>
            <div class="form-group">
              <b-icon icon="pencil" class="rounded product-edit__icon" />
              <input
                class="form-control edit-product__input"
                v-model="newProductInfo.strGlass"
              />
            </div>
          </div>
          <div class="col-6 ml-5">
            <h3 class="bold mb-2">Ingredients</h3>
            <b-form-tags
              v-model="newProductInfo.strIngredients"
              class="form-tags--custom"
              tag-variant="warning"
              tag-pills
              separator=","
              placeholder="Delete or add new ingredients separated by ,"
              add-button-variant="btn-outline-warning"
            ></b-form-tags>
            <button class="btn btn--gradient-bg" @click.prevent="saveChanges">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import IconBack from "@/components/icons/IconBack";
import { mapActions } from "vuex";
import { BIcon } from "bootstrap-vue";

export default {
  name: "ProductEdit",
  components: {
    IconBack,
    BIcon,
  },
  data: () => ({
    productInfo: {},
    newProductInfo: {
      strDrink: "",
      strAlcoholic: "",
      strGlass: "",
      strDrinkThumb: "",
      strIngredients: [],
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
    ...mapActions(["getProductById", "updateProductInfo"]),
    async saveChanges() {
      this.isLoading = true;
      await this.updateProductInfo([this.$route.params.id, this.newProductInfo]);
      this.isLoading = false;
      this.$message(`${this.newProductInfo.strDrink} info updated`);
    },
  },
};
</script>

<style scoped>
.product__container {
  padding: 40px;
  padding-left: 131px;
  padding-right: 127px;
}

.edit-product__input {
  margin-bottom: 20px;
  border: none;
  padding: 25px;
  max-width: 250px;
}

.edit-product__title-input {
  font-size: 2rem;
  font-weight: 700;
  max-width: max-content;
}

.edit-product__img-input {
  margin-bottom: 20px;
}

.form-group {
  position: relative;
}

.product-edit__icon {
  position: absolute;
  top: 25%;
}

.product__img {
  width: 20%;
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

.form-tags--custom {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  margin-bottom: 20px;
  width: 100%;
}
</style>
