<template>
  <div class="row cart__table-row">
    <div class="product-table">
      <div class="product-row">
        <div class="cart__table-title">Product Name & Details</div>
        <div class="cart__table-title"></div>
        <div class="cart__table-title">Quantity</div>
        <div class="cart__table-title">Price</div>
        <div class="cart__table-title"></div>
        <div class="cart__table-title"></div>
      </div>

      <div
        class="product-row"
        v-for="(prodact, idx) in prodactsInfo"
        :key="prodact.idDrink"
      >
        <div class="cart__table-title">
          <img
            :src="prodact.strDrinkThumb"
            alt=""
            width="157"
            height="135"
            class="cart__product-img"
          />
        </div>
        <div class="cart__table-title">{{ prodact.strDrink }}</div>
        <div class="cart__table-title">
          <div class="cart__quantity-counter">
            <button
              class="btn--counter"
              :value="idx"
              @click="onMinus($event.target.value)"
            >
              -
            </button>
            <span class="cart__quantity">{{ prodact.quantity }}</span>
            <button
              class="btn--counter"
              :value="idx"
              @click="onPlus($event.target.value)"
            >
              +
            </button>
          </div>
        </div>
        <div class="cart__table-title">${{ prodact.idDrink }}</div>
        <div class="cart__table-title">
          Total:{{ prodact.idDrink * prodact.quantity }}
        </div>
        <div class="cart__table-title">
          <button class="btn btn--close"></button>
        </div>
      </div>
    </div>

    <div class="cart__total-price">
      <p class="text-center">Total: ${{ totalPrice }}</p>
      <button class="btn btn--gradient-bg">Buy All</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    prodactsInfo: [],
  }),
  mounted() {
    console.log(this.$store.getters.cocktailsInCart);
    this.prodactsInfo = this.$store.getters.cocktailsInCart;
  },
  methods: {
    onMinus(prodactId) {
      if (this.prodactsInfo[prodactId].quantity === 1) return;
      this.prodactsInfo[prodactId].quantity -= 1;
      this.$store.commit("deleteOneCocktail", prodactId);
    },
    onPlus(prodactId) {
      this.prodactsInfo[prodactId].quantity += 1;
      this.$store.commit("addOneMoreCocktail", prodactId);
    },
  },
  computed: {
    totalPrice() {
      return this.prodactsInfo.reduce((sum, item) => {
        return sum + item.quantity * item.idDrink;
      }, 0);
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
  grid-template-columns: repeat(5, 244px) 80px;
  border-bottom: 1px solid #efefef;
  padding: 39px 0 29px 39px;
}

.cart__quantity-counter {
  width: 87px;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn--counter {
  border: none;
  width: 33%;
  height: 100%;
  background-color: transparent;
  font-weight: 700;
}

.cart__product-img {
  border-radius: 10px;
}

.cart__total-price {
  width: max-content;
  align-self: flex-end;
}

.cart__total-price > p {
  margin-bottom: 37px;
}

.btn--close {
  border: none;
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url("~@/assets/pictures/close_btn_icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.btn--close:focus {
  box-shadow: none;
}
</style>
