<template>
  <div class="container contact-us__container">
    <div class="row contact-us__row">
      <div class="col col-lg-6 contact-us__img"></div>
      <div class="col contact-us__text">
        <h2 class="section-title contact-us__section-title">
          Let’s Build Something Great Together
        </h2>
        <p>
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for Individual, Advertising & Media
          Specialist, Online Marketing Professionals, Freelancers and anyone
          looking to pursue a career in digital marketing, Accounting, Web
          development, Programming. Multimedia and CAD design.
        </p>
        <button type="button" class="btn btn--gradient-bg">Let’s Talk!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contact-us__container {
  background: url("~@/assets/pictures/conactus_bg.svg") 0 69px no-repeat,
    url("~@/assets/pictures/conact_us_bg2.svg") 0 21px no-repeat;
}

.contact-us__img {
  background: url("~@/assets/pictures/contactus_img_placeholder.svg") 0 243px
      no-repeat,
    url("~@/assets/pictures/contactus_img_bg.svg") 0 253px no-repeat;
  margin-right: 60px;
}

.contact-us__text {
  margin-top: 439px;
  margin-bottom: 66px;
  max-width: 29.733333%;
}

.contact-us__section-title {
  width: 67.4887%;
  margin-bottom: 29px;
}

.contact-us__text > p {
  line-height: 175.78%;
  width: 106%;
  margin-bottom: 37px;
}

@media screen and (max-width: 768px) {
  .contact-us__row {
    justify-content: center;
  }
  .contact-us__img {
    display: none;
  }

  .contact-us__text {
    max-width: 80%;
    text-align: center;
    margin-top: 66px;
  }

  .contact-us__section-title {
    width: 100%;
    margin-bottom: 29px;
  }
}
</style>
