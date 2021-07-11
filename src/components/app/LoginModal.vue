<template>
  <modal
    name="login"
    :height="400"
    :maxWidth="519"
    :adaptive="true"
    :styles="{
      'border-radius': '10px',
      'box-shadow': '0px 12px 35px rgba(160, 121, 0, 0.2)',
      background: '#fff7df',
    }"
  >
    <div class="login-modal">
      <form class="login-modal__form" @submit.prevent="onSubmit">
        <h5 class="bold text-center">Please fill this form</h5>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Your Email"
            v-model.trim="userEmail"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Your Password"
            v-model.trim="userPass"
          />
        </div>
        <button class="btn btn--gradient-bg" v-if="!isLoading">Log In</button>
        <div v-else>
          <b-spinner label="Loading..."></b-spinner>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  data: () => ({
    userEmail: "",
    userPass: "",
    isLoading: false,
  }),
  methods: {
    async onSubmit() {
      this.isLoading = true;
      try {
        await this.$api.auth.login(this.userEmail, this.userPass);
        this.$emit("closeModal");
        await this.$router.push("/dashboard");
      } catch (e) {
        const errorText = e.response.data.error.message
          .replaceAll("_", " ")
          .toLowerCase();
        this.$bvToast.toast(`${errorText}`, {
          autoHideDelay: 3000,
          toaster: "b-toaster-top-center",
          "append-toast": true,
        });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.login-modal__form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
}

.login-modal__form h5 {
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
</style>
