<template>
  <div class="container testimonials__container">
    <div class="row justify-content-center">
      <div class="testimonials__text text-center">
        <h2 class="bold gradient-text-color testimonials__title">
          What Students Say
        </h2>
        <p class="testimonials__description">
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for Individual, Advertising & Media
          Specialist,.
        </p>
      </div>
    </div>

    <div class="row">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner testimonials-carousel__row">
          <div class="carousel-item active">
            <div class="row testimonials-carousel__inner-row">
              <div class="card testimonials__card">
                <div class="card-body">
                  <p class="testimonials__card-text">
                    Semaj Africa is an online education platform that delivers
                    video courses, programs and resources for Individual,
                    Advertising & Media Specialist, Online Marketing
                    Professionals, Freelancers and anyone.
                  </p>
                  <div class="row">
                    <img
                      src="~@/assets/pictures/testimonials_photo.png"
                      alt=""
                      class="testimonials__card-photo rounded-circle"
                    />
                    <div class="row flex-column justify-content-center">
                      <h5 class="bold testimonials__author">Arthur Broklyn</h5>
                      <p class="testimonials__author-cat">
                        Categories: 3d Modelling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card testimonials__card">
                <div class="card-body">
                  <p class="testimonials__card-text">
                    Semaj Africa is an online education platform that delivers
                    video courses, programs and resources for Individual,
                    Advertising & Media Specialist, Online Marketing
                    Professionals, Freelancers and anyone.
                  </p>
                  <div class="row">
                    <img
                      src="~@/assets/pictures/testimonials_photo.png"
                      alt=""
                      class="testimonials__card-photo rounded-circle"
                    />
                    <div class="row flex-column justify-content-center">
                      <h5 class="bold testimonials__author">Arthur Broklyn</h5>
                      <p class="testimonials__author-cat">
                        Categories: 3d Modelling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card testimonials__card">
                <div class="card-body">
                  <p class="testimonials__card-text">
                    Semaj Africa is an online education platform that delivers
                    video courses, programs and resources for Individual,
                    Advertising & Media Specialist, Online Marketing
                    Professionals, Freelancers and anyone.
                  </p>
                  <div class="row">
                    <img
                      src="~@/assets/pictures/testimonials_photo.png"
                      alt=""
                      class="testimonials__card-photo rounded-circle"
                    />
                    <div class="row flex-column justify-content-center">
                      <h5 class="bold testimonials__author">Arthur Broklyn</h5>
                      <p class="testimonials__author-cat">
                        Categories: 3d Modelling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card testimonials__card">
                <div class="card-body">
                  <p class="testimonials__card-text">
                    Semaj Africa is an online education platform that delivers
                    video courses, programs and resources for Individual,
                    Advertising & Media Specialist, Online Marketing
                    Professionals, Freelancers and anyone.
                  </p>
                  <div class="row">
                    <img
                      src="~@/assets/pictures/testimonials_photo.png"
                      alt=""
                      class="testimonials__card-photo rounded-circle"
                    />
                    <div class="row flex-column justify-content-center">
                      <h5 class="bold testimonials__author">Arthur Broklyn</h5>
                      <p class="testimonials__author-cat">
                        Categories: 3d Modelling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card testimonials__card">
              <div class="card-body">
                <p class="testimonials__card-text">
                  Semaj Africa is an online education platform that delivers
                  video courses, programs and resources for Individual,
                  Advertising & Media Specialist, Online Marketing
                  Professionals, Freelancers and anyone.
                </p>
                <div class="row">
                  <img
                    src="~@/assets/pictures/testimonials_photo.png"
                    alt=""
                    class="testimonials__card-photo rounded-circle"
                  />
                  <div class="row flex-column justify-content-center">
                    <h5 class="bold testimonials__author">Arthur Broklyn</h5>
                    <p class="testimonials__author-cat">
                      Categories: 3d Modelling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.testimonials__container {
  padding-top: 97px;
}

.testimonials__text {
  width: 39%;
}

.testimonials__title {
  margin-bottom: 1.875rem;
}

.testimonials__description {
  line-height: 175.78%;
}

.carousel {
  width: 100%;
}

.carousel-indicators {
  width: 160px;
  height: 7px;
  background: #5c5c5c;
  border-radius: 10px;
  margin: auto;
}

.carousel-indicators li {
  margin-left: 0;
  margin-right: 0;
  width: 80px;
  height: 7px;
  border-top: 0;
  border-bottom: 0;
  border-radius: 10px;
  opacity: 1;
  background: #5c5c5c;
}

.carousel-indicators li.active {
  background: linear-gradient(to right, $orange, $yellow);
}

.testimonials-carousel__row {
  padding-top: 75px;
  padding-bottom: 95px;
}

.testimonials-carousel__inner-row {
  margin-left: -18px;
  margin-right: -34px;
}

.testimonials__card {
  min-height: 343px;
  width: 23.3125rem;
  position: relative;
  border: 1px solid #efefef;
  border-radius: 5px;
  margin-right: 20px;
  opacity: 50%;
}

.testimonials__card:hover {
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  opacity: 1;
}

.testimonials__card:nth-of-type(4) {
  margin-right: 0;
}

.testimonials__card::after {
  content: url("~@/components/icons/IconQuote.svg");
  position: absolute;
  top: 11%;
  left: 10.37%;
}

.testimonials__card .card-body {
  padding-left: 2.375rem;
}

.testimonials__card-text {
  width: 90%;
  padding-top: 66px;
  padding-bottom: 44px;
  line-height: 175.78%;
}

.testimonials__card-photo {
  width: 15.55%;
  margin-left: 18px;
  margin-right: 2px;
}

.testimonials__card-photo + .row {
  margin-left: 11.67px;
}

.testimonials__author {
  padding-top: 7px;
}

.testimonials__author-cat {
  font-size: 0.75rem;
}

@media screen and (max-width: 768px) {
  .testimonials__text {
    width: 80%;
  }

  .testimonials__card {
    opacity: 1;
    margin-bottom: 20px;
  }

  .testimonials__card:nth-child(2n) {
    margin-right: 0;
  }

  .testimonials-carousel__inner-row {
    margin-left: 0;
    margin-right: 0;
  }

  .testimonials-carousel__row {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
