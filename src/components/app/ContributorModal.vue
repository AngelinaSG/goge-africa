<template>
  <modal
    name="be-contributor"
    :height="400"
    :maxWidth="519"
    :adaptive="true"
    :styles="{
      'border-radius': '10px',
      'box-shadow': '0px 12px 35px rgba(160, 121, 0, 0.2)',
      background: '#fff7df',
    }"
  >
    <div class="contributor-modal">
      <form class="contributor-modal__form" @submit.prevent="onSubmit">
        <h5 class="bold text-center">Please fill this form</h5>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Your Name"
            v-model.trim="contrName"
          />
          <input
            type="email"
            class="form-control"
            placeholder="Your Email"
            v-model.trim="contrEmail"
          />
        </div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="acceptTerms"
          name="checkbox-1"
          value="true"
          unchecked-value="false"
          class="contributor-modal__checkbox"
        >
          I accept the terms and use
        </b-form-checkbox>
        <button class="btn btn--gradient-bg">Become a contributor</button>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  data: () => ({
    contrName: "",
    contrEmail: "",
    acceptTerms: false,
  }),
  methods: {
    onSubmit() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>
.contributor-modal__form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
}

.contributor-modal__form h5 {
  padding: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #efefef;
  width: 100%;
}

.form-control {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 9px;
  padding: 21px 0 21px 20px;
}

.contributor-modal__checkbox {
  margin-bottom: 34px;
}
</style>
