<template>
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
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.hero-section__container {
  position: relative;
  padding: 100px 156px 104px 171px;
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
  font-size: 2.75rem;
  line-height: 158.34%;
  width: 45.6%;
  margin-bottom: 22px;
}

.hero-section__title + p {
  width: 38%;
  font-size: 1.125rem;
  line-height: 2.0625rem;
}

@media screen and (max-width: 768px) {
  .hero-section__title,
  .hero-section__title + p {
    width: 100%;
    text-align: center;
  }

  .hero-section__container::before {
    content: url("~@/assets/pictures/course-page__bg-icons.svg");
    left: 50%;
    opacity: 0.5;
  }
}

@media screen and (max-width: 376px) {
  .hero-section__container {
    padding: 10%;
  }
}
</style>
