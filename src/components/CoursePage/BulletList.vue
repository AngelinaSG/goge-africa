<template>
  <ul>
    <li
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      class="bullet-list text-center"
    >
      <div class="bullet-list__item">
        <div>
          <img :src="cocktail.strDrinkThumb" alt="" class="bullet-list__img" />
        </div>
        <div>{{ cocktail.strAlcoholic }}</div>
        <div>{{ cocktail.strCategory }}</div>
        <div>{{ cocktail.strGlass }}</div>
        <div>Price: ${{ cocktail.idDrink }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BulletList",
  props: {
    cocktails: Array,
  },
};
</script>

<style scoped>
.bullet-list {
  list-style: none;
  padding-inline-start: 0;
  margin-bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

.bullet-list__item {
  background: #fff7df;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
}

.bullet-list__item {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
}

.bullet-list__img {
  width: 80%;
  border-radius: 10px;
}
</style>
