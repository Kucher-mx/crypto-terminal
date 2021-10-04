export const urls = {
  trades: "https://fapi.binance.com/fapi/v1/trades?symbol=BTCUSDT",
  coins: "https://www.binance.com/fapi/v1/ticker/24hr",
  orderBook: "https://fapi.binance.com/fapi/v1/depth?symbol=BTCUSDT",
};

// const urlOrderBook = "https://fapi.binance.com/fapi/v1/depth?symbol=BTCUSDT";
// const url = "https://fapi.binance.com/fapi/v1/depth?symbol=BTCUSDT";
// const url = "https://fapi.binance.com/fapi/v1/ticker/price?symbol=btcusdt";
// const url = "https://www.binance.com/fapi/v1/ticker/24hr";
// const url =
//   "https://api.binance.com/api/v1/continuousKlines?pair=BTCUSDT&interval=1m";
// const url =
//   "https://www.binance.com/fapi/v1/continuousKlines?pair=BTCUSDT&contractType=1&interval=1m";
// makeQuery(url);

//websocket candlestick

// const binanceWebSocket = new WebSocket(
//   "wss://stream.binance.com:9443/ws/btcusdt@kline_15m"
// );

// binanceWebSocket.onmessage = function (event) {
//   var message = JSON.parse(event.data);
//   console.log("event", event);
//   console.log("event.data", event.data);
//   console.log("message", message);

//   // var candlestick = message.k;

//   // console.log(candlestick)

//   // candleSeries.update({
//   //   time: candlestick.t / 1000,
//   //   open: candlestick.o,
//   //   high: candlestick.h,
//   //   low: candlestick.l,
//   //   close: candlestick.c
//   // })
// };
