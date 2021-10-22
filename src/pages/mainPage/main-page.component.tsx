import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header/header.component";
import { useDispatch } from "react-redux";
import {
  setCandleStick,
  setCoins,
  setOrderBook,
  setTrades,
} from "../../redux/actions";

import Trades from "../../components/trades/trades.component";

import "./main.styles.css";
import OrderBook from "../../components/orderbook/orderbook.component";
import Instruments from "../../components/instruments/instruments.component";
import { websocketGetterOptions } from "../../consts/consts";
import Chart from "../../components/chart/chart.components";

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const webSocket = new WebSocket("wss://fstream.binance.com/ws");
    webSocket.onopen = function (event) {
      webSocket.send(JSON.stringify(websocketGetterOptions));
    };

    webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.e === "aggTrade") {
        dispatch(setTrades(data));
      } else if (data.e === "depthUpdate") {
        dispatch(setOrderBook(data));
      } else if (Array.isArray(data)) {
        dispatch(setCoins(data));
      } else if (data.e === "kline") {
        dispatch(setCandleStick(data.k));
      }
    };

    const user = sessionStorage.getItem("userData");
    if (!user) {
      navigator("/auth");
    }
  }, [dispatch, navigator]);

  return (
    <>
      <Header />
      <div className="main-content">
        <Instruments />
        <OrderBook />
        <Trades />
        <Chart />
      </div>
    </>
  );
};

export default Main;
