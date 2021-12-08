import { mergeCoins } from './../helpers/reducer.utils';
import { StateType } from '../types/redux.types';
import { actionTypes } from './action.types';

const initialState: StateType = {
  MainCoin: 'BTSUSDT',
  trades: [],
  coins: [],
  orderBook: { E: 0, U: 0, e: '', s: '', u: 0, b: [], a: [], T: 0 },
  candleStick: [],
  coinsSortProps: {
    field: 's',
    key: false,
  },
  risk: 'manual',
  asset: 'BTCUSDT',
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_TRADES:
      // need to extract this codein lvl upper
      if (state.trades.length && action.payload.T > state.trades[0].T + 500) {
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

    case actionTypes.SET_COINS_SORT:
      return {
        ...state,
        coinsSortProps: action.payload,
      };

    case actionTypes.SET_COINS:
      const newCoins = mergeCoins(state.coins, action.payload, 's');

      return {
        ...state,
        coins: newCoins,
      };

    case actionTypes.SET_CANDLESTICK:
      const { t, o, h, l, c, v } = action.payload;

      const newEl = {
        Time: new Date(t),
        Date: new Date(t).toDateString(),
        Label: 'label',
        Close: Number(c),
        Open: Number(o),
        High: Number(h),
        Low: Number(l),
        Volume: Number(v),
      };
      if (
        state.candleStick.length &&
        t > Number(state.candleStick[state.candleStick.length - 1].Time) + 3600
      ) {
        return {
          ...state,
          candleStick: [...state.candleStick, newEl],
        };
      } else {
        if (!state.candleStick.length) {
          return {
            ...state,
            candleStick: [...state.candleStick, newEl],
          };
        }
        const mergeEl = {
          ...state.candleStick[state.candleStick.length - 1],
          Close: Number(c),
          High: Number(h),
          Low: Number(l),
        };
        return {
          ...state,
          candleStick: [...state.candleStick.slice(0, -1), mergeEl],
        };
      }
    case actionTypes.SET_RISK:
      return {
        ...state,
        risk: action.payload,
      };
    case actionTypes.SET_ASSET:
      return {
        ...state,
        asset: action.payload,
        trades: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
