<template>
  <div class="hero-section gradient-background">
    <div class="container container-xl hero-section__container">
      <Slider />
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";

export default {
  name: "HeroSection",
  components: {
    Slider,
  },
};
</script>

<style scoped>
.hero-section__container {
  position: relative;
}

.hero-section__container::before {
  content: url("~@/assets/pictures/iconset_herosection.png");
  position: absolute;
  top: -8px;
  right: 203px;
}
</style>
