<template>
  <form class="add-product__form" @submit.prevent="onSubmit()" ref="form">
    <h2 class="text-center">Fill in product details</h2>
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Title"
        v-model.trim="name"
      />

      <div class="select-container">
        <p class="semibold">Please choose category</p>
        <b-form-select
          v-model="category"
          :options="categoriesList"
          class="form-select--custom"
        ></b-form-select>
      </div>

      <div class="radio-container">
        <p class="semibold">Does this drink include alcohol?</p>
        <b-form-radio-group
          v-model="alc"
          :options="alcList"
          class="mb-3"
          value-field="item"
          text-field="name"
        ></b-form-radio-group>
      </div>

      <div class="select-container">
        <p class="semibold">Please choose glass-type</p>
        <b-form-select
          v-model="glass"
          :options="glassList"
          class="form-select--custom"
        ></b-form-select>
      </div>

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Image link htttps://"
        v-model="imgLink"
      />

      <img :src="imgLink" alt="" class="add-product__img" />
      <div class="row">
        <button class="btn btn--gradient-bg btn--add-product" v-if="!isLoading">
          Add Product
        </button>
        <div v-else>
          <b-spinner label="Loading..."></b-spinner>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    file: null,
    name: "",
    category: "",
    alc: "",
    glass: "",
    imgLink: "",
    categoriesList: [],
    alcList: [],
    glassList: [],
    isLoading: false,
    formData: {},
  }),
  async mounted() {
    const filtersList = await this.getFilters();
    this.categoriesList = filtersList.catFilter.map((item) => {
      return { value: item.strCategory, text: item.strCategory };
    });
    this.categoriesList = [
      { value: null, text: "Please select an option", disabled: true },
      ...this.categoriesList,
    ];
    this.alcList = filtersList.alcFilter.map((item) => {
      return { item: item.strAlcoholic, name: item.strAlcoholic };
    });
    this.glassList = filtersList.glassFilter.map((item) => {
      return { value: item.strGlass, text: item.strGlass };
    });
  },
  methods: {
    ...mapActions(["getFilters", "addProduct"]),
    async onSubmit() {
      const productId = Math.floor(Math.random() * 100000);
      const productData = {
        idDrink: productId,
        strDrink: this.name,
        strCategory: this.category,
        strAlcoholic: this.alc,
        strGlass: this.glass,
        strDrinkThumb: this.imgLink,
      };
      try {
        await this.addProduct(productData);
        this.$bvToast.toast(`Product ${this.name} was successfully created`, {
          autoHideDelay: 3000,
          toaster: "b-toaster-top-center",
          "append-toast": true,
        });
        this.$refs.form.reset();
      } catch (e) {
        this.$bvToast.toast(e.response.data.error.message, {
          autoHideDelay: 3000,
          toaster: "b-toaster-top-center",
          "append-toast": true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  width: 57.2%;
  margin: auto;
}

.add-product__form h2 {
  margin-bottom: 20px;
  margin-top: 40px;
}

.form-control--custom,
.form-select--custom {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 20px;
  padding: 21px 20px 21px 20px;
}

.radio-container,
.select-container {
  padding-left: 10px;
}

.radio-container p,
.select-container p {
  margin-bottom: 10px;
  opacity: 0.5;
}

.custom-file-input {
  border-radius: 100px;
}

.btn--add-product {
  margin: auto;
  margin-top: 20px;
}

.add-product__img {
  width: 40%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
