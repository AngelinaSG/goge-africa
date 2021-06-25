<template>
  <div class="modal__pay-card">
    <h3 class="pay-card__title">Card</h3>
    <form class="pay-card__form"></form>
  </div>
</template>

<style scoped>
.modal__pay-card {
  width: 519px;
  height: 540px;
  border: 1px solid #efefef;
  border-radius: 10px;
}

.pay-card__title {
  height: 10.92%;
  line-height: 59px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  color: #727272;
}

.pay-card__form {
  width: 448px;
  height: 286px;
  background: url("~@/assets/pictures/pay-card_bg.svg") no-repeat;
  background-size: cover;
  margin-right: 33px;
  margin-left: 38px;
  margin-top: 30px;
}
</style>
