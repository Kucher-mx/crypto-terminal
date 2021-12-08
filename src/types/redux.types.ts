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
};
