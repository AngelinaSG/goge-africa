<template>
  <div class="container gradient-background achievement__container">
    <div class="row achievement__row text-center text-white">
      <div class="achievement__section">
        <IconHelpedStudents
          class="achievement-section__icon achievement-section__icon-1"
        />
        <h2 class="bold">5,679</h2>
        <p class="achievement-section__description">Registered Students</p>
      </div>
      <div class="achievement__section">
        <IconRegisteredStudents
          class="achievement-section__icon achievement-section__icon-2"
        />
        <h2 class="bold">2,679</h2>
        <p class="achievement-section__description">
          Student has been helped to achieve their dreams
        </p>
      </div>
      <div class="achievement__section">
        <IconVisits
          class="achievement-section__icon achievement-section__icon-3"
        />
        <h2 class="bold">10,000</h2>
        <p class="achievement-section__description">
          More than 10,000 people visits our site monthly
        </p>
      </div>
      <div class="achievement__section">
        <IconRank
          class="achievement-section__icon achievement-section__icon-4"
        />
        <h2 class="bold">#10</h2>
        <p class="achievement-section__description">
          Ranked among the top 10 growing online learning startups in West
          Africa
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconHelpedStudents from "@/components/icons/IconHelpedStudents";
import IconRegisteredStudents from "@/components/icons/IconRegisteredStudents";
import IconVisits from "@/components/icons/IconVisits";
import IconRank from "@/components/icons/IconRank";

export default {
  name: "Achievement",
  components: {
    IconHelpedStudents,
    IconRegisteredStudents,
    IconVisits,
    IconRank,
  },
};
</script>

<style scoped>
.achievement__container {
  padding-top: 42px;
  padding-bottom: 56px;
}

.achievement__row {
  padding-left: 208px;
  padding-right: 187px;
  justify-content: space-between;
}

.achievement__section {
  width: 16%;
}

.achievement__section:nth-child(2) {
  margin-left: 24px;
}

.achievement__section:nth-child(3) {
  margin-left: 24px;
}

.achievement__section:last-child {
  margin-right: 0;
  flex-grow: 0.16;
}

.achievement-section__icon-1 {
  margin-left: -28px;
  margin-bottom: 24px;
}

.achievement-section__icon-2 {
  margin-left: -28px;
  margin-bottom: 24px;
}

.achievement-section__icon-3 {
  margin-left: -28px;
  margin-bottom: 27px;
}

.achievement-section__icon-4 {
  margin-left: -28px;
  margin-bottom: 27px;
}

.achievement-section__description {
  line-height: 1.0625rem;
}

.achievement__section > h2 {
  margin-bottom: 4px;
}

@media screen and (max-width: 768px) {
  .achievement__section {
    width: 32%;
    margin-bottom: 10px;
  }

  .achievement__row {
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
  }
}

@media screen and (max-width: 376px) {
  .achievement__section:nth-child(odd) {
    margin-right: 40px;
  }

  .achievement__section:nth-child(2),
  .achievement__section:nth-child(3) {
    margin-left: 0;
  }
}
</style>
