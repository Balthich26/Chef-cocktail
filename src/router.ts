import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CocktailItem from './components/CocktailItem.vue';
import CocktailSearch from './components/CocktailSearch.vue';
import CocktailRandom from './components/CocktailRandom.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/cocktail/:id',
        name: 'cocktailItem',
        component: CocktailItem,
        props: true,
    },
    {
        path: '/search/:name',
        name: 'cocktailSearch',
        component: CocktailSearch,
        props: true,
    },
    {
        path: '/random',
        name: 'cocktailRandom',
        component: CocktailRandom,
    },
  ],
});
