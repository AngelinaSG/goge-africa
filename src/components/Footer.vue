<template>
  <div class="container footer__container text-white">
    <div class="row footer__main-row">
      <div class="footer__copyrights">
        <div>
          <img
            class="footer__logo"
            src="@/assets/full_logo.svg.svg"
            alt="Goge Africa"
          />
        </div>
        <p class="footer__copyright-description">
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources.
        </p>
        <ul class="list-group list-group-horizontal footer__social-media">
          <li class="icon fb-icon"><a href="#"></a></li>
          <li class="icon twitter-icon"><a href="#"></a></li>
          <li class="icon youtube-icon"><a href="#"></a></li>
          <li class="icon ball-icon"><a href="#"></a></li>
        </ul>
      </div>

      <nav class="navbar footer__nav">
        <ul class="navbar-nav">
          <p class="semibold">Quicklinks</p>
          <li>
            <router-link class="footer__nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="footer__nav-link" to="/">Beers</router-link>
          </li>
          <li>
            <router-link class="footer__nav-link" to="/">About Us</router-link>
          </li>
          <li>
            <router-link class="footer__nav-link" to="/"
              >Contact Us</router-link
            >
          </li>
          <li>
            <router-link class="footer__nav-link" to="/"
              >Become A Contributor</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="footer__contacts d-flex flex-column">
        <p class="bold">Contact Us</p>
        <p><a href="tel:+55254254254">(+55) 254. 254. 254</a></p>
        <p><a href="mailto:Info@lsemajafrica.com">Info@lsemajafrica.com</a></p>
        <p>Helios Tower 75 Tam Trinh Hoang</p>
        <p>Mai - Ha Noi - Viet Nam</p>
      </div>

      <div class="footer__contacts2 d-flex flex-column justify-content-end">
        <p>Terms and Conditions</p>
        <p>Faq</p>
      </div>
    </div>

    <div class="row footer__rights-row justify-content-between semibold">
      <div class="footer__rights">
        <p>All Right Reserved | GOGE AFRICA 2019</p>
      </div>
      <div>
        <ul
          class="list-group list-group-horizontal footer__privacy-policy-list"
        >
          <li>Privacy Policy</li>
          <li>Site <span class="yellow-text-color">Credit</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer__container {
  background-color: #212121;
}

.footer__main-row {
  padding-top: 46px;
  padding-bottom: 28px;
}

.footer__main-row {
  padding-left: 131px;
  padding-right: 127px;
}

.footer__copyrights {
  width: 18%;
  margin-right: 233px;
}

.footer__logo {
  width: 64%;
}

.footer__copyright-description {
  margin-top: 32px;
  margin-bottom: 44px;
  line-height: 1.0625rem;
}

.icon {
  width: 20.28px;
  height: 21px;
  background: url("~@/assets/pictures/Social_Icons.svg");
  list-style-type: none;
  margin-right: 10.96px;
}

.twitter-icon {
  background-position: -31.24px 0;
}
.youtube-icon {
  background-position: -62.48px 0;
}
.ball-icon {
  background-position: -93.72px 0;
}

.list-group a {
  display: block;
  width: 100%;
  height: 100%;
}

.list-group .icon:hover {
  opacity: 0.5;
}

.footer__nav {
  align-items: flex-start;
  padding: 0;
  margin-right: 89px;
}

.footer__nav li {
  margin-bottom: 0.75px;
}

.footer__nav li:last-child {
  margin-bottom: 0;
}

.footer__nav-link {
  color: white;
}

.footer__nav,
.footer__contacts {
  font-size: 0.9375rem;
  line-height: 175.78%;
  padding-top: 14px;
}

.footer__nav p:first-child,
.footer__contacts p:first-child {
  margin-bottom: 1.75rem;
}

.footer__contacts a {
  color: white;
  font-size: 0.9375rem;
  line-height: 175.78%;
}

.footer__contacts {
  margin-right: 102px;
}

.footer__contacts2 {
  font-size: 0.9375rem;
  line-height: 175.78%;
  padding-bottom: 29px;
}

.footer__rights-row {
  padding-left: 130px;
  padding-right: 128px;
  font-size: 0.75rem;
  background: black;
  padding-top: 12px;
  padding-bottom: 9px;
}

.footer__privacy-policy-list {
  list-style-type: none;
}

.footer__privacy-policy-list > li {
  margin-right: 32px;
}

.footer__privacy-policy-list li:last-child {
  margin-right: 0;
}
</style>
