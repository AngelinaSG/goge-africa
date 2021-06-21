<template>
  <div class="row features-section__row">
    <div class="features-section__col">
      <IconUnlimitedAccess
        class="features-section__icon features-section__icon-1"
      />
      <h3 class="features-section__title">Unlimited Access</h3>
      <p class="features-section__description">
        One subscription unlimited access
      </p>
    </div>
    <div class="features-section__col">
      <IconExpertTeacher
        class="features-section__icon features-section__icon-2"
      />
      <h3 class="features-section__title">Expert Teachers</h3>
      <p class="features-section__description">
        Learn from industry experts who are passionate about teaching.
      </p>
    </div>
    <div class="features-section__col">
      <IconLearnAnywhere
        class="features-section__icon features-section__icon-3"
      />
      <h3 class="features-section__title">Learn Anywhere</h3>
      <p class="features-section__description">
        Switch between your computer, tablet, or mobile device.
      </p>
    </div>
  </div>
</template>

<script>
import IconUnlimitedAccess from "@/components/icons/IconUnlimitedAccess";
import IconExpertTeacher from "@/components/icons/IconExpertTeacher";
import IconLearnAnywhere from "@/components/icons/IconLearnAnywhere";

export default {
  name: "Features",
  components: {
    IconUnlimitedAccess,
    IconExpertTeacher,
    IconLearnAnywhere,
  },
};
</script>

<style lang="scss" scoped>
.features-section__row {
  padding-top: 144px;
  padding-bottom: 141px;
  padding-left: 304px;
  padding-right: 289px;
  justify-content: space-between;
}

.features-section__col {
  max-width: 29%;
}

.features-section__col:nth-child(2) {
  margin-left: 19px;
}

.features-section__col:last-child {
  margin-right: 0;
}

.features-section__title {
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 147.7%;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 4px;
}

.features-section__description {
  line-height: 17px;
  text-align: center;
}

.features-section__icon {
  display: block;
  margin: auto;
  margin-bottom: 23px;
}

.features-section__icon-1 {
  margin-left: 50px;
}

.features-section__icon-2 {
  margin-left: 66px;
  margin-top: 2px;
  margin-bottom: 27px;
}

.features-section__icon-2 + .features-section__title,
.features-section__icon-3 + .features-section__title {
  margin-bottom: 8px;
}

.features-section__icon-3 {
  margin-left: 58px;
  margin-top: 2px;
}

@media screen and (max-width: 768px) {
  .features-section__row {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
  }

  .features-section__icon {
    margin: auto;
  }
}

@media screen and (max-width: 376px) {
  .features-section__row {
    justify-content: space-between;
  }
  .features-section__col:nth-child(2) {
    margin-left: 0;
  }
  .features-section__icon {
    width: 50%;
    margin-left: 17px;
  }
}
</style>
