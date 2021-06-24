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

      <DeliveryInfo />
    </div>
  </div>
</template>

<script>
import IconBack from "@/components/icons/IconBack";
import CartTable from "@/components/Cart/CartTable";
import DeliveryInfo from "@/components/Cart/DeliveryInfo";

export default {
  name: "Cart",
  components: {
    IconBack,
    CartTable,
    DeliveryInfo,
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
