export type firebaseUsersData = {
  apiKey: string;
  secretApiKey: string;
  email: string | null;
};

export type CreateOrderType = {
  type: string;
  asset: string;
  side: string;
  quantity?: string | null | number;
  price?: string | null | number;
  quoteOrderQty?: string | null | number;
  stopPrice?: string | null | number;
};
