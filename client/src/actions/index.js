import getWeb3 from '../utils/getWeb3';

export const WEB3_CONNECT = 'WEB3_CONNECT';
export const web3Connect = () => async (dispatch) => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  //   if (web3.currentProvider.connection.networkVersion !== '88') {
  //     alert('Unknown network, please change network to TomoChain network');
  //     return;
  //   }
  if (accounts.length > 0) {
    const account = accounts[0];
    let balance = await web3.eth.getBalance(account);
    balance = parseFloat(web3.utils.fromWei(balance)).toFixed(2);
    dispatch({
      type: WEB3_CONNECT,
      web3,
      account,
      balance
    });
  } else {
    console.log('Account not found');
  }
};

export const INSTANTIATE_CONTRACT = 'INSTANTIATE_CONTRACT';
export const instantiateContracts = () => async (dispatch, getState) => {
  //   const state = getState();
  //   let web3 = state.tomo.web3;
  //   const networkId = process.env.REACT_APP_TOMO_ID;
  //   let factoryAddress = Factory.networks[networkId].address;
  //   let factory = new web3.eth.Contract(Factory.abi, factoryAddress, {
  //     transactionConfirmationBlocks: 1
  //   });
  //   dispatch({
  //     type: INSTANTIATE_CONTRACT,
  //     factory
  //   });
};
