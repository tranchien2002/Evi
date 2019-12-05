import * as actions from '../actions';

const initialState = {
  web3: null,
  account: null,
  balance: 0,
  factory: null
};

const contract = (state = initialState, action) => {
  switch (action.type) {
    case actions.WEB3_CONNECT:
      return {
        ...state,
        web3: action.web3,
        account: action.account,
        balance: action.balance
      };
    case actions.INSTANTIATE_CONTRACT:
      return {
        ...state,
        factory: action.factory
      };
    default:
      return state;
  }
};

export default contract;
