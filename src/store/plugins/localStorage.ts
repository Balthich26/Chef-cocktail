import Cocktail from '@/models/cocktail';
import { Plugin } from 'vuex';

const localStoragePlugin: Plugin<{ cocktails: { cocktails: Cocktail[] } }> = (
  store,
) => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'favorits/addFav':
        /*case 'todos/removeDone':*/
        localStorage.setItem(
          'cocktails',
          JSON.stringify(state.cocktails.cocktails),
        );
        break;
      default:
        break;
    }
  });
};

export default localStoragePlugin;
