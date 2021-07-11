<template>
  <div class="container dashboard__container">
    <div class="dashboard">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Add product" active>
          <AddProductForm />
        </b-tab>

        <b-tab title="Your Products">
          <UserProdacts />
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
import UserProdacts from "@/components/Dashboard/UserProdacts";

export default {
  name: "Dashboard",
  components: {
    AddProductForm,
    UserProdacts,
  },
  // data: () => ({
  //   filtersList: [],
  // }),
  // async mounted() {
  //
  // }
};
</script>

<style lang="scss" scoped>
.dashboard__container {
  padding: 80px;
}
</style>
