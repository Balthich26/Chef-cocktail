<template>
  <main>
    <h2>Cocktail List</h2>
    <div class="cocktailList__container">
      <ul class="cocktailList">
        <li
          v-for="drink in drinkInfo"
          :key="drink.idDrink"
          class="cocktailItem"
        >
          <img :src="drink.strDrinkThumb" class="cocktailItem__thumb" />
          <h3>{{ drink.strDrink }}</h3>
          <p>{{ drink.strAlcoholic }}</p>
          <button
            class="cocktailItem__buttonSingle"
            @click="singleCocktail(drink.idDrink)"
          >
            View
          </button>
          <button @click="addFav(drink)">Fav</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Cocktail from '@/models/cocktail';
import axios from 'axios';

export default Vue.extend({
  data(): { drinkInfo: object } {
    return {
      drinkInfo: [],
    };
  },
  methods: {
    singleCocktail(id: number) {
      this.$router.push('/cocktail/' + id);
    },
    addFav(drink: any[]): void {
      this.$store.dispatch('addFav', {
        id: drink[0],
        name: drink[1],
        thumb: drink[20],
        steps: drink[14],
        alcoholic: drink[12],
        ingredient1: drink[21],
        ingredient2: drink[22],
        ingredient3: drink[23],
        ingredient4: drink[24],
        ingredient5: drink[25],
        ingredient6: drink[26],
        ingredient7: drink[27],
        ingredient8: drink[28],
        ingredient9: drink[29],
        ingredient10: drink[30],
      });
    },
  },
  mounted() {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => (this.drinkInfo = response.data.drinks))
      .catch((error) => console.log(error));
  },
});
</script>

<style scoped lang="scss">
.cocktailItem__thumb {
  width: 100%;
}

.cocktailItem {
  background: greenyellow;
}
</style>
