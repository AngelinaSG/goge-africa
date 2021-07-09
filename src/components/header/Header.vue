<template>
  <header class="main-header sticky-top">
    <div class="container main-header-container">
      <nav class="navbar navbar-expand-lg main-header__navbar">
        <router-link to="/" class="main-header__logo">
          <img src="@/assets/full_logo.svg.svg" alt="Goge Africa" />
        </router-link>
        <button
          class="navbar-toggler orange-text-color"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav main-header__nav">
            <li class="nav-item main-header__nav-item">
              <router-link
                to="/"
                class="nav-link main-header__nav-link gradient-text-color"
                >Home</router-link
              >
            </li>
            <li class="nav-item main-header__nav-item">
              <router-link
                to="/course"
                class="nav-link main-header__nav-link gradient-text-color"
                >Cocktails</router-link
              >
            </li>
            <li class="nav-item main-header__nav-item">
              <router-link
                to="/course"
                class="nav-link main-header__nav-link gradient-text-color"
                >Blog</router-link
              >
            </li>
            <li class="nav-item main-header__nav-item">
              <router-link
                to="/course"
                class="nav-link main-header__nav-link gradient-text-color"
                >About Us</router-link
              >
            </li>
            <li class="nav-item main-header__nav-item">
              <router-link
                to="/course"
                class="nav-link main-header__nav-link gradient-text-color"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item main-header__nav-item">
              <router-link to="/cart"><IconAddToCart /></router-link>
            </li>
          </ul>

          <form class="form-inline">
            <button
              type="button"
              class="btn main-header__btn btn--gradient-bg"
              @click="becomeContributor"
            >
              Be A Contributor
            </button>
            <button
              type="button"
              class="btn main-header__btn btn--gradient-bg"
              @click="login"
            >
              Log in
            </button>
          </form>
          <ContributorModal />
          <LoginModal />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import IconAddToCart from "@/components/icons/IconAddToCart";
import ContributorModal from "@/components/app/ContributorModal";
import LoginModal from "@/components/app/LoginModal";

export default {
  name: "Header",
  components: {
    IconAddToCart,
    ContributorModal,
    LoginModal,
  },
  methods: {
    becomeContributor() {
      this.$modal.show("be-contributor");
    },
    login() {
      this.$modal.show("login");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  background: #fff;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
}

.main-header__navbar {
  display: flex;
  justify-content: flex-end;
  padding-right: 66px;
  padding-left: 76px;
  padding-bottom: 29px;
  padding-top: 29px;
  font-family: "Roboto", sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
}

.main-header__logo {
  margin-right: auto;
}

.main-header__logo img {
  width: 160px;
  object-fit: cover;
}

.main-header__nav {
  margin-bottom: 0;
  font-size: 0.9375rem;
}

.main-header__nav-item {
  margin-right: 41px;
}

.main-header__nav-item:hover {
  text-shadow: 0 0 1px orange;
  transition: text-shadow 0.5s ease-in-out;
}

.main-header__nav-link.router-link-exact-active {
  text-shadow: 0 0 1px orange;
  position: relative;
}

.main-header__nav-link {
  padding: 5px 0 0 0;
}

.main-header__nav-link.router-link-exact-active::after {
  content: url("~@/assets/pictures/header_nav_line.svg");
  position: absolute;
  left: calc(50% - 10.995px);
  bottom: -13px;
}

.main-header__nav-item:last-of-type {
  font-weight: bold;
  margin-right: 24px;
}

.main-header__btn:first-of-type {
  margin-right: 10px;
}

.navbar-toggler-icon {
  content: url("~@/assets/pictures/header_hamburger-menu.svg");
}

.navbar-collapse {
  flex-grow: 0;
}

//----------------------------------- Tablets --------------------------------------//

@media screen and (max-width: 768px) {
  .main-header__nav-link.router-link-exact-active::after {
    display: none;
  }

  .navbar-collapse {
    text-align: center;
  }

  .main-header__nav {
    margin: 20px 0 20px 0;
  }

  .form-inline {
    justify-content: center;
  }

  .main-header__nav-item,
  .main-header__nav-item:last-of-type {
    margin-right: 0;
  }
}

@media screen and (max-width: 376px) {
  .main-header__navbar {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
