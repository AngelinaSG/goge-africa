<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";

#app {
  color: $black;
}

p {
  margin-bottom: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

.bold {
  font-weight: 900;
}

.semibold {
  font-weight: 700;
}

.black-text-color {
  color: $black;
}

.yellow-text-color {
  color: $yellow;
}

.orange-text-color {
  color: $orange;
}

.gradient-text-color {
  background: linear-gradient(to right, $orange, $yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.beige-text-color {
  color: $beige;
}

.section-title {
  line-height: 158.34%;
  background: linear-gradient(to right, $orange, $yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.gradient-background {
  background: linear-gradient(to right, $orange, $yellow);
}

.beige-background {
  background-color: $beige;
}

.container {
  max-width: 1500px;
}

.btn {
  width: 160px;
  height: 56px;
  border-radius: 100px;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white;
  box-shadow: 0 12px 35px rgba(160, 121, 0, 0.2);
  border: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    text-shadow 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background 0.15s ease-in-out;
}

.btn--gradient-bg {
  background: linear-gradient(to right, $orange, $yellow);
}

.btn:hover,
.btn:focus {
  color: $white;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.5);
  text-shadow: 0 0 3px $white;
  outline: none;
}

@media screen and (max-width: 376px) {
  html {
    font-size: 12px;
    line-height: 100%;
  }
}
</style>
