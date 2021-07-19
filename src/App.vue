<template>
  <div id="app">
    <Header />
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
  async mounted() {
    window.addEventListener('storage', this.checkAuth);
    const auth = JSON.parse(localStorage.getItem("logged_in"));
    if(auth) {
      this.changeAuth(true);
    }
    await this.refreshCart();
  },
  beforeDestroy() {
    window.removeEventListener("storage", this.checkAuth);
  },
  computed: {
    ...mapGetters(["cocktailsInCart"]),
  },
  methods: {
    ...mapActions(["addToCart"]),
    ...mapMutations(["changeAuth"]),
    async refreshCart() {
      if (localStorage & (localStorage.length > 1)) {
        for (let key in localStorage) {
          if (key.includes("1")) {
            let cocktailId = localStorage.getItem(key);
            await this.addToCart(cocktailId);
          }
        }
      }
    },
    async checkAuth(e) {
      if (e.key !== "logged_in") {
        return;
      }
      const auth = JSON.parse(e.newValue);
      if (auth) {
        this.changeAuth(true);
        await this.$router.push("/dashboard");
      } else {
        this.changeAuth(false);
        if (this.$route.name === "Dashboard") await this.$router.push("/");
      }
    }
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
@import "~placeholder-loading/src/scss/placeholder-loading";

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

.grey-text-color {
  color: #bcbcbc;
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

a {
  color: $orange;
}

a:hover {
  color: $orange;
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

.btn-outline-warning {
  color: $yellow;
}

.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
  color: $white;
}

.btn:hover {
  color: $white;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.5);
  text-shadow: 0 0 3px $white;
  outline: none;
}

.b-dropdown {
  width: 100%;
}

.dropdown-menu {
  border-radius: 50px;
}

.dropdown-menu-simple {
  border-radius: 5px;
  opacity: 0.9;
}

.dropdown-toggle-menu {
  background-color: transparent;
}

.dropdown-toggle-menu {
  background-color: transparent;
  box-shadow: none;
  height: 20px;
}

.dropdown-toggle-menu:hover, .dropdown-toggle-menu:active, .dropdown-toggle-menu:focus {
  color: #fff;
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: $orange;
  background-color: $orange;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 376px) {
  html {
    font-size: 12px;
    line-height: 100%;
  }
}
</style>
