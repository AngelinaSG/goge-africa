<template>
  <div class="container courses-section__container">
    <h2 class="bold gradient-text-color text-center">Cocktails</h2>
    <div class="row courses-section__cards-section justify-content-center">
      <ul class="courses__list">
        <li
          class="courses-section__card-col"
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
        >
          <a @click.prevent="toProduct($event, cocktail.idDrink)">
            <div class="card courses-section__card">
              <img :src="cocktail.strDrinkThumb" class="card-img-top" alt="" />
              <button
                class="btn btn--gradient-bg btn--add-to-cart"
                @click="addToCartById(cocktail.idDrink, cocktail.strDrink)"
                v-b-tooltip
                title="Add to cart"
                v-b-tooltip.hover.v-secondary
              ></button>
              <div class="card-body gradient-background">
                <a href="#" class="bold text-white">
                  <p class="card-text">
                    {{ cocktail.strDrink }}
                  </p>
                </a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="row justify-content-center">
      <button
        type="button"
        class="btn gradient-background"
        @click="$router.push('/course')"
      >
        All Beers
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CoursesSection",
  data: () => ({
    coursesList: [],
    cocktails: [],
  }),
  computed: {
    ...mapGetters(["courses"]),
  },
  async mounted() {
    this.coursesList = this.courses;
    this.cocktails = await this.getCocktails();
  },
  methods: {
    ...mapActions(["getCocktails", "addToCart"]),
    addToCartById(cocktailId, cocktailName) {
      this.addToCart(cocktailId);
      this.$message(`${cocktailName} was added to cart!`);
    },
    toProduct(e, productId) {
      if (e.target.classList.value.includes("btn")) return;
      this.$router.push(this.$AFRICA_ROUTES.PRODUCT_PAGE(productId));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.courses-section__container {
  padding-top: 111px;
  padding-bottom: 99px;
}

.courses-section__cards-section {
  padding-top: 86px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.courses__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  justify-content: center;
}

.courses-section__card-col {
  padding-right: 0;
  padding-left: 0;
  margin-left: 0.6%;
  min-width: 20.25%;
  border-radius: 0.7rem;
}

.courses-section__card {
  border: none;
  border-radius: 0.7rem;
  line-height: 152.34%;
  margin-bottom: 14px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
}

.courses-section__card:hover {
  box-shadow: 0 5px 5px rgb(160, 121, 0, 0.5);
}

.btn--add-to-cart {
  position: absolute;
  top: 15px;
  right: 15px;
  max-width: 46px;
  max-height: 46px;
  background: url("~@/assets/pictures/course_add-to-cart-icon.svg") 50% 50%
      no-repeat,
    orange;
  opacity: 0;
}

.courses-section__card:hover .btn--add-to-cart {
  opacity: 1;
  transition: opacity 0.3s;
}

.courses-section__card > .card-img-top {
  border-radius: 0.7rem 0.7rem 0 0;
}

.card-img-top {
  height: 205px;
  object-fit: cover;
}

.card-body {
  border-radius: 0 0 0.7rem 0.7rem;
  min-height: 4.5625rem;
  max-height: 4.5625rem;
  padding-left: 30px;
  padding-top: 15px;
}

.card-text {
  width: 70%;
}

@media screen and (max-width: 768px) {
  .courses-section__cards-section {
    padding-top: 20px;
  }

  .courses-section__container {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .courses-section__card-col {
    min-width: 40%;
  }
}

@media screen and (max-width: 376px) {
  .card-img-top {
    height: 100px;
  }

  .card-text {
    width: 100%;
  }

  .card-body {
    padding: 10px;
  }
}
</style>
