<template>
  <div>
    <div class="container">
      <div class="row search-form__row">
        <form
          class="form-group hero-section__search-form gradient-background"
          @input="onSearchInput"
          @submit.prevent="searchItem"
        >
          <input
            class="form-control hero-section__search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchValue"
          />
        </form>
      </div>
    </div>

    <div class="container courses__container">
      <div class="row courses__row">
        <div class="row courses-section__cards-section">
          <div class="courses__filter-controls">
            <button
              class="courses__filter-btn filter-btn--bullet"
              @click="displayList('bullet')"
              :class="bulletActiveClass"
            ></button>
            <button
              class="courses__filter-btn filter-btn--grid"
              @click="displayList('grid')"
              :class="gridActiveClass"
            ></button>
          </div>

          <CartsPlaceholders v-if="isLoading" />

          <b-alert v-else-if="nothingFounded" show variant="danger"
            >No results were found for {{ searchValue }}</b-alert
          >

          <ul class="courses__list" v-else-if="isGrid">
            <li
              class="courses-section__card-col"
              v-for="cocktail in cocktails"
              :key="cocktail.idDrink"
            >
              <router-link
                :to="{ name: 'ProductPage', params: { id: cocktail.idDrink } }"
              >
                <div class="card courses-section__card">
                  <img
                    :src="cocktail.strDrinkThumb"
                    class="card-img-top"
                    alt=""
                  />
                  <button
                    class="btn btn--gradient-bg btn--add-to-cart"
                    title="Add to Cart"
                    @click="toCart(cocktail.idDrink, cocktail.strDrink)"
                  ></button>
                  <span
                    v-show="cocktail.strAlcoholic"
                    class="courses__label gradient-background bold text-white"
                    >{{ cocktail.strAlcoholic }}</span
                  >
                  <div class="card-body gradient-background">
                    <router-link
                      :to="{
                        name: 'ProductPage',
                        params: { id: cocktail.idDrink },
                      }"
                      class="bold text-white"
                    >
                      <p class="card-text">
                        {{ cocktail.strDrink }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>

          <BulletList
            :cocktails="cocktails"
            v-else-if="!isGrid"
            @onBuy="toCart"
          />
        </div>

        <div class="courses__category-filter" ref="categories">
          <ul class="courses__filter-list">
            <h3 class="semibold">Category</h3>
            <button
              class="filter-list__btn"
              @click="showCategories"
              ref="category-btn"
            ></button>
            <form @change="onChooseCategory($event)">
              <li>
                <span>Alcohol</span>
                <div
                  class="form-check"
                  v-for="cat in alcFilterCat"
                  :key="cat.strAlcoholic"
                >
                  <input
                    type="radio"
                    :id="cat.strAlcoholic"
                    class="form-check-input"
                    v-model="alcFilter"
                    :value="cat.strAlcoholic"
                  />
                  <label :for="cat.strAlcoholic" class="form-check-label">{{
                    cat.strAlcoholic
                  }}</label>
                </div>
              </li>
              <li>
                <span>Category</span>
                <div
                  class="form-check"
                  v-for="cat in catFilterCat"
                  :key="cat.strCategory"
                >
                  <input
                    type="radio"
                    :id="cat.strCategory"
                    class="form-check-input"
                    v-model="catFilter"
                    :value="cat.strCategory"
                  />
                  <label :for="cat.strCategory" class="form-check-label">{{
                    cat.strCategory
                  }}</label>
                </div>
              </li>
              <li>
                <span>Glass</span>
                <div
                  class="form-check"
                  v-for="cat in glassFilterCat"
                  :key="cat.strGlass"
                >
                  <input
                    type="radio"
                    :id="cat.strGlass"
                    class="form-check-input"
                    v-model="glassFilter"
                    :value="cat.strGlass"
                  />
                  <label :for="cat.strGlass" class="form-check-label">{{
                    cat.strGlass
                  }}</label>
                </div>
              </li>
            </form>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartsPlaceholders from "@/components/app/CartsPlaceholders";
import BulletList from "./BulletList";
import { mapActions } from "vuex";

export default {
  name: "CoursesList",
  components: {
    CartsPlaceholders,
    BulletList,
  },
  data: () => ({
    courses: [],
    searchValue: "",
    cocktails: [],
    alcFilterCat: [],
    catFilterCat: [],
    glassFilterCat: [],
    alcFilter: "",
    catFilter: "",
    glassFilter: "",
    isLoading: false,
    nothingFounded: false,
    isGrid: true,
    gridActiveClass: "filter-btn--grid--active",
    bulletActiveClass: "",
  }),
  async mounted() {
    this.isLoading = true;
    this.showCategories();
    this.courses = this.$store.getters.courses;
    this.cocktails = await this.getCocktails();
    this.isLoading = false;
    const filters = await this.getFilters();
    this.alcFilterCat = filters.alcFilter;
    this.catFilterCat = filters.catFilter;
    this.glassFilterCat = filters.glassFilter;
  },
  methods: {
    ...mapActions([
      "getCocktails",
      "getFilters",
      "getCocktailBySearchValue",
      "getItemsByFilter",
      "addToCart",
    ]),
    displayList(type) {
      if (type === "bullet") {
        this.isGrid = false;
        this.gridActiveClass = "";
        this.bulletActiveClass = "filter-btn--bullet--active";
      } else {
        this.isGrid = true;
        this.bulletActiveClass = "";
        this.gridActiveClass = "filter-btn--grid--active";
      }
    },
    showCategories() {
      this.$refs["categories"].classList.toggle("hide-categories");
      this.$refs["category-btn"].classList.toggle("rotate");
    },
    async onSearchInput() {
      this.isLoading = true;
      this.nothingFounded = false;
      if (!this.searchValue) {
        this.isLoading = false;
        this.cocktails = await this.getCocktails();
      }
    },
    async searchItem() {
      try {
        let cock = await this.getCocktailBySearchValue(this.searchValue);
        this.cocktails = cock;
        if (this.cocktails === null) {
          this.nothingFounded = true;
        }
      } catch (e) {
        console.log(e.response.data);
      }
      this.isLoading = false;
    },
    async onChooseCategory(e) {
      this.nothingFounded = false;
      this.isLoading = true;
      if (e.target.value === this.glassFilter) {
        const filterCocktail = await this.getItemsByFilter({
          glassFilter: this.glassFilter,
        });
        this.cocktails = filterCocktail;
      }
      if (e.target.value === this.catFilter) {
        const filterCocktail = await this.getItemsByFilter({
          catFilter: this.catFilter,
        });
        this.cocktails = filterCocktail;
      }
      if (e.target.value === this.alcFilter) {
        const filterCocktail = await this.getItemsByFilter({
          alcFilter: this.alcFilter,
        });
        this.cocktails = filterCocktail;
      }
      this.isLoading = false;
    },

    toCart(cocktailId, cocktailName) {
      this.addToCart(cocktailId);
      this.$message(`${cocktailName} was added to cart!`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.search-form__row {
  justify-content: center;
}

.hero-section__search-form {
  margin-top: 87px;
  margin-bottom: 75px;
  width: 79.1%;
  padding-top: 18.5px;
  padding-right: 17px;
  padding-bottom: 25px;
  padding-left: 2.875rem;
  border-radius: 10px;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  position: relative;
}

.hero-section__search:focus {
  border-bottom: none;
  box-shadow: none;
}

.hero-section__search {
  background-color: transparent;
  color: #fff;
  font-size: 0.875rem;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  padding: 0.375rem 0 0.375rem 3.75rem;
  transition: all 0.2s ease;
}

.hero-section__search-form::before {
  content: url("~@/assets/pictures/course-page_search-icon.svg");
  position: absolute;
  top: 24px;
  left: 43px;
}

.hero-section__search::placeholder {
  color: #fff;
}

.courses__category-filter {
  width: 17%;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 9px 0 11px 0;
  transition: height 1s ease-in-out;
}

.courses__filter-list {
  list-style-type: none;
  padding-inline-start: 0;
  margin-bottom: 0;
  position: relative;
}

.courses__filter-list > h3 {
  margin-bottom: 10px;
  padding-left: 25px;
}

.courses__filter-list li {
  margin-bottom: 10px;
}

.courses__filter-list li {
  margin-bottom: 7px;
  width: 100%;
  padding-top: 9px;
  padding-bottom: 9px;
  transition: all 0.2s ease;
  font-size: 1rem;
  margin-bottom: 0;
}

.courses__filter-list li .form-check {
  padding-left: 48px;
}
.courses__filter-list li span {
  padding-left: 28px;
  margin-bottom: 10px;
}

.courses__filter-list li .form-check:hover {
  color: white;
  background: linear-gradient(to right, $orange, $yellow);
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

.courses__filter-list li:last-child {
  margin-bottom: 0;
}

.filter-list__btn {
  border: none;
  width: 14px;
  height: 8px;
  background-color: transparent;
  background-image: url("~@/assets/pictures/filter_arrow-icon.svg");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 8px;
  right: 14px;
  transition: transform 0.5s ease-in-out;
}

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

.courses__filter-btn {
  border: none;
  width: 20.92px;
  height: 20.92px;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background 0.5s ease;
}

.filter-btn--bullet {
  background-image: url("~@/assets/pictures/courses_bullet-list-icon.svg");
  margin-right: 15px;
}

.filter-btn--bullet--active {
  background-image: url("~@/assets/pictures/courses_bullet-list-active-icon.svg");
}

.filter-btn--grid {
  background-image: url("~@/assets/pictures/courses_grid-interface-disabled-icon.svg");
  width: 22px;
}

.filter-btn--grid--active {
  background-image: url("~@/assets/pictures/courses_grid-interface-icon.svg");
}

.courses__filter-controls {
  width: 100%;
  margin-bottom: 38px;
  display: flex;
  justify-content: flex-end;
}

.hide-categories {
  max-height: 40px;
  overflow: hidden;
}

.rotate {
  transform: rotate(0.5turn);
  transition: transform 0.5s ease-in-out;
}

.btn--add-to-cart {
  position: absolute;
  top: 15px;
  left: 15px;
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

@media screen and (max-width: 1024px) {
  .courses__container {
    padding-bottom: 100px;
  }

  .courses__row {
    padding-left: 40px;
  }

  .courses__list {
    justify-content: space-between;
  }

  .courses-section__card-col {
    width: 45%;
    margin-right: 9px;
    border-radius: 10px;
  }

  .courses-section__cards-section {
    margin-right: 15px;
  }

  .courses__category-filter {
    width: min-content;
    padding: 5px;
  }

  .courses-section__card-col:nth-child(3n) {
    margin-right: 9px;
  }

  .courses-section__card-col:nth-child(2n) {
    margin-right: 0;
  }

  .card-img-top {
    height: 150px;
  }

  .card-body {
    border-radius: 0 0 10px 10px;
    min-height: 4.5625rem;
    max-height: 4.5625rem;
    padding-left: 15px;
    padding-top: 15px;
  }

  .card-text {
    width: 100%;
  }

  .courses__filter-list > h3,
  .courses__filter-list li {
    padding-left: 10px;
  }
}

@media screen and (max-width: 376px) {
  .hero-section__search-form {
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 10px;
  }

  .hero-section__search-form::before {
    top: 15px;
    left: 35px;
  }

  .courses__category-filter {
    order: -1;
    width: 90%;
    margin-bottom: 40px;
  }

  .courses-section__cards-section {
    margin: 0;
    width: 90%;
  }

  .courses__row {
    padding-left: 0;
    justify-content: center;
    margin: 0;
  }

  .courses-section__card-col {
    width: 48%;
  }

  .card-img-top {
    height: 100px;
  }

  .courses__label {
    max-width: 60px;
    min-width: 35px;
    padding: 3px 7px;
    height: 20px;
    opacity: 0.8;
  }

  .card-body {
    border-radius: 0 0 10px 10px;
    min-height: 4.5625rem;
    max-height: 4.5625rem;
    padding: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .courses__container {
    padding-bottom: 100px;
  }
}
</style>
