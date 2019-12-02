import getWeb3 from '@/utils/getWeb3';
const defaultContract = {
  web3: null
};

const mutations = {
  async setWeb3(state) {
    state.web3 = await getWeb3();
  }
};

const actions = {
  setWeb3(context) {
    context.commit('setWeb3');
  }
};

const getters = {};

export default {
  state: defaultContract,
  getters,
  mutations,
  actions
};
