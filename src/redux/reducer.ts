import { StateType } from "../types/redux.types";
import { actionTypes } from "./action.types";

const initialState: StateType = {
  trades: [],
  coins: [],
  orderBook: { E: 0, U: 0, e: "", s: "", u: 0, b: [], a: [] },
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_TRADES:
      // need to extract this codein lvl upper
      const newTrades =
        state.trades.length < 50
          ? [action.payload, ...state.trades]
          : [action.payload, ...state.trades.slice(0, 49)];
      console.log("action", action.payload);
      console.log("newTrades", newTrades);

      return {
        ...state,
        trades: newTrades,
      };
    case actionTypes.SET_ORDERBOOK:
      return {
        ...state,
        orderBook: action.payload,
      };
    case actionTypes.SET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
