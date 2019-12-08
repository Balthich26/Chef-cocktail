<template>
  <main>
    <img class="cocktailItem__thumb" :src="cocktailItem.strDrinkThumb" alt="Votre cocktail:" />
    <h2>{{ cocktailItem.strDrink }}</h2>
    <p>{{ cocktailItem.strAlcoholic }}</p>
    <ul>
      <li v-for="(info, index) in listIngredients" :key="index" class="ingredient">{{ info }}</li>
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
  props: ["id"],
  data() {
    return {
      cocktailItem: ""
    };
  },
  computed: {
    listIngredients: function() {
      Object.keys(this.cocktailItem)
        .filter(key => key.indexOf("Ingredient") >= 0)
        .reduce((filteredObj, key) => {
          filteredObj[key] = this.cocktailItem[key];
          return filteredObj;
        }, {});
    }
  },
  mounted() {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.id
      )
      .then(response => {
        this.cocktailItem = response.data.drinks;
        this.cocktailItem = this.cocktailItem[0];
        console.log(this.cocktailItem);
      })
      .catch(error => {
        console.log(error);
      });
  }
});
</script>

<style scoped lang="scss">
.cocktailItem__thumb {
  width: 100vw;
}
</style> 