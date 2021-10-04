import { actionTypes } from "./action.types";

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

export const setOrderBook = (payload: any) => {
  return {
    type: actionTypes.SET_ORDERBOOK,
    payload,
  };
};
