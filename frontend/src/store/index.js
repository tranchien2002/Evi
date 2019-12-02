import Vue from 'vue';
import Vuex from 'vuex';
import contractModule from './modules/contract';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    contract: contractModule
  }
});
