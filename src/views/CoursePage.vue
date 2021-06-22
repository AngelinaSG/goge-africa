<template>
  <div>
    <HeroSection />
    <CoursesList />
  </div>
</template>

<script>
import HeroSection from "@/components/CoursePage/HeroSection";
import CoursesList from "@/components/CoursePage/CoursesList";

export default {
  name: "CoursePage",
  components: {
    HeroSection,
    CoursesList,
  },
};
</script>

<style lang="scss" scoped></style>
