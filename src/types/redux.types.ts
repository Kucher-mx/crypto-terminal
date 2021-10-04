export type Action = {
  type: string;
  payload: any;
};

export type StateType = {
  trades: {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
  }[];
  coins: any[];
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
