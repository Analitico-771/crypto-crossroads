
import { combineReducers } from 'redux';
import walletData from './walletReducers';

let reducer = combineReducers({
    walletData: walletData,
});

export default reducer