<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader: AppHeader,
  },
};
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
  .nav-bars {
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
      margin-right: 5vw;

      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
  #searchInput {
    box-shadow: 0px 2px 10px greenyellow;
    border: none;
  }

  #header-nav {
    top: 0;
    left: 0;
  }
}
</style>
