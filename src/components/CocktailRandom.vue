<template>
  <main>
    <img class="cocktailItem__thumb" :src="cocktailItem.strDrinkThumb" alt="Votre cocktail:" />
    <h2>{{ cocktailItem.strDrink }}</h2>
    <p>{{ cocktailItem.strAlcoholic }}</p>
    <ul>
      <li v-bind:key="info" v-for="info in ingredientsList"  class="ingredient">{{ info }}</li>
    </ul>
    <p>
      <strong>Preparation:</strong>
      {{ cocktailItem.strInstructions }}
    </p>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Cocktail from "@/models/cocktail";

export default Vue.extend({
  data() {
    return {
      cocktailItem: '',
      ingredientsList: {},
    };
  },
  methods: {
    fetchResult() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
          this.cocktailItem = response.data.drinks;
          this.cocktailItem = this.cocktailItem[0];
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  computed: {
    listIngredients: function() {
      Object.keys(this.cocktailItem)
        .filter((key) => key.indexOf("Ingredient") >= 0)
        .reduce((filteredObj, key) => {
          (filteredObj as any)[key] = this.cocktailItem[key];
          Vue.set(this.ingredientsList, key, filteredObj[key]);
          return filteredObj;
        }, {});
    },
  },
  mounted() {
    this.fetchResult();
  },
  watch: {
    random() {
      this.fetchResult();
    },
  },
});
</script>

<style scoped lang="scss">
.cocktailItem__thumb {
  width: 100vw;
}
.ingredient li{
  display: inline;
}
</style> 