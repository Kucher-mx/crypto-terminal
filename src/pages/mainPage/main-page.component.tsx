import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/header/header.component';
import { useDispatch } from 'react-redux';
import { setCandleStick, setCoins, setOrderBook, setTrades } from '../../redux/actions';

import Trades from '../../components/trades/trades.component';

import './main.styles.css';
import OrderBook from '../../components/orderbook/orderbook.component';
import Instruments from '../../components/instruments/instruments.component';
import { websocketGetterOptions } from '../../consts/consts';
import Chart from '../../components/chart/chart.components';

import CryptoJS from 'crypto-js';
import CreateOrder from '../../components/create-order/create-order.component';
import Orders from '../../components/orders/orders.component';
import Positions from '../../components/positions/positions.component';

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const apiKey = '173b2ac4d890633335c10caf56564615f129c676e158a3df1cc5b8214ec526db';
    const apiSecretKey = 'de29082a973663f99c4d2c873a78c660d1ba4c388cf8dd32d9ab982bea43ffde';

    let dataQueryString = 'symbol=BTCUSDT&side=BUY&type=MARKET&quantity=1&timestamp=' + Date.now();

    let signature = CryptoJS.HmacSHA256(dataQueryString, apiSecretKey).toString(CryptoJS.enc.Hex);

    // fetch(
    //   `https://testnet.binancefuture.com/fapi/v1/order?${dataQueryString}&signature=${signature}`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'X-MBX-APIKEY': apiKey,
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     // body: JSON.stringify({
    //     //   symbol: 'BTCUSDT',
    //     //   side: 'BUY',
    //     //   type: 'TRAILING_STOP_MARKET',
    //     //   timestamp: 1591702613943,
    //     //   price: 67745.63,
    //     //   quantity: 0.01,
    //     // }),
    //   },
    // )
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));

    const webSocket = new WebSocket('wss://fstream.binance.com/ws');
    webSocket.onopen = function (event) {
      webSocket.send(JSON.stringify(websocketGetterOptions));
    };

    webSocket.onmessage = e => {
      const data = JSON.parse(e.data);

      if (data.e === 'aggTrade') {
        dispatch(setTrades(data));
      } else if (data.e === 'depthUpdate') {
        dispatch(setOrderBook(data));
      } else if (Array.isArray(data)) {
        dispatch(setCoins(data));
      } else if (data.e === 'kline') {
        dispatch(setCandleStick(data.k));
      }
    };

    const user = sessionStorage.getItem('userData');
    if (!user) {
      navigator('/auth');
    }
  }, [dispatch, navigator]);

  return (
    <>
      <Header />
      <div className="main-content">
        <CreateOrder />
        <Instruments />
        <OrderBook />
        <Trades />
        <Chart />
        <Orders />
        <Positions />
      </div>
    </>
  );
};

export default Main;
