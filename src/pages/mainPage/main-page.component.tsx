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

const Main = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  // const getTrades = useCallback(async () => {
  //   const response = await makeQuery(urls.trades);
  //   dispatch(setTrades(response));
  // }, [dispatch]);

  const getCoins = useCallback(() => {
    setInterval(async () => {
      const response = await makeQuery(urls.coins);
      console.log(response);

      dispatch(
        setCoins(
          response.sort((item1: any, item2: any) => item1.symbol - item2.symbol)
        )
      );
    }, 1000);
  }, [dispatch]);

  const getOrderBook = useCallback(async () => {
    const response = await makeQuery(urls.orderBook);
    dispatch(setOrderBook(response));
  }, [dispatch]);

  const coinsWebsocket = useCallback(() => {
    const coinsWebSocket = new WebSocket(
      // "wss://stream.binance.com:9443/ws/!miniTicker@arr"
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    coinsWebSocket.onmessage = function (event: any) {
      var coinsData = JSON.parse(event.data);

      dispatch(setCoins(coinsData.slice(0)));
    };
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
    getCoins();
    tradesWebsocket();
    // coinsWebsocket();
    orderBookWebsocket();
    const user = sessionStorage.getItem("userData");
    if (!user) {
      navigator("/auth");
    }
  }, [
    coinsWebsocket,
    getCoins,
    getOrderBook,
    navigator,
    orderBookWebsocket,
    tradesWebsocket,
  ]);

  return (
    <div>
      <Header />
      <div className="main-content">
        <Instruments />
        <OrderBook />
        <Trades />
      </div>
    </div>
  );
};

export default Main;
