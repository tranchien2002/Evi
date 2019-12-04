import { combineReducers } from 'redux';
import contract from './contract';

const rootReducer = combineReducers({
  contract: contract
});

export default rootReducer;
