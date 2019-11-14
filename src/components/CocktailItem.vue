<template>
  <main>
    <img class="cocktailItem__thumb" :src="cocktailItem.strDrinkThumb" alt="Votre cocktail:">
    <h2>{{ cocktailItem.strDrink }}</h2>
    <p>{{ cocktailItem.strAlcoholic }}</p>
    <ul>
      <li v-for="(info, name) in cocktailItem" :key="name" class="ingredient">
          {{ info }}
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import Cocktail from '@/models/cocktail';

export default Vue.extend({
  props: ['id'],
  data() {
    return {
      cocktailItem: ''
    }
  },
  computed: {
    
  },
  mounted() {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.id)
      .then((response) => {
        this.cocktailItem = response.data.drinks;
        this.cocktailItem = this.cocktailItem[0];
      })
      .catch((error) => {
        console.log(error)
      })
  },
});
</script>

<style scoped lang="scss">
  .cocktailItem__thumb {
    width: 100vw;
  }
</style> 