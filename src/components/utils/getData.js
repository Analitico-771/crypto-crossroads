
export const getData = async (address) => {
    let url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=1&offset=1000&startblock=0&endblock=99999999&sort=desc&apikey=${process.env.REACT_APP_APIKEY}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data
    } catch (error) {
        console.log('Error with API', error);
    };
};