<template>
  <div>
    <main>
      <HeroSection />
      <AboutUs @scrollToPrice="scrollToPrice" />
      <CoursesSection />
      <Achievement />
      <Testimonials />
      <div ref="price">
        <Prices />
      </div>
      <ContactUs />
    </main>
  </div>
</template>

<script>
import HeroSection from "@/components/LandingPage/hero-section/HeroSection";
import AboutUs from "@/components/LandingPage/about/AboutUs";
import CoursesSection from "@/components/LandingPage/CoursesSection";
import Achievement from "@/components/LandingPage/Achievement";
import Testimonials from "@/components/LandingPage/Testimonials";
import Prices from "@/components/LandingPage/Prices";
import ContactUs from "@/components/LandingPage/ContactUs";

export default {
  name: "Home",
  components: {
    HeroSection,
    AboutUs,
    CoursesSection,
    Achievement,
    Testimonials,
    Prices,
    ContactUs,
  },
  methods: {
    scrollToPrice() {
      this.$refs.price.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
