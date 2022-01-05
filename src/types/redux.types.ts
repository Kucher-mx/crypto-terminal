export type Action = {
  type: string;
  payload: any;
};

export type coinType = {
  closeTime: number;
  count: number;
  firstId: number;
  highPrice: string;
  lastId: number;
  lastPrice: string;
  lastQty: string;
  lowPrice: string;
  openPrice: string;
  openTime: number;
  priceChange: string;
  priceChangePercent: string;
  quoteVolume: string;
  symbol: string;
  volume: string;
  weightedAvgPrice: string;
};

export type TradesType = {
  E: number;
  M: boolean;
  T: number;
  a: number;
  e: string;
  f: number;
  l: number;
  m: boolean;
  p: string;
  q: string;
  s: string;
};

export type OrderbookType = {
  E: number;
  U: number;
  e: string;
  s: string;
  u: number;
  T: number;
  b: Array<Array<string>>;
  a: Array<Array<string>>;
};

export type OrderType = {
  avgPrice: string; //"0.00000",
  clientOrderId: string; // "abc",
  cumQuote: string; //"0",
  executedQty: string; //"0",
  orderId: number; //1917641,
  origQty: string; //"0.40",
  origType: string; //"TRAILING_STOP_MARKET",
  price: string; //"0",
  reduceOnly: boolean; //false,
  side: string; //"BUY",
  positionSide: string; //"SHORT",
  status: string; //"NEW",
  stopPrice: string; //"9300",                // please ignore when order type is TRAILING_STOP_MARKET
  closePosition: boolean; //false,   // if Close-All
  symbol: string; //"BTCUSDT",
  time: number; //1579276756075,              // order time
  timeInForce: string; //"GTC",
  type: string; //"TRAILING_STOP_MARKET",
  activatePrice: string; //"9020",            // activation price, only return with TRAILING_STOP_MARKET order
  priceRate: string; //"0.3",                 // callback rate, only return with TRAILING_STOP_MARKET order
  updateTime: number; //1579276756075,        // update time
  workingType: string; //"CONTRACT_PRICE",
  priceProtect: boolean; //false
};

export type StateType = {
  MainCoin: string;
  trades: TradesType[];
  coins: any[];
  orderBook: OrderbookType;
  candleStick: any;
  coinsSortProps: {
    field: string;
    key: boolean;
  };
  risk: 'manual' | 'auto';
  asset: string;
  orders: Array<OrderType>;
};
