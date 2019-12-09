import favorits from '@/store/modules/favorits';
import localStoragePlugin from '@/store/plugins/localStorage.ts';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favorits,
  },
  plugins: [localStoragePlugin],
});
