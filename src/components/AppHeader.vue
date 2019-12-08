<template>
  <header id="header__nav" class="nav-bars">
    <h1 id="bigTitle">Chef Cocktail</h1>
    <router-link class="nav__item" to="/">Home</router-link>
    <router-link class="nav__item" to="/random">Random</router-link>
    <input id="searchInput" placeholder="Cocktail name" type="text" v-model="searchString" />
    <button :disabled="!dataAvailable" @click="searchCocktail">Go</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchCocktail() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
};
</script>