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

      <div v-if="!productsInfo.length" class="product-row cart-table__alert">
        <p class="text-center">
          Your cart is empty. Go to
          <router-link to="/course">cocktails!</router-link>
        </p>
      </div>

      <div
        class="product-row"
        v-for="(product, idx) in productsInfo"
        :key="product.idDrink"
      >
        <div class="cart__table-title">
          <img
            :src="product.strDrinkThumb"
            alt=""
            width="157"
            height="135"
            class="cart__product-img"
          />
        </div>
        <div class="cart__table-title">
          <p class="bold text">{{ product.strDrink }}</p>
          <p>{{ product.strAlcoholic }}</p>
          <p>{{ product.strCategory }}</p>
        </div>
        <div class="cart__table-title">
          <div class="cart__quantity-counter">
            <button class="btn--counter" @click="onMinus(idx)">-</button>
            <span class="cart__quantity">{{ product.quantity }}</span>
            <button class="btn--counter" @click="onPlus(idx)">+</button>
          </div>
        </div>
        <div class="cart__table-title">
          ${{ product.idDrink * product.quantity }}/
          <div>{{ product.quantity }} pieces</div>
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
            @click="onDelete(product.idDrink)"
          ></button>
        </div>
      </div>
      <DeleteModal
        @deleteProduct="deleteProductFromCart"
        @closeModal="closeModal"
        :index="currentProductIdx"
      />

      <div
        class="product-row product-table__total-price"
        v-if="productsInfo.length"
      >
        <div class="cart__total-price text-right">
          <p>
            <span class="grey-text-color">Subtotal:</span> ${{ subtotalPrice }}
            <span class="grey-text-color cart__total-price-text"
              >Delivery:</span
            >
            ${{ deliveryPrice }}
          </p>
          <p><span class="grey-text-color">Total:</span>${{ totalPrice }}</p>
          <button class="btn btn--gradient-bg" @click="$emit('onNext')">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from "@/components/app/DeleteModal";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "OrderForm",
  components: {
    DeleteModal,
  },
  data: () => ({
    productsInfo: [],
    currentProductIdx: "",
    deliveryType: "",
    deliveryPrice: 200,
  }),
  computed: {
    ...mapGetters(["cocktailsInCart"]),
    subtotalPrice() {
      return this.productsInfo.reduce((sum, item) => {
        return sum + item.quantity * item.idDrink;
      }, 0);
    },
    totalPrice() {
      return this.subtotalPrice + this.deliveryPrice;
    },
  },
  mounted() {
    this.productsInfo = this.cocktailsInCart;
  },
  methods: {
    ...mapMutations([
      "deleteFromCart",
      "deleteOneCocktail",
      "addOneMoreCocktail",
    ]),
    onMinus(productId) {
      if (this.productsInfo[productId].quantity === 1) return;
      this.productsInfo[productId].quantity -= 1;
      this.deleteOneCocktail(productId);
    },
    onPlus(productId) {
      this.productsInfo[productId].quantity += 1;
      this.addOneMoreCocktail(productId);
    },
    onDelete(productIdx) {
      this.currentProductIdx = productIdx;
      this.$modal.show("delete-modal");
    },
    deleteProductFromCart(productId) {
      this.$modal.hide("delete-modal");
      this.deleteFromCart(productId);
    },
    closeModal() {
      this.$modal.hide("delete-modal");
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
  grid-template-columns: repeat(5, 1fr) 80px;
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

.cart__total-price-text {
  margin-left: 30px;
}

.cart__total-price > p:first-of-type {
  margin-bottom: 17px;
}

.cart__total-price > p:last-of-type {
  margin-bottom: 37px;
}

.cart-table__alert {
  grid-template-columns: 1fr;
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

.btn--delete:focus {
  box-shadow: none;
}

@media screen and (max-width: 768px) {
  .cart__table-row {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
  }

  .cart__table-title {
    display: flex;
    justify-content: center;
  }

  .cart__table-title:nth-of-type(2) {
    flex-direction: column;
  }
}

@media screen and (max-width: 376px) {
  .cart__table-row {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .product-row {
    padding: 5px;
    grid-template-columns: repeat(5, 1fr) 30px;
    text-align: center;
  }

  .product-table__title {
    grid-template-columns: 1fr;
  }

  .cart__product-img {
    width: 100%;
    height: 40%;
  }

  .cart__quantity-counter {
    width: 90%;
  }

  .product-table__total-price {
    grid-template-columns: 1fr;
  }

  .cart__total-price {
    margin: auto;
  }

  .cart-table__alert {
    grid-template-columns: 1fr;
  }
}
</style>
