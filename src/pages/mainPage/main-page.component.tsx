import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCandleStick, setCoins, setOrderBook, setOrders, setTrades } from '../../redux/actions';

import Trades from '../../components/trades/trades.component';
import CryptoJS from 'crypto-js';

import './main.styles.css';
import OrderBook from '../../components/orderbook/orderbook.component';
import Instruments from '../../components/instruments/instruments.component';
import { getWebsocketOptions } from '../../consts/consts';
import Chart from '../../components/chart/chart.components';

import CreateOrder from '../../components/create-order/create-order.component';
import Orders from '../../components/orders/orders.component';
import Positions from '../../components/positions/positions.component';
import { StateType } from '../../types/redux.types';

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const asset = useSelector((state: StateType) => state.asset);

  const getOrders = async () => {
    let dataQueryString = `symbol=${asset.toUpperCase()}&timestamp=${Date.now()}`;
    // let dataQueryString = `timestamp=${Date.now()}`;
    const apiKey = '173b2ac4d890633335c10caf56564615f129c676e158a3df1cc5b8214ec526db';
    const apiSecretKey = 'de29082a973663f99c4d2c873a78c660d1ba4c388cf8dd32d9ab982bea43ffde';
    let signature = CryptoJS.HmacSHA256(dataQueryString, apiSecretKey).toString(CryptoJS.enc.Hex);
    fetch(
      `https://testnet.binancefuture.com/fapi/v1/allOrders?${dataQueryString}&signature=${signature}`,
      // `https://testnet.binancefuture.com/fapi/v2/account?${dataQueryString}&signature=${signature}`,
      {
        method: 'GET',
        headers: {
          'X-MBX-APIKEY': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(response => dispatch(setOrders(response)))
      .catch(error => console.error(error));
  };

  const userDataStream = async () => {
    const apiKey = '173b2ac4d890633335c10caf56564615f129c676e158a3df1cc5b8214ec526db';
    const apiSecretKey = 'de29082a973663f99c4d2c873a78c660d1ba4c388cf8dd32d9ab982bea43ffde';
    let signature = CryptoJS.HmacSHA256('', apiSecretKey).toString(CryptoJS.enc.Hex);
    const listenKey = await fetch(
      `https://testnet.binancefuture.com/fapi/v1/userDataStream?signature=${signature}`,
      // `https://testnet.binancefuture.com/fapi/v2/account?${dataQueryString}&signature=${signature}`,
      {
        method: 'GET',
        headers: {
          'X-MBX-APIKEY': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log('listenKey', listenKey);
  };

  useEffect(() => {
    userDataStream();
    const webSocket = new WebSocket('wss://fstream.binance.com/ws');
    const websockedOptions = getWebsocketOptions({ asset });
    webSocket.onopen = function (event) {
      webSocket.send(JSON.stringify(websockedOptions));
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
  }, [asset, dispatch, navigator]);

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
