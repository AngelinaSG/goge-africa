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
            :class="{
              'is-invalid':
                ($v.userEmail.$dirty && !$v.userEmail.required) ||
                ($v.userEmail.$dirty && !$v.userEmail.email),
            }"
          />
          <div class="invalid-feedback">Please use correct email</div>
          <input
            type="text"
            class="form-control"
            placeholder="Your Password"
            v-model.trim="userPass"
            :class="{
              'is-invalid':
                ($v.userPass.$dirty && !$v.userPass.required) ||
                ($v.userPass.$dirty && !$v.userPass.minLength),
            }"
          />
          <div class="invalid-feedback">
            Your password should be at least
            {{ $v.userPass.$params.minLength.min }} characters
          </div>
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
import { mapActions, mapMutations } from "vuex";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    userEmail: "",
    userPass: "",
    isLoading: false,
  }),
  validations: {
    userEmail: { email, required },
    userPass: { required, minLength: minLength(6) },
  },
  mounted() {
    if (localStorage.getItem("userEmail"))
      this.userEmail = localStorage.getItem("userEmail");
    if (localStorage.getItem("userPass"))
      this.userPass = localStorage.getItem("userPass");
  },
  methods: {
    ...mapMutations(["changeAuth"]),
    ...mapActions(["login"]),

    async onSubmit() {
      this.isLoading = true;

      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
        this.$v.$touch();
        this.isLoading = false;
        return;
      }

      try {
        await this.login([this.userEmail, this.userPass]);
        localStorage.setItem("logged_in", true);
        localStorage.setItem("userEmail", this.userEmail);
        localStorage.setItem("userPass", this.userPass);
        this.changeAuth(true);
        this.$emit("closeModal");
        await this.$router.push(this.$AFRICA_ROUTES.DASHBOARD());
      } catch (e) {
        this.$message(e.message);
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
