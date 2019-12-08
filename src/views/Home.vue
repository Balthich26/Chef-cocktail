<template>
  <div>
    <cocktail-list></cocktail-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CocktailList from "@/components/CocktailList.vue";

export default Vue.extend({
  name: "home",
  components: {
    CocktailList
  }
});
</script>
