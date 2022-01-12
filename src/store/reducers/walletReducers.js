
import { types } from '../actions/walletTypes';

const walletData = (state, action) => {
    if(state == null){
        state = {
            firstAddress: [],
            firstWalletData: [],
            firstWalletTransactions: [],
            secondAddress: [],
            secondWalletData: [],
            secondWalletTransactions: []
        };
    };
    
    console.log('made it to reducers');
    switch(action.type){
        case types.SUBMIT:
            console.log('made it to reducers');
            if(action.walletData.number === 1){
                console.log(action.walletData.address);
                return {
                    ...state,
                    firstAddress: action.walletData.address,
                    firstWalletData: action.walletData.walletObj,
                    firstWalletTransactions: {
                        transactions: [action.walletData.transactions]
                    },
                }
            };
            if(action.walletData.number === 2){
                return {
                    ...state,
                    secondAddress: action.walletData.address,
                    secondWalletData: action.walletData.walletObj,
                    secondWalletTransactions: {
                        transactions: [action.walletData.transactions]
                    },
                };
            };
            break;
        
        default:
            return state;

        // case types.REMOVE:

        
        // default:
        //     return state;
    };
};

export default walletData