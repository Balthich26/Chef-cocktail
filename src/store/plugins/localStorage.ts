import Cocktail from '@/models/cocktail';
import { Plugin } from 'vuex';

const localStoragePlugin: Plugin<{ cocktails: { cocktails: Cocktail[] } }> = (store) => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'cocktails/addFav':
      /*case 'todos/removeDone':*/
        localStorage.setItem(
          'cocktails',
          JSON.stringify(
            state.cocktails,
          ),
        );
        break;
      default:
        break;
    }
  });
};

export default localStoragePlugin;
