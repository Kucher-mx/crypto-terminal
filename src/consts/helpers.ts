import { CreateOrderType } from '../types/gen.types';
import CryptoJS from 'crypto-js';
// create order:
const apiKey = '173b2ac4d890633335c10caf56564615f129c676e158a3df1cc5b8214ec526db';
const apiSecretKey = 'de29082a973663f99c4d2c873a78c660d1ba4c388cf8dd32d9ab982bea43ffde';

export const createOrder = ({
  type,
  asset,
  side,
  quantity = null,
  price = null,
  quoteOrderQty = null,
  stopPrice = null,
}: CreateOrderType) => {
  let dataQueryString = `symbol=${asset.toUpperCase()}&side=${side.toUpperCase()}&type=${type.toUpperCase()}&timestamp=${Date.now()}`;

  if (type === 'market' && quoteOrderQty) {
    dataQueryString = `&quoteOrderQty=${quoteOrderQty}`;
  }

  if (type === 'limit' && price && quantity) {
    dataQueryString += `&timeInForce=GTC&quantity=${quantity}&price=${+price}`;
  }

  if (type === 'stop-limit' && stopPrice && quantity) {
    dataQueryString = `&quantity=${quantity}&stopPrice=${+stopPrice}`;
  }

  let signature = CryptoJS.HmacSHA256(dataQueryString, apiSecretKey).toString(CryptoJS.enc.Hex);

  fetch(
    `https://testnet.binancefuture.com/fapi/v1/order?${dataQueryString}&signature=${signature}`,
    {
      method: 'POST',
      headers: {
        'X-MBX-APIKEY': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      mode: 'no-cors',
    },
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error));
};
