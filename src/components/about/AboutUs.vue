<template>
  <div class="about-section beige-background">
    <div class="container container-xl">
      <Features />
      <div class="row about-section__row">
        <div class="col col-lg-6 about-section__img"></div>
        <div class="col about-section__text">
          <h2 class="gradient-text-color about-section__title">
            Learn A Skill.
            <span class="d-block">Build Your Portfolio.</span>
            <span class="bold gradient-text-color">Get Hired!</span>
          </h2>
          <p class="about-section__description">
            Semaj Africa is an online education platform that delivers video
            courses, programs and resources for Individual, Advertising & Media
            Specialist, Online Marketing Professionals, Freelancers and anyone
            looking to pursue a career in digital marketing, Accounting, Web
            development, Programming. Multimedia and CAD design.
          </p>
          <button type="button" class="btn btn--gradient-bg">Discover</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from "@/components/about/Features";

export default {
  name: "AboutUs",
  components: {
    Features,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.about-section__row {
}

.about-section__title {
  line-height: 158.34%;
  margin-bottom: 1.5625rem;
}

.about-section__text {
  max-width: 25.8%;
  line-height: 175.78%;
  padding-top: 93px;
  padding-bottom: 123px;
}

.about-section__img {
  background-image: url("~@/assets/pictures/about_bg_image_placeholder.png"),
    url("~@/assets/pictures/about_bg_element.png");
  background-repeat: no-repeat;
  margin-right: 6.8%;
  max-width: 52.333333%;
  flex: 0 0 52.333333%;
}

.about-section__img,
.about-section__text {
  padding-right: 0;
  padding-left: 0;
}

.about-section__description {
  margin-bottom: 32px;
}

.image {
  clip-path: fill-box;
}

span {
  display: block;
}

@media screen and (max-width: 768px) {
  .about-section__row {
    justify-content: center;
    text-align: center;
  }

  .about-section__img {
    display: none;
  }

  .about-section__text {
    max-width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
