<template>
  <modal
    name="delete-modal"
    :height="493"
    :maxWidth="604"
    :adaptive="true"
    :styles="{
      'border-radius': '10px',
      'box-shadow': '0px 12px 35px rgba(160, 121, 0, 0.2)',
      opacity: '0.95',
    }"
  >
    <div class="delete-modal text-center">
      <button class="btn--close" @click="$emit('closeModal')"></button>
      <IconDelete />
      <h4 class="delete-modal__title">Remove / Cancel Order</h4>
      <p class="delete-modal__description">
        You’re about to cancel ya order and this will also remove the item from
        your cart either
      </p>
      <button
        class="btn btn--gradient-bg"
        @click="$emit('deleteProduct', index)"
      >
        Proceed
      </button>
    </div>
  </modal>
</template>

<script>
import IconDelete from "@/components/icons/IconDelete";

export default {
  components: {
    IconDelete,
  },
  props: {
    index: String,
  },
};
</script>

<style lang="scss" scoped>
.delete-modal {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 49px;
  align-items: center;
}

.btn--close {
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url("~@/assets/pictures/close_modal_icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-left: auto;
  margin-bottom: 38px;
}

.delete-modal__title {
  font-size: 1.75rem;
  line-height: 2.125rem;
  margin-top: 34px;
  margin-bottom: 29px;
}

.delete-modal__description {
  width: 66%;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 18px;
}
</style>
