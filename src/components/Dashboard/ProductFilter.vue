<template>
  <div class="row justify-content-center product-filter__row">
    <b-dropdown
      id="dropdown"
      text="Category"
      ref="dropdown"
      class="m-2"
      variant="outline-warning"
      no-flip
    >
      <b-dropdown-form
        @input="filterProducts($event)"
        @submit.prevent="clearFilters"
      >
        <div class="radio-container">
          <p class="semibold">Category</p>
          <b-form-radio-group
            v-model="cat"
            :options="catList"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-radio-group>
        </div>

        <div class="radio-container">
          <p class="semibold">Alcohol</p>
          <b-form-radio-group
            v-model="alc"
            :options="alcList"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-radio-group>
        </div>

        <div class="radio-container">
          <p class="semibold">Glass</p>
          <b-form-radio-group
            v-model="glass"
            :options="glassList"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-radio-group>
        </div>
        <b-dropdown-divider></b-dropdown-divider>
        <button class="btn btn--gradient-bg">Reset All Filters</button>
      </b-dropdown-form>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  data: () => ({
    cat: "",
    alc: "",
    glass: "",
    catList: [],
    alcList: [],
    glassList: [],
  }),
  async mounted() {
    const filtersList = await this.$store.dispatch("getFilters");
    this.alcList = filtersList.alcFilter.map((item) => {
      return { item: item.strAlcoholic, name: item.strAlcoholic };
    });
    this.catList = filtersList.catFilter.map((item) => {
      return { item: item.strCategory, name: item.strCategory };
    });
    this.glassList = filtersList.glassFilter.map((item) => {
      return { item: item.strGlass, name: item.strGlass };
    });
  },
  methods: {
    filterProducts(e) {
      this.$emit("filterProducts", e.target.value);
      this.$refs.dropdown.hide();
    },
    clearFilters() {
      this.$emit("clearFilters");
      this.$refs.dropdown.hide();
      this.cat = "";
      this.alc = "";
      this.glass = "";
    },
  },
};
</script>

<style scoped>
.product-filter__row {
  padding: 20px;
}
</style>
