<template>
  <div class="row delivery-info__row">
    <form class="delivery-info__form">
      <h5 class="bold text-center">Select Your Delivery Information</h5>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Full Name"
          v-model.trim="fullName"
          :class="{
            'is-invalid':
              ($v.fullName.$dirty && !$v.fullName.required) ||
              ($v.fullName.$dirty && !$v.fullName.minLength),
          }"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Country / Region"
          v-model.trim="country"
          :class="{
            'is-invalid':
              ($v.country.$dirty && !$v.country.required) ||
              ($v.country.$dirty && !$v.country.minLength),
          }"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Street Adress"
          v-model.trim="streetAdress"
        />
        <input
          type="text"
          class="form-control"
          placeholder="City"
          v-model.trim="city"
        />
        <input
          type="text"
          class="form-control"
          placeholder="State / Province / Region"
          v-model.trim="region"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Zip / Postal Code"
          v-model.trim="postalCode"
        />
        <input
          type="tel"
          class="form-control"
          placeholder="Mobile"
          v-model.trim="mobilePhone"
        />
        <button
          class="btn btn--gradient-bg delivery__btn"
          @click.prevent="onClick"
        >
          Save and Ship To This Address
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    isModal: false,
    fullName: "",
    country: "",
    streetAdress: "",
    city: "",
    region: "",
    postalCode: "",
    mobilePhone: "",
  }),

  methods: {
    onClick() {
      if (this.$v.$invalid) {
        this.$bvToast.toast("Please, check your delivery information", {
          autoHideDelay: 3000,
          toaster: "b-toaster-bottom-center",
          variant: "danger",
        });
        this.$v.$touch();
        return;
      }
      this.$emit("nextStep");
    },
  },
  validations: {
    fullName: { required },
    country: { required },
    streetAdress: { required },
    city: { required },
    region: { required },
    postalCode: { required },
    mobilePhone: { required },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.delivery-info__row {
  padding-left: 78px;
  padding-right: 121px;
  padding-bottom: 134px;
}

.delivery-info__form {
  width: 100%;
  background: #fff7df;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 67px 0;
}

.delivery-info__form > h5 {
  margin-bottom: 55px;
}

.form-group {
  width: 57.2%;
  margin: auto;
}

.invalid {
  border: 1px solid red;
}

.form-control {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 9px;
  padding: 21px 0 21px 20px;
  font-family: $font-family-base;
}

.form-control:last-of-type {
  margin-bottom: 0;
}

.form-control::placeholder {
  font-size: $font-size-base;
  font-family: $font-family-base;
  padding: 21px 0 21px 20px;
}

.delivery__btn {
  width: 100%;
  margin-top: 79px;
}
</style>
