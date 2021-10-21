import { mergeCoins } from "./../helpers/reducer.utils";
import { StateType } from "../types/redux.types";
import { actionTypes } from "./action.types";

const initialState: StateType = {
  MainCoin: "BTSUSDT",
  trades: [],
  coins: [],
  orderBook: { E: 0, U: 0, e: "", s: "", u: 0, b: [], a: [], T: 0 },
  candleStick: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_TRADES:
      // need to extract this codein lvl upper
      if (state.trades.length && action.payload.T > state.trades[0].T + 550) {
        const newTrades =
          state.trades.length < 30
            ? [action.payload, ...state.trades]
            : [action.payload, ...state.trades.slice(0, 29)];
        return {
          ...state,
          trades: newTrades,
        };
      } else if (!state.trades.length) {
        return {
          ...state,
          trades: [action.payload, ...state.trades],
        };
      }

      return {
        ...state,
      };
    case actionTypes.SET_ORDERBOOK:
      if (action.payload.T > state.orderBook.T + 1000) {
        return {
          ...state,
          orderBook: action.payload,
        };
      }

      return {
        ...state,
      };
    case actionTypes.SET_COINS:
      const newCoins = mergeCoins(state.coins, action.payload, "s");

      return {
        ...state,
        coins: newCoins,
      };

    case actionTypes.SET_CANDLESTICK:
      const { t, o, h, l, c } = action.payload;

      return {
        ...state,
        candleStick: [
          ...state.candleStick,
          { x: t, y: [Number(o), Number(h), Number(l), Number(c)] },
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
