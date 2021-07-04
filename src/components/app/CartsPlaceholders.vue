<template>
  <div class="ph-item">
    <div class="ph-row">
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
      <div class="ph-picture"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartsPlaceholders",
};
</script>

<style scoped>
.ph-item {
  width: 100%;
  border: none;
  padding: 0;
}

.ph-row {
  padding: 0;
  flex-direction: row;
  align-items: stretch;
}

.ph-picture {
  width: 32.66%;
  height: 290px;
  border-radius: 10px;
  margin-right: 9px;
}

.ph-picture:nth-of-type(3n) {
  margin-right: 0;
}
</style>
