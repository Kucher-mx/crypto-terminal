export const apiKey = '1008a3c84b15c627d7cc40dd87b02ec574b70551ccf70144c62c2707ea6ad795';
export const apiKeySecret = '5c84e141c11863e025e54cada5e9c4b29ca5738c58b8985fb80b9516dac439d4';

export const firebaseConfig = {
  apiKey: 'AIzaSyAeEcVxf6NiYnKWqMu8LcoCb2Ysti9red8',
  authDomain: 'crypto-terminal-3309a.firebaseapp.com',
  projectId: 'crypto-terminal-3309a',
  storageBucket: 'crypto-terminal-3309a.appspot.com',
  messagingSenderId: '240452210237',
  appId: '1:240452210237:web:f1bc9955c88205f6332454',
  measurementId: 'G-41L4YQC7Y7',
};

export const DataFormatOptions: {
  month: 'short';
  day: 'numeric';
  hour: 'numeric';
  minute: 'numeric';
  second: 'numeric';
  hour12: false;
} = {
  day: 'numeric',
  month: 'short',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
};

export const getWebsocketOptions = ({ asset }: { asset: string }) => {
  return {
    method: 'SUBSCRIBE',
    params: [`${asset.toLowerCase()}@aggTrade`, `${asset.toLowerCase()}@depth`, `!ticker@arr`],
    id: 1,
  };
};

export const websocketGetterOptions = {
  method: 'SUBSCRIBE',
  params: [
    'btcusdt@aggTrade',
    'btcusdt@depth',
    '!ticker@arr',
    // "btcusdt@kline_1m",
  ],
  id: 1,
};

// create order:
// const apiKey = '173b2ac4d890633335c10caf56564615f129c676e158a3df1cc5b8214ec526db';
//     const apiSecretKey = 'de29082a973663f99c4d2c873a78c660d1ba4c388cf8dd32d9ab982bea43ffde';

//     let dataQueryString = 'symbol=BTCUSDT&side=BUY&type=MARKET&quantity=1&timestamp=' + Date.now();

//     let signature = CryptoJS.HmacSHA256(dataQueryString, apiSecretKey).toString(CryptoJS.enc.Hex);

//     // fetch(
//     //   `https://testnet.binancefuture.com/fapi/v1/order?${dataQueryString}&signature=${signature}`,
//     //   {
//     //     method: 'POST',
//     //     headers: {
//     //       'X-MBX-APIKEY': apiKey,
//     //       'Content-Type': 'application/json',
//     //       Accept: 'application/json',
//     //     },
//     //     // body: JSON.stringify({
//     //     //   symbol: 'BTCUSDT',
//     //     //   side: 'BUY',
//     //     //   type: 'TRAILING_STOP_MARKET',
//     //     //   timestamp: 1591702613943,
//     //     //   price: 67745.63,
//     //     //   quantity: 0.01,
//     //     // }),
//     //   },
//     // )
//     //   .then(response => response.json())
//     //   .then(response => console.log(response))
//     //   .catch(error => console.error(error));
