<template>
  <div id="app">
    <header id="header__nav" class="nav-bars">
      <h1 id="bigTitle">Chef Cocktail</h1>
      <router-link class="nav__item" to="/">Home</router-link>
      <router-link class="nav__item" to="/random">Random</router-link>
      <input id="searchInput" placeholder="Cocktail name" type="text" v-model="searchString">
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
  body {
    margin: 0;
    padding: 0;
  }
  #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin: 0;
          padding: 0;
          max-width: 100%;
          margin-top: 20vh;

          li {
            list-style: none;
            margin-bottom: 7vh;
            box-shadow: 2px 2px 10px #2c3e50;
          }

          ul {
            padding-inline-end: 40px;
          }
          .nav-bars{
              background: black;
              position: fixed;
              top: 0;
              width: 100%;
              padding-bottom: 20px; 
              color: white;
              box-shadow: 2px 2px 10px #2c3e50;

              a {
                  color: greenyellow;
                  text-decoration: none;
                  margin-right: 5vw ;

                  &:hover{
                    cursor: pointer;
                    color: red;
                  }
              }
          }
          #searchInput{
            box-shadow: 0px 2px 10px greenyellow;
            border:none;
          }

          #header-nav {
              top: 0;
              left: 0;
          }
      }
</style>
