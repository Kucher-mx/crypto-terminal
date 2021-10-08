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

export type StateType = {
  trades: {
    // id: number;
    // price: string;
    // qty: string;
    // quoteQty: string;
    // time: number;
    // isBuyerMaker: boolean;
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: 1498793709153;
    m: boolean;
  }[];
  coins: coinType[];
  orderBook: {
    E: number;
    U: number;
    e: string;
    s: string;
    u: number;
    b: Array<Array<string>>;
    a: Array<Array<string>>;
  };
};
