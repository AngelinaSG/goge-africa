<template>
  <div>
    <Header />
    <HeroSection />
    <AboutUs />
    <CoursesSection />
    <Achievement />
    <Testimonials />
    <Prices />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import HeroSection from "@/components/hero-section/HeroSection";
import AboutUs from "@/components/about/AboutUs";
import CoursesSection from "@/components/CoursesSection";
import Achievement from "@/components/Achievement";
import Testimonials from "@/components/Testimonials";
import Prices from "@/components/Prices";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

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
    Footer,
  },
};
</script>
