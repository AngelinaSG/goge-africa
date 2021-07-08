<template>
  <form class="add-product__form">
    <h2 class="text-center">Fill in product details</h2>
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Title"
      />

      <input
        type="text"
        class="form-control form-control--custom"
        placeholder="Title"
      />

      <b-form-file
        accept=".jpg, .png, .gif"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="add-file-input"
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : "" }}</div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    file: null,
  }),
};
</script>

<style lang="scss" scoped>
.form-group {
  width: 57.2%;
  margin: auto;
}

.add-product__form h2 {
  margin-bottom: 20px;
}

.form-control--custom {
  font-size: 0.875rem;
  border: 1px solid #efefef;
  border-radius: 100px;
  height: 60px;
  margin-bottom: 20px;
  padding: 21px 0 21px 20px;
}

.custom-file-input {
  border-radius: 100px;
}
</style>
