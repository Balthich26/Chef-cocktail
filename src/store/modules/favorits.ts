import Cocktail from '@/models/cocktail';
import { Module } from 'vuex';

function getFromLocalStorage(): Cocktail[] {
  const favCocktails: string | null = localStorage.getItem('cocktails');

  return favCocktails ? JSON.parse(favCocktails) : [];
}

const cocktails: Module<{ cocktails: Cocktail[] }, any> = {
  state: {
    cocktails: getFromLocalStorage(),
  },
  getters: {
    allFavs(state): Cocktail[] {
      return state.cocktails;
    },
  },
  mutations: {
    addFav(state, payload: { id: number, name: string, thumb: string, steps: string, alcoholic: string, ingredient1?: string,
                             ingredient2?: string, ingredient3?: string, ingredient4?: string, ingredient5?: string,
                             ingredient6?: string, ingredient7?: string, ingredient8?: string, ingredient9?: string,
                             ingredient10?: string,}) {
      state.cocktails.push(payload);
    },
    /*removeFav(state) {
      state.cocktails = state.cocktails.filter((todo) => !todo.done);
    },*/
  },
  actions: {
    addFav(context, payload) {
      context.commit('addFav', payload);
    },
    /*removeDone(context) {
      context.commit('removeDone');
    },*/
  },
};

export default cocktails;