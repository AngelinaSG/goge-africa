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
            type="email"
            class="form-control"
            placeholder="Your Email"
            v-model.trim="contrEmail"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Your Password"
            v-model.trim="contrPass"
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
import { mapActions } from "vuex";

export default {
  data: () => ({
    contrPass: "",
    contrEmail: "",
    acceptTerms: false,
  }),
  methods: {
    ...mapActions(["signUp"]),
    async onSubmit() {
      try {
        await this.signUp(this.contrPass, this.contrEmail);
        this.$emit("closeModal");
        await this.$router.push("/dashboard");
      } catch (e) {
        console.log(e);
        // const errorText = e.response.data.error.message
        //   .replaceAll("_", " ")
        //   .toLowerCase();
        // this.$bvToast.toast(`${errorText}`, {
        //   autoHideDelay: 3000,
        //   toaster: "b-toaster-top-center",
        //   "append-toast": true,
        // });
      }
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
