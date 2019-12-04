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
  async setWeb3({ commit }) {
    commit('setWeb3', await getWeb3());
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
