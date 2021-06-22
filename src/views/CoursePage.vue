<template>
  <div>
    <div class="container hero-section__container gradient-background">
      <div class="row hero-section__row beige-text-color">
        <h2 class="hero-section__title text-white">
          Browse Thousands of Our Video Tutorials Curated Only for you.
        </h2>
        <p>
          Access all tutorials and resources when you become a premium member of
          <strong class="bold">Semaj Africa.</strong>
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row search-form__row">
        <div class="form-group hero-section__search-form gradient-background">
          <input
            class="form-control hero-section__search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
    </div>

    <div class="container courses__container">
      <div class="row courses__row">
        <div class="row courses-section__cards-section">
          <div class="courses__filter-controls">
            <button class="courses__filter-btn filter-btn--bullet"></button>
            <button class="courses__filter-btn filter-btn--grid"></button>
          </div>
          <ul class="courses__list">
            <li
              class="courses-section__card-col"
              v-for="course in courses"
              :key="course.title"
            >
              <div class="card courses-section__card">
                <img
                  src="~@/assets/pictures/aboutus_img.jpg"
                  class="card-img-top"
                  alt=""
                />
                <span
                  class="courses__label gradient-background bold text-white"
                  >{{ course.type }}</span
                >
                <div class="card-body gradient-background">
                  <a href="#" class="bold text-white">
                    <p class="card-text">
                      {{ course.title }}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="courses__category-filter" ref="categories">
          <ul class="courses__filter-list">
            <h3 class="semibold">Categories</h3>
            <button
              class="filter-list__btn"
              @click="showCategories"
              ref="category-btn"
            ></button>
            <li>Category Item</li>
            <li>Category Item</li>
            <li>Category Item</li>
            <li>Category Item</li>
            <li>Category Item</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePage",
  data: () => ({
    courses: [],
  }),
  mounted() {
    this.showCategories();
    this.courses = this.$store.getters.courses;
  },
  methods: {
    showCategories() {
      this.$refs["categories"].classList.toggle("hide-categories");
      this.$refs["category-btn"].classList.toggle("rotate");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.hero-section__container {
  position: relative;
  padding: 109px 156px 109px 156px;
}

.hero-section__row {
  flex-direction: column;
}

.hero-section__container::before {
  content: url("~@/assets/pictures/course-page__bg-icons.svg");
  position: absolute;
  top: 0;
  left: 862px;
}

.hero-section__title {
  font-weight: 900;
  line-height: 158.34%;
  width: 35.6%;
  margin-bottom: 26px;
}

.hero-section__title + p {
  width: 29.6%;
}

.search-form__row {
  justify-content: center;
}

.hero-section__search-form {
  margin-top: 87px;
  margin-bottom: 73px;
  width: 80.2%;
  padding: 24.35px;
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
  top: 30px;
  left: 46px;
}

.hero-section__search::placeholder {
  color: #fff;
}

.courses__category-filter {
  width: 15%;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 10px 0 25px 0;
  transition: height 1s ease-in-out;
}

.courses__filter-list {
  list-style-type: none;
  padding-inline-start: 0;
  margin-bottom: 0;
  position: relative;
}

.courses__filter-list > h3,
.courses__filter-list li {
  margin-bottom: 25px;
  padding-left: 25px;
}

.courses__filter-list li {
  margin-bottom: 7px;
  width: 100%;
  padding-top: 9px;
  padding-bottom: 9px;
  transition: all 0.2s ease;
}

.courses__filter-list li:hover {
  color: white;
  background: linear-gradient(to right, $orange, $yellow);
}

.courses__label {
  max-width: 88px;
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
  padding-left: 156px;
  padding-bottom: 254px;
}

.courses-section__cards-section {
  width: 67.55%;
  margin-right: 63px;
}

.courses__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
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
  margin-bottom: 14px;
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
}

.courses__row {
  align-items: flex-start;
}

.card-text {
  width: 70%;
}

.courses__filter-btn {
  border: none;
  width: 20.92px;
  height: 20.92px;
  background-color: transparent;
  background-image: url(/img/filter_arrow-icon.eccfa432.svg);
  background-position: center;
  background-size: cover;
}

.filter-btn--bullet {
  background-image: url("~@/assets/pictures/courses_bullet-list-icon.svg");
  margin-right: 15px;
}

.filter-btn--grid {
  background-image: url("~@/assets/pictures/courses_grid-interface-icon.svg");
}

.courses__filter-controls {
  margin-bottom: 43px;
  margin-left: auto;
}

.hide-categories {
  max-height: 40px;
  overflow: hidden;
}

.rotate {
  transform: rotate(0.5turn);
  transition: transform 0.5s ease-in-out;
}

.fade-enter-active {
  transition: all 1.3s;
}

.fade-leave-active {
  transition: all 1.3s;
}

.fade-enter {
  height: 40px;
}

.fade-leave-to {
  height: 40px;
}
</style>
