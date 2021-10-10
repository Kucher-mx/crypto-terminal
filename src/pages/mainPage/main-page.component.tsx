import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header/header.component";
import { makeQuery } from "../../helpers/query.utils";
import { useDispatch } from "react-redux";
import { setCoins, setOrderBook, setTrades } from "../../redux/actions";

import { urls } from "../../consts/urls";
import Trades from "../../components/trades/trades.component";

import "./main.styles.css";
import OrderBook from "../../components/orderbook/orderbook.component";
import Instruments from "../../components/instruments/instruments.component";
import { coinType } from "../../types/redux.types";
const Binance = require("node-binance-api");

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: "SUBSCRIBE",
      params: ["btcusdt@aggTrade", "btcusdt@depth", "!ticker@arr"],
      id: 1,
    };
    const webSocket = new WebSocket("wss://fstream.binance.com/ws");
    webSocket.onopen = function (event) {
      webSocket.send(JSON.stringify(options));
    };

    webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.e === "aggTrade") {
        dispatch(setTrades(data));
      } else if (data.e === "depthUpdate") {
        dispatch(setOrderBook(data));
      } else if (Array.isArray(data)) {
        dispatch(setCoins(data));
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
      </div>
    </>
  );
};

export default Main;
