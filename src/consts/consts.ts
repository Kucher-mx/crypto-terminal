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
