<template>
  <modal
    name="pay-card"
    :height="540"
    :maxWidth="519"
    :adaptive="true"
    :styles="{
      'border-radius': '10px',
      'box-shadow': '0px 12px 35px rgba(160, 121, 0, 0.2)',
    }"
  >
    <div class="modal__pay-card">
      <template v-if="!isSuccessful">
        <h3 class="pay-card__title">Card</h3>
        <form @submit.prevent="pay">
          <div class="pay-card__form gradient-background text-white bold">
            <div class="form-control--card-number">
              <label for="cardNumber">Card Number</label>
              <input
                type="tel"
                class="form-control"
                id="cardNumber"
                placeholder="Card Number"
                v-model="cardNumber"
              />
            </div>
            <div class="form-control--card-exp">
              <label for="cardExp">Expires</label>
              <input
                type="tel"
                class="form-control"
                id="cardExp"
                placeholder="mm/yy"
              />
            </div>
            <div class="form-control--card-cvv">
              <label for="cardCvv">CVV</label>
              <input
                type="tel"
                class="form-control"
                id="cardCvv"
                placeholder="CVV"
              />
            </div>
          </div>
          <button class="btn btn--pay">
            <IconPay class="btn-icon" />Pay #200.00
          </button>
        </form>
      </template>
      <template v-if="!isSuccessful"> </template>
      <div class="pay-success" v-else>
        <IconSuccess class="pay-success__icon" />
        <p class="pay-success__text bold">Payment successful</p>
        <button class="btn btn--pay btn--pay--ok">Ok</button>
      </div>
    </div>
  </modal>
</template>

<script>
import IconPay from "@/components/icons/IconPay";
import IconSuccess from "@/components/icons/IconSuccess";

export default {
  components: {
    IconPay,
    IconSuccess,
  },
  data: () => ({
    isSuccessful: false,
    cardNumber: "",
  }),
  mounted() {
    // this.cardNumber = this.cardNumber.padEnd(16, "*");
  },
  methods: {
    pay() {
      this.isSuccessful = true;
      try {
        this.$api.payment.checkPaymentInfo();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.modal__pay-card {
  width: 519px;
  height: 540px;
  border: 1px solid #efefef;
  border-radius: 10px;
}

.pay-card__title {
  height: 13.8%;
  line-height: 74px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  color: #727272;
}

.pay-card__form {
  width: 448px;
  height: 286px;
  background: url("~@/assets/pictures/pay-card_bg.png") no-repeat;
  background-size: cover;
  margin-right: 33px;
  margin-left: 38px;
  margin-top: 30px;
  border-radius: 10px;
  padding-left: 36px;
  padding-top: 94px;
  display: flex;
  flex-wrap: wrap;
}

.pay-card__form input {
  background-color: transparent;
  color: #fff;
  font-size: 0.875rem;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  padding: 0;
}

.pay-card__form input:focus {
  border-bottom: none;
  box-shadow: none;
}

.pay-card__form input::placeholder {
  color: white;
}

.form-control--card-number {
  width: 72.57%;
  margin-right: 24px;
}

.form-control--card-exp,
.form-control--card-cvv {
  width: 16.75%;
  margin-right: 24px;
}

.btn--pay {
  background: #4baa94;
  border-radius: 5px;
  width: 237px;
  height: 72px;
  margin-top: 45px;
  margin-left: 145px;
  box-shadow: 0 12px 35px rgba(75, 170, 148, 0.2);
  font-size: 1.25rem;
}

.btn--pay:hover {
  box-shadow: 0 12px 35px rgba(75, 170, 148, 0.6);
}

.btn-icon {
  margin-right: 11px;
  margin-bottom: 2px;
}

.pay-success {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pay-success__text {
  font-size: 1.5rem;
}

.pay-success__icon {
  margin-top: 24.5%;
  margin-bottom: 20px;
}

.btn--pay--ok {
  margin-left: 0;
  margin-top: 132px;
}
</style>
