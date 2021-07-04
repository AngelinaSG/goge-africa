<template>
  <div>
    <div class="container">
      <div class="row cart__link-row">
        <a @click.prevent="$router.go(-1)">
          <IconBack class="cart__link-back-icon" />
          Back
        </a>
      </div>

      <CartTable />

      <OrderForm />

      <DeliveryInfo />

      <Payment />
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
};
</script>

<style scoped>
.cart__link-back-icon {
  margin-right: 20px;
}

.cart__link-row {
  padding-top: 45px;
  padding-bottom: 29.3px;
}
</style>
