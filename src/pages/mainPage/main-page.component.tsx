import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCandleStick, setCoins, setOrderBook, setTrades } from '../../redux/actions';

import Trades from '../../components/trades/trades.component';

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

  useEffect(() => {
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
