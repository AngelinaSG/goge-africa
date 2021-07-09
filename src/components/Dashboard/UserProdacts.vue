<template>
  <div class="container products__container">
    <h2 class="text-center">Your products</h2>
    <ul class="courses__list">
      <li
        class="courses-section__card-col"
        v-for="product in products"
        :key="product.idDrink"
      >
        <div class="card courses-section__card">
          <img :src="product.strDrinkThumb" class="card-img-top" alt="" />
          <span
            v-show="product.strAlcoholic"
            class="courses__label gradient-background bold text-white"
            >{{ product.strAlcoholic }}</span
          >
          <div class="card-body gradient-background">
            <a href="#" class="bold text-white">
              <p class="card-text">
                {{ product.strDrink }}
              </p>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [],
  }),
  async mounted() {
    let productList = await this.$api.products.getProducts();
    this.products = productList.data;
  },
};
</script>

<style lang="scss" scoped>
.courses__container {
  padding-bottom: 254px;
}

.courses-section__cards-section {
  width: 69.9%;
  margin-right: 63px;
}

.courses__list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  transition: all 0.5s ease-in;
}

.courses-section__card-col {
  width: 32.666%;
  margin-right: 9px;
  border-radius: 10px;
}

.courses-section__card-col:nth-child(3n) {
  margin-right: 0;
}

.courses-section__card {
  border: none;
  border-radius: 10px;
  line-height: 152.34%;
  margin-bottom: 15px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  position: relative;
}

.courses-section__card:hover {
  box-shadow: 0 5px 5px rgb(160, 121, 0, 0.5);
}

.card-body {
  border-radius: 0 0 10px 10px;
  min-height: 4.5625rem;
  max-height: 4.5625rem;
  padding-left: 30px;
  padding-top: 15px;
}

.courses-section__card > .card-img-top {
  border-radius: 10px 10px 0 0;
}

.card-img-top {
  height: 206px;
  object-fit: cover;
  aspect-ratio: 1.2 / 1;
}

.courses__row {
  align-items: flex-start;
  padding-left: 171px;
}

.card-text {
  width: 70%;
}

.courses__label {
  max-width: max-content;
  min-width: 70px;
  padding: 7px 14px;
  height: 33px;
  position: absolute;
  right: 0;
  border-radius: 0 10px 0 10px;
}

.products__container h2 {
  margin-bottom: 40px;
}
</style>
