<template>
  <div>
    <div class="container">
      <div class="row cart__link-row">
        <a @click.prevent="$router.go(-1)">
          <IconBack class="cart__link-back-icon" />
          Back
        </a>
      </div>
      <div class="row cart__table-row">
        <div class="product-table">
          <div class="cart__table-title">Product Name & Details</div>
          <div class="cart__table-title">Quantity</div>
          <div class="cart__table-title">Price</div>
          <div class="cart__table-title"></div>
          <div class="cart__table-title"></div>
          <div class="cart__table-title">Product Name & Details</div>
          <div class="cart__table-title">Quantity</div>
          <div class="cart__table-title">Price</div>
          <div class="cart__table-title"></div>
          <div class="cart__table-title"></div>
        </div>
        <div class="cart__total-price">
          <p class="text-center">Total: $480</p>
          <button class="btn btn--gradient-bg">Buy All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBack from "@/components/icons/IconBack";

export default {
  name: "Cart",
  components: {
    IconBack,
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
  display: grid;
  grid-template-columns: repeat(5, 260px);
  margin-bottom: 65px;
}

.cart__link-back-icon {
  margin-right: 20px;
}

.cart__link-row {
  padding-top: 45px;
  padding-bottom: 29.3px;
}

.cart__table-title {
  border-bottom: 1px solid #efefef;
  padding: 39px 0 29px 39px;
}

.cart__total-price {
  width: max-content;
  align-self: flex-end;
}

.cart__total-price > p {
  margin-bottom: 37px;
}
</style>
