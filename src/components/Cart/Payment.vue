<template>
  <div class="row cart__table-row">
    <div class="product-table">
      <div class="product-row bold text-center product-table__title">
        <p>
          Select Your Preferred Payment Method
          <span class="cart__order-progress">100%</span>
        </p>
      </div>
      <div class="product-row">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="A"
            >Pay with Ravepay <RavepayIcon
          /></b-form-radio>
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="B"
            >Pay with Ogaranya <OrganyaIcon
          /></b-form-radio>
        </b-form-group>
        <button class="btn btn--gradient-bg btn--next" @click="onPay">
          Next
        </button>
      </div>
    </div>
    <PayModal />
  </div>
</template>

<script>
import PayModal from "@/components/app/PayModal";
import RavepayIcon from "@/components/icons/RavepayIcon";
import OrganyaIcon from "@/components/icons/OrganyaIcon";

export default {
  name: "Payment",
  components: {
    PayModal,
    RavepayIcon,
    OrganyaIcon,
  },
  methods: {
    onPay() {
      this.$modal.show("pay-card");
    },
  },
};
</script>

<style scoped>
.cart__table-row {
  padding-left: 78px;
  padding-right: 121px;
  padding-bottom: 100px;
  flex-direction: column;
}

.product-table {
  width: 100%;
  background: #fff7df;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-bottom: 65px;
}

.product-row {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  border-bottom: 1px solid #efefef;
  padding: 39px 145px 29px 39px;
}

.product-table__title {
  width: 100%;
  font-size: 1.125rem;
}

.custom-control:first-child {
  margin-bottom: 40px;
}

.btn--next {
  margin-left: auto;
}

@media screen and (max-width: 376px) {
  .cart__table-row {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .product-row {
    padding: 5px;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .btn--next {
    margin: auto;
  }

  .cart__order-progress {
    font-size: 0.875rem;
    line-height: 234.38%;
    font-weight: 400;
  }
}
</style>
