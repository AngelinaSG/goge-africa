<template>
  <ul class="bullet-list text-center">
    <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <div class="bullet-list__item">
        <div>
          <img :src="cocktail.strDrinkThumb" alt="" class="bullet-list__img" />
        </div>
        <div>
          <p class="semibold">{{ cocktail.strDrink }}</p>
          <p>{{ cocktail.strAlcoholic }}</p>
        </div>
        <div>{{ cocktail.strCategory }}</div>
        <div>{{ cocktail.strGlass }}</div>
        <div>
          Price: ${{ cocktail.idDrink }}
          <button
            class="btn btn--gradient-bg"
            @click="onBuy(cocktail.idDrink, cocktail.strDrink)"
          >
            Buy
          </button>
        </div>
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
  methods: {
    onBuy(idDrink, nameDrink) {
      console.log(idDrink);
      this.$emit("onBuy", idDrink, nameDrink);
    },
  },
};
</script>

<style scoped>
.bullet-list {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
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

.bullet-list__item button {
  margin-top: 15px;
}

.bullet-list__img {
  width: 80%;
  border-radius: 10px;
}
</style>
