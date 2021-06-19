<template>
  <div
    id="carouselExampleControls"
    class="carousel slide hero-section-carousel"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block hero-section-carousel__img"
          src="@/assets/pictures/man-student.png"
          alt="Первый слайд"
        />
        <div class="carousel-caption">
          <h1 class="hero-section-carousel__title">
            Get Access to Unlimited Educational Resources. Everywhere,
            Everytime!
          </h1>
          <p class="hero-section-carousel__description">
            premium access to more than 10,000 resources ranging from courses,
            events e.t.c.
          </p>
          <button type="button" class="btn hero-section__btn">
            Get Access
          </button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block hero-section-carousel__img"
          src="@/assets/pictures/man-student.png"
          alt="Второй слайд"
        />
        <div class="carousel-caption">
          <h1 class="hero-section-carousel__title">
            Get Access to Unlimited Educational Resources. Everywhere,
            Everytime!
          </h1>
          <p class="hero-section-carousel__description">
            premium access to more than 10,000 resources ranging from courses,
            events e.t.c.
          </p>
          <button type="button" class="btn hero-section__btn">
            Get Access
          </button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="d-block hero-section-carousel__img"
          src="@/assets/pictures/man-student.png"
          alt="Третий слайд"
        />
        <div class="carousel-caption">
          <h1 class="hero-section-carousel__title">
            Get Access to Unlimited Educational Resources. Everywhere,
            Everytime!
          </h1>
          <p class="hero-section-carousel__description">
            premium access to more than 10,000 resources ranging from courses,
            events e.t.c.
          </p>
          <button type="button" class="btn hero-section__btn">
            Get Access
          </button>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <div class="carousel-control-prev-btn" aria-hidden="true">
        <span class="carousel-control-prev-icn gradient-text-color">◀</span>
      </div>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <div
        class="carousel-control-next-btn gradient-background"
        aria-hidden="true"
      >
        <span class="carousel-control-next-icn">▶</span>
      </div>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.carousel-caption {
  max-width: 34%;
  left: 11.5%;
  text-align: left;
  margin-bottom: 11%;
  color: $beige;
}

.hero-section-carousel__title {
  font-weight: 900;
  color: $beige;
  line-height: 158.34%;
  margin-bottom: 19px;
}

.hero-section-carousel__description {
  width: 88.8%;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2.0625rem;
}

.hero-section-carousel__img {
  margin-left: auto;
  width: 473px;
  height: 698px;
}

.hero-section__btn {
  background-color: $beige;
  color: $yellow;
  border-radius: 100px;
  margin-top: 27px;
}

.carousel-control-prev {
  left: 168px;
  top: 448px;
  width: auto;
}

.carousel-control-next {
  left: 215px;
  top: 550px;
  max-width: 46px;
  max-height: 46px;
}

.carousel-control-prev-btn {
  width: 30.67px;
  height: 30.67px;
  border-radius: 50%;
  background-color: $beige;
}

.carousel-control-prev-icn {
  font-size: 1rem;
  line-height: 30.67px;
}

.carousel-control-next-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.carousel-control-next-icn {
  font-size: 1rem;
  line-height: 46px;
}

@media screen and (max-width: 768px) {
  .carousel-caption {
    max-width: 66%;
    left: 2.5%;
    bottom: 1%;
  }
  .carousel-control-prev {
    left: 50%;
    transform: translateX(-160%);
    top: 80%;
  }
  .carousel-control-next {
    top: 86.5%;
    left: 50%;
    transform: translateX(20%);
  }
}
</style>
