<template>
  <div>
    <div class="container">
      <div class="row cart__link-row">
        <a @click.prevent="onBack">
          <IconBack class="cart__link-back-icon" />
          <span v-if="orderState === 0">Back</span> <span v-else>Cart</span>
        </a>
      </div>

      <transition name="component-fade" mode="out-in">
        <CartTable @onBuy="nextStep" v-if="orderState === 0" />

        <OrderForm @onNext="nextStep" v-else-if="orderState === 1" />

        <DeliveryInfo @nextStep="nextStep" v-else-if="orderState === 2" />

        <Payment v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import IconBack from "@/components/icons/IconBack";
import CartTable from "@/components/Cart/CartTable";
import DeliveryInfo from "@/components/Cart/DeliveryInfo";
import OrderForm from "@/components/Cart/OrderForm";
import Payment from "@/components/Cart/Payment";

export default {
  name: "Cart",
  components: {
    Payment,
    IconBack,
    CartTable,
    DeliveryInfo,
    OrderForm,
  },
  data: () => ({
    orderState: 0,
  }),
  methods: {
    nextStep() {
      this.orderState++;
    },
    onBack() {
      if (this.orderState === 0) {
        this.$router.go(-1);
      } else {
        this.orderState = 0;
      }
    },
  },
};
</script>

<style scoped>
.cart__link-back-icon {
  margin-right: 20px;
  transition: transform 0.2s ease;
}

.cart__link-row {
  padding-top: 45px;
  padding-bottom: 29px;
}

.cart__link-row a:hover > span {
  color: orange;
  cursor: pointer;
}

.cart__link-row a:hover > .cart__link-back-icon {
  transform: translateX(-4px);
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
