/* eslint-disable no-console */
import getWeb3 from '@/utils/getWeb3';
const state = {
  web3: null
};

const mutations = {
  setWeb3(state, payload) {
    state.web3 = null;
    state.web3 = payload;
  }
};

const actions = {
<<<<<<< HEAD
  async setWeb3({ commit }) {
    commit('setWeb3', await getWeb3());
=======
  async setWeb3({ commit }, web3) {
    commit('setWeb3', () => web3);
    let test = await state.web3().eth.getAccounts();
    console.log(test);
>>>>>>> feat: change web3 object to function
  }
};

const getters = {};

export const contract = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
