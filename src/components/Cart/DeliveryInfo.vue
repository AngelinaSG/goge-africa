<template>
  <div class="row delivery-info__row">
    <form class="delivery-info__form">
      <Modal v-if="isModal" />
      <h5 class="bold text-center">Select Your Delivery Information</h5>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Full Name" />
        <input
          type="text"
          class="form-control"
          placeholder="Country / Region"
        />
        <input type="text" class="form-control" placeholder="Street Adress" />
        <input type="text" class="form-control" placeholder="City" />
        <input
          type="text"
          class="form-control"
          placeholder="State / Province / Region"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Zip / Postal Code"
        />
        <input type="tel" class="form-control" placeholder="Mobile" />
        <button
          class="btn btn--gradient-bg delivery__btn"
          @click.prevent="onClick"
        >
          Save and Ship To This Address
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/scss/_custom.scss";

.delivery-info__row {
  padding-left: 78px;
  padding-right: 121px;
  padding-bottom: 134px;
}

.delivery-info__form {
  width: 100%;
  background: #fff7df;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 67px 0;
}

.delivery-info__form > h5 {
  margin-bottom: 55px;
}

.form-group {
  width: 57.2%;
  margin: auto;
}

.form-control {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 9px;
  padding: 21px 0 21px 20px;
  font-family: $font-family-base;
}

.form-control:last-of-type {
  margin-bottom: 0;
}

.form-control::placeholder {
  font-size: $font-size-base;
  font-family: $font-family-base;
  padding: 21px 0 21px 20px;
}

.delivery__btn {
  width: 100%;
  margin-top: 79px;
}
</style>

<script>
import Modal from "@/components/app/Modal";

export default {
  data: () => ({
    isModal: false,
  }),
  components: {
    Modal,
  },
  methods: {
    onClick() {
      this.$modal.show(
        Modal,
        { text: "This text is passed as a property" },
        {
          height: "auto",
          width: "519px",
          draggable: true,
          adaptive: true,
          styles: {
            "border-radius": "10px",
            "box-shadow": "0px 12px 35px rgba(160, 121, 0, 0.2)",
          },
        }
      );
    },
  },
};
</script>
