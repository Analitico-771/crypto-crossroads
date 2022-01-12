
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../../store/actions/walletActions';
import Wallets from './wallets';
import { findWallet } from '../utils/double';
import { getData } from '../utils/getData';

const INITIAL_STATE = {
    firstWalletAddress: '',//needs to match (e.target.name) name='firstWallet'
    secondWalletAddress: '',//needs to match (e.target.name) name='secondWallet'
    firstWalletData: [],
    secondWalletData: [],
};

const WalletAddressForm = () => {
    const[wallets, setWallets] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    }, [wallets]);

    const handleChange = (e) => {
        const {id, name, value} = e.target; // target = <input/> tag
        // input tag has properties
        // console.log(e.target);
        setWallets(INITIAL_STATE => (
            {
                ...INITIAL_STATE,
                [name]: value
            })
        );
        console.log(wallets);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit Executed');
        try {
            const{ firstWalletAddress, secondWalletAddress } = wallets;
            // make api calls
            const _firstWalletData = await getData(firstWalletAddress);
            // console.log('_firstWalletData', _firstWalletData);
            setWallets({...wallets, firstWalletData: _firstWalletData})
            const _secondWalletData = await getData(secondWalletAddress);
            // console.log('_secondWalletData', _secondWalletData);
            setWallets({...wallets, secondWalletData: _secondWalletData})

            // get transaction matches
            const firstWalletTransactions = findWallet(secondWalletAddress, _firstWalletData);
            // console.log('firstWalletTransactions', firstWalletTransactions);
            const secondWalletTransactions = findWallet(firstWalletAddress, _secondWalletData);
            // console.log('secondWalletTransactions', secondWalletTransactions);

            // dispatch global state
            dispatch(submit(1, firstWalletAddress, _firstWalletData.result, firstWalletTransactions));
            dispatch(submit(2, secondWalletAddress, _secondWalletData.result, secondWalletTransactions));

            alert('Form Submitted');

            // reset to INITIAL_STATE
            setWallets(INITIAL_STATE);


        } catch (error) {
            alert(`Error with API ${error}`);
            setWallets(INITIAL_STATE);
        };
    };

    return <>
        <div>
            <h3 className='container'>
                This app compares two wallet and tells you if they've had any transactions in at least the past 1k transactions. If so, it displays the results below
            </h3>
        </div>
        <div className='form-group fg--search'>
            <form onSubmit={handleSubmit}>
                <input
                    id='1'
                    type="text"
                    className='input'
                    name='firstWalletAddress'
                    placeholder='type first address'
                    value={wallets.firstWalletAddress.toLowerCase()} //event listener
                    onChange={handleChange} //event emitter
                    required
                    // these properties are all part of the e.target object
                    />

                <input
                    id='0'
                    type="text"
                    className='input'
                    name='secondWalletAddress'
                    placeholder='type second address'
                    value={wallets.secondWalletAddress.toLowerCase()}
                    onChange={handleChange}
                    required
                    />

                <button
                    type='submit'
                    className='btn-primary rounded form-button'
                    id='btn-submit'
                    >
                    SUBMIT
                </button>

            </form>
        </div>
        {/* <Wallets/> */}
    </>;
}
 
export default WalletAddressForm;