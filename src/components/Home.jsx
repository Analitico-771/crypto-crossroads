
import React, {useEffect} from 'react';
import WalletAddressForm from './sub-components/walletAddressForm';
import Wallets from './sub-components/wallets';

const Home = () => {
    useEffect(() => {
    //   return () => {
    //
    //   };
    });

    return <>
        <WalletAddressForm/>
        <Wallets/>
    </>;
}
 
export default Home