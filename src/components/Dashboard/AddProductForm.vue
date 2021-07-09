<template>
  <form class="add-product__form" @submit.prevent="onSubmit()">
    <h2 class="text-center">Fill in product details</h2>
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Title"
        v-model.trim="name"
      />

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Category"
        v-model.trim="category"
      />

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Alcohol"
        v-model.trim="alc"
      />

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Glass"
        v-model.trim="glass"
      />

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Image link htttps://"
        v-model="imgLink"
      />
      <div class="row">
        <button class="btn btn--gradient-bg btn--add-product">
          Add Product
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    file: null,
    name: "",
    category: "",
    alc: "",
    glass: "",
    imgLink: "",
  }),
  methods: {
    onSubmit() {
      const productId = Math.floor(Math.random() * 100000);
      const productData = {
        idDrink: productId,
        strDrink: this.name,
        strCategory: this.category,
        strAlcoholic: this.alc,
        strGlass: this.glass,
        strDrinkThumb: this.imgLink,
      };
      console.log(productData);
      this.$api.products.addProduct(productData);
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
}

.form-control--custom {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 20px;
  padding: 21px 0 21px 20px;
}

.custom-file-input {
  border-radius: 100px;
}

.btn--add-product {
  margin: auto;
  margin-top: 20px;
}
</style>
