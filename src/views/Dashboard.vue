<template>
  <div class="container dashboard__container">
    <div class="dashboard">
      <b-tabs v-model="tabIndex" content-class="mt-3" fill>
        <b-tab title="Add product" active>
          <AddProductForm v-if="tabIndex === 0" />
        </b-tab>

        <b-tab title="Your Products">
          <UserProducts v-if="tabIndex === 1" />
        </b-tab>

        <b-tab title="Very, very long title"
          ><p>I'm the tab with the very, very long title</p></b-tab
        >
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import AddProductForm from "@/components/Dashboard/AddProductForm";
import UserProducts from "@/components/Dashboard/UserProducts";

export default {
  name: "Dashboard",
  components: {
    AddProductForm,
    UserProducts,
  },
  data: () => ({
    tabIndex: 0,
  }),
};
</script>

<style lang="scss" scoped>
.dashboard__container {
  padding: 80px;
}
</style>
