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

      <div v-if="!productsInfo.length" class="product-row cart-table__alert">
        <p class="text-center">
          Your cart is empty. Go to
          <router-link to="/course">cocktails!</router-link>
        </p>
      </div>

      <transition-group name="list">
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
          <div class="cart__table-title">{{ product.strDrink }}</div>
          <div class="cart__table-title">
            <div class="cart__quantity-counter">
              <button class="btn--counter" @click="onMinus(idx)">-</button>
              <span class="cart__quantity">{{ product.quantity }}</span>
              <button class="btn--counter" @click="onPlus(idx)">+</button>
            </div>
          </div>
          <div class="cart__table-title">${{ product.idDrink }}</div>
          <div class="cart__table-title">
            <span class="grey-text-color">Total:</span> ${{
              product.idDrink * product.quantity
            }}
          </div>
          <div class="cart__table-title">
            <button
              class="btn btn--delete"
              @click="onDelete(product.idDrink)"
            />
          </div>
        </div>
      </transition-group>
    </div>

    <DeleteModal
      @deleteProduct="deleteProductFromCart"
      @closeModal="closeModal"
      :index="currentProductIdx"
    />

    <div v-if="productsInfo.length" class="cart__total-price">
      <p class="text-center">
        <span class="grey-text-color">Total:</span> ${{ totalPrice }}
      </p>
      <button class="btn btn--gradient-bg" @click="$emit('onBuy')">
        Buy All
      </button>
    </div>
  </div>
</template>

<script>
import DeleteModal from "@/components/app/DeleteModal";
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    currentProductIdx: "",
  }),
  components: {
    DeleteModal,
  },
  props: {
    orderState: String,
  },
  computed: {
    ...mapGetters(["cocktailsInCart"]),
    productsInfo() {
      return this.cocktailsInCart;
    },
    totalPrice() {
      return this.productsInfo.reduce(
        (sum, item) => sum + item.quantity * item.idDrink,
        0
      );
    },
  },
  methods: {
    ...mapMutations([
      "deleteOneCocktail",
      "addOneMoreCocktail",
      "deleteFromCart",
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
  transition: all 0.5s;
}

.product-row {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr) 80px;
  border-bottom: 1px solid #efefef;
  padding: 39px 0 29px 39px;
}

.cart-table__alert {
  grid-template-columns: 1fr;
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
  font-size: 1.125rem;
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
  transition: transform 0.2s ease;
}

.btn--delete:hover {
  box-shadow: none;
  text-shadow: none;
  transform: scale(1.2);
}

.btn--close:focus {
  box-shadow: none;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
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

  .cart__product-img {
    width: 100%;
    height: 40%;
  }

  .cart__quantity-counter {
    width: 90%;
  }

  .cart-table__alert {
    grid-template-columns: 1fr;
  }
}
</style>
