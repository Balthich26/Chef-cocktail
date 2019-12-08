<template>
  <main>
    <h2>Cocktail List</h2>
    <div class="cocktailList__container">
      <ul class="cocktailList">
        <li v-for="drink in drinkInfo" :key="drink.idDrink" class="cocktailItem">
          <img :src="drink.strDrinkThumb" class="cocktailItem__thumb" />
          <h3>{{ drink.strDrink }}</h3>
          <p>{{ drink.strAlcoholic }}</p>
          <button @click="singleCocktail(drink.idDrink)">View</button>
          <button>Fav</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Cocktail from "@/models/cocktail";
import axios from "axios";

export default Vue.extend({
  data(): { drinkInfo: object } {
    return {
      drinkInfo: [],
    };
  },
  methods: {
    singleCocktail(id: number) {
      this.$router.push("/cocktail/" + id);
    }
  },
  mounted() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then(response => (this.drinkInfo = response.data.drinks))
      .catch(error => console.log(error));
  }
});
</script>

<style scoped lang="scss">
.cocktailItem__thumb {
  width: 100%;
}

.cocktailItem {
  background: grey;
}
</style> 