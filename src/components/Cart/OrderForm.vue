<template>
  <div class="row cart__table-row">
    <div class="product-table">
      <div class="product-row bold text-center product-table__title">
        Select Your Delivery Information
      </div>
      <div class="product-row">
        <div class="cart__table-title">Product Name & Details</div>
        <div class="cart__table-title"></div>
        <div class="cart__table-title">Quantity</div>
        <div class="cart__table-title">Price</div>
        <div class="cart__table-title">Delivery Details</div>
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
        <div class="cart__table-title">
          <p class="bold text">{{ prodact.strDrink }}</p>
          <p>{{ prodact.strAlcoholic }}</p>
          <p>{{ prodact.strCategory }}</p>
        </div>
        <div class="cart__table-title">
          <div class="cart__quantity-counter">
            <button class="btn--counter" @click="onMinus(idx)">-</button>
            <span class="cart__quantity">{{ prodact.quantity }}</span>
            <button class="btn--counter" @click="onPlus(idx)">+</button>
          </div>
        </div>
        <div class="cart__table-title">
          ${{ prodact.idDrink * prodact.quantity }}/
          <div>{{ prodact.quantity }} pieces</div>
        </div>
        <div class="cart__table-title">
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="deliveryType"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="A"
              >${{ deliveryPrice }}</b-form-radio
            >
            <b-form-radio
              v-model="deliveryType"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="B"
              >Pay on delivery</b-form-radio
            >
          </b-form-group>
        </div>
        <div class="cart__table-title">
          <button
            class="btn btn--delete"
            @click="onDelete(prodact.idDrink)"
          ></button>
        </div>
      </div>

      <div class="product-row product-table__total-price">
        <div class="cart__total-price text-right">
          <p>
            <span class="grey-text-color">Subtotal:</span> ${{ subtotalPrice }}
            <span class="grey-text-color">Delivery:</span> ${{ deliveryPrice }}
          </p>
          <p>
            <span class="grey-text-color">Total: {{ totalPrice }}</span
            >$
          </p>
          <button class="btn btn--gradient-bg">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from "@/components/app/DeleteModal";

export default {
  name: "OrderForm",
  data: () => ({
    prodactsInfo: [],
    currentProdactIdx: "",
    deliveryType: "",
    deliveryPrice: 200,
  }),
  components: {
    DeleteModal,
  },
  mounted() {
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
    onDelete(prodactIdx) {
      this.currentProdactIdx = prodactIdx;
      this.$modal.show("delete-modal");
    },
    deleteProdactFromCart(productId) {
      this.$modal.hide("delete-modal");
      this.$store.commit("deleteFromCart", productId);
    },
  },
  computed: {
    subtotalPrice() {
      return this.prodactsInfo.reduce((sum, item) => {
        return sum + item.quantity * item.idDrink;
      }, 0);
    },
    totalPrice() {
      return this.subtotalPrice + this.deliveryPrice;
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

.product-table__title {
  width: 100%;
  font-size: 1.125rem;
  grid-template-columns: 1fr;
}

.product-table__total-price {
  grid-template-columns: 1fr;
  padding-right: 145px;
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
  margin-left: auto;
  width: max-content;
  align-self: flex-end;
}

.cart__total-price > p:last-of-type {
  margin-bottom: 37px;
}

.btn--delete {
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
