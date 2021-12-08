import { actionTypes } from './action.types';

export const setTrades = (payload: any) => {
  return {
    type: actionTypes.SET_TRADES,
    payload,
  };
};

export const setCoins = (payload: any) => {
  return {
    type: actionTypes.SET_COINS,
    payload,
  };
};

export const setCoinsSort = (payload: any) => {
  return {
    type: actionTypes.SET_COINS_SORT,
    payload,
  };
};

export const setOrderBook = (payload: any) => {
  return {
    type: actionTypes.SET_ORDERBOOK,
    payload,
  };
};

export const setCandleStick = (payload: any) => {
  return {
    type: actionTypes.SET_CANDLESTICK,
    payload,
  };
};

export const setRisk = (payload: any) => {
  return {
    type: actionTypes.SET_RISK,
    payload,
  };
};

export const setAsset = (payload: any) => {
  return {
    type: actionTypes.SET_ASSET,
    payload,
  };
};
