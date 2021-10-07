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

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const getCoins = useCallback(() => {
    setInterval(async () => {
      const response = await makeQuery(urls.coins);
      const sortedResponse = Array.isArray(response)
        ? response.sort((item1: coinType, item2: coinType) => {
            if (item1.symbol < item2.symbol) return -1;
            if (item1.symbol > item2.symbol) return 1;
            return 0;
          })
        : response;

      if (Array.isArray(sortedResponse)) {
        dispatch(setCoins(sortedResponse));
      }
    }, 1000);
  }, [dispatch]);

  const tradesWebsocket = useCallback(() => {
    const tradesWebSocket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@aggTrade"
    );

    tradesWebSocket.onmessage = function (event: any) {
      var tradesData = JSON.parse(event.data);
      dispatch(setTrades(tradesData));
    };
  }, [dispatch]);

  const orderBookWebsocket = useCallback(() => {
    const orderBookWebSocket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@depth"
    );

    orderBookWebSocket.onmessage = function (event: any) {
      var orderBookData = JSON.parse(event.data);
      dispatch(setOrderBook(orderBookData));
    };
  }, [dispatch]);

  useEffect(() => {
    // getCoins();
    // tradesWebsocket();
    orderBookWebsocket();
    const user = sessionStorage.getItem("userData");
    if (!user) {
      navigator("/auth");
    }
  }, [getCoins, navigator, orderBookWebsocket, tradesWebsocket]);

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
