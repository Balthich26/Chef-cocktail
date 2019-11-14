<template>
  <div id="app">
    <header id="header__nav" class="nav-bars">
      <h1>Chef Cocktail</h1>
      <router-link to="/">Home</router-link> |
    </header>
    <router-view />
  </div>
</template>

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

          #footer-nav {
              bottom: 0;
              left: 0;
          }
      }
</style>
