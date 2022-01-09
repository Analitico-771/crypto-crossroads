
export const findWallet = (walletAddress, walletData) => {
    let walletDataCopy = walletData.result, transactions = [], count = 0;
    // console.log(walletDataCopy.length)
    for (let i = 0; i < walletDataCopy.length; i++) {
        if(walletAddress === walletDataCopy[i].to){
            transactions.push(walletDataCopy[i].hash);
            count++;
        };
        // console.log(count);
    };
    console.log(`These wallets have interacted ${count} times over the last ${walletDataCopy.length} transactions`);
    // console.log(`These wallets have interacted ${count} times over the last ${walletDataCopy.result.length} transactions`);
}

// export const findWallet1 = (walletAddress, walletData) => {
//     let i = 0, walletDataCopy = walletData, transactions = [];
//     while(i < walletDataCopy.result.length){
//         if(walletAddress === walletDataCopy.result[i].to){
//             transactions.push(walletDataCopy.result[i].hash);
//             i++;
//         };
//     };
// }