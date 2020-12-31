import { accountsReducer } from './accountsReducer';
import { combineReducers } from 'redux';
import { transactionsReducer } from './transactionsReducer';

export default combineReducers({
  accounts: accountsReducer,
  transactions: transactionsReducer,
});
