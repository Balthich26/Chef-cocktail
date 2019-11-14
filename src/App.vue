<template>
  <div id="app">
    <header id="header__nav" class="nav-bars">
      <h1>Chef Cocktail</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/random">Chef Roulette</router-link>
      <input placeholder="Cocktail name" type="text" v-model="searchString">
      <button :disabled="!dataAvailable" @click="searchCocktail">Go</button>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchCocktail () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>

<style lang="scss">
  #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          

          .nav-bars{
              background: cornflowerblue;
              position: fixed;
              width: 100%;
              padding: 10px;
              color: white;

              a {
                  color: white;
                  text-decoration: none;
              }
          }

          #header-nav {
              top: 0;
              left: 0;
          }
      }
</style>
