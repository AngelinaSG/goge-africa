<template>
  <div class="container prices__container">
    <div class="row">
      <div class="prices__description">
        <h2 class="section-title">
          Our <span class="d-block">Pricing Plans</span>
        </h2>
        <p>
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for
        </p>
        <button type="button" class="btn gradient-background">
          Start Free Trial
        </button>
      </div>

      <div class="card prices__card">
        <div class="card-body">
          <div class="card-text">
            <h4>Premium</h4>
            <p class="prices__plan-price">
              <sup class="black-text-color">$</sup
              ><span class="gradient-text-color bold prices__card-price"
                >15</span
              >
              <span class="black-text-color prices__card-span">/Monthly</span>
            </p>
            <p>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for
            </p>
            <ul class="prices__plan-list">
              <li>Unlimited Download</li>
              <li>Offline Accessibility</li>
              <li>24/7 Supports</li>
              <li>Jobs Opportunity</li>
              <li>2.0% Transaction Fee</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card prices__card prices__card-2">
        <div class="card-body">
          <div class="card-text">
            <h4>Premium</h4>
            <p class="prices__plan-price">
              <sup class="black-text-color">$</sup
              ><span class="gradient-text-color bold prices__card-price"
                >120</span
              >
              <span class="black-text-color prices__card-span">/Annually</span>
            </p>
            <p>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for
            </p>
            <ul class="prices__plan-list">
              <li>Unlimited Download</li>
              <li>Offline Accessibility</li>
              <li>24/7 Supports</li>
              <li>Jobs Opportunity</li>
              <li>2.0% Transaction Fee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
};
</script>

<style lang="scss" scoped>
.prices__container {
  padding-top: 136px;
  padding-left: 247px;
  background-image: url("~@/assets/pictures/prices_bg_rectangle.png");
  background-repeat: no-repeat;
  background-position: left -91px;
}

.prices__description {
  width: 28%;
  margin-right: 95px;
  margin-top: 106px;
}

.prices__description h2 {
  margin-bottom: 2rem;
}

.prices__description p {
  line-height: 175.78%;
  margin-bottom: 2.25rem;
}

.prices__card {
  width: 21.7%;
  border: 1px solid #efefef;
  border-radius: 5px;
  font-size: 0.625rem;
  background: url("~@/assets/pictures/prices_card-bg.svg") no-repeat bottom
    right;
  margin-right: 24px;
}

.prices__card:hover {
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
}

.prices__card h4 {
  line-height: 2.625rem;
  margin-bottom: 4.5rem;
}

.prices__card .card-body {
  padding: 2.3125rem 2.5rem 4.75rem 2.3125rem;
}

.prices__plan-price {
  line-height: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.prices__plan-price + p {
  line-height: 175.78%;
}

.prices__plan-price sup {
  font-size: 1.5rem;
  top: -4.4375rem;
}
.prices__card-span {
  font-size: 17px;
  white-space: nowrap;
  text-align: right;
  position: absolute;
  top: 1.5625rem;
  left: 7.8125rem;
}

.prices__card-price {
  font-size: clamp(12px, 10 * (1vw + 1vh) / 2, 101px);
  margin-left: -5px;
}

.prices__card-2 .prices__card-price {
  margin-left: -4px;
}

.prices__card-2 .prices__card-span {
  top: 2.9375rem;
  left: 7.3125rem;
}

.prices__card-2 .prices__plan-price {
  margin-bottom: 2.3125rem;
}

.prices__plan-list {
  margin-top: 1.5625rem;
  margin-bottom: 0;
  padding-inline-start: 0;
  list-style: none;
}

.prices__plan-list > li {
  margin-bottom: 0.75rem;
  background: url("~@/assets/pictures/prices_list_marker.svg") no-repeat left
    center;
  padding-inline-start: 1.3125rem;
}

.prices__plan-list > li:last-of-type {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .prices__container {
    padding-top: 0;
    padding-left: 0;
  }

  .prices__container > .row {
    justify-content: center;
  }

  .prices__description {
    width: 80%;
    margin-right: 0;
    margin-bottom: 40px;
    text-align: center;
  }

  .prices__card {
    width: 40%;
  }

  .prices__card-2 {
    margin-right: 0;
  }

  .prices__card-price {
  }
}
</style>
