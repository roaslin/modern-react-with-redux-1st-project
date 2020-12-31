import { accountsReducer } from './accountsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  accounts: accountsReducer,
});
