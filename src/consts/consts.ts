import { MainChartType } from "../types/chartType";

export const apiKey =
  "1008a3c84b15c627d7cc40dd87b02ec574b70551ccf70144c62c2707ea6ad795";
export const apiKeySecret =
  "5c84e141c11863e025e54cada5e9c4b29ca5738c58b8985fb80b9516dac439d4";

export const firebaseConfig = {
  apiKey: "AIzaSyAeEcVxf6NiYnKWqMu8LcoCb2Ysti9red8",
  authDomain: "crypto-terminal-3309a.firebaseapp.com",
  projectId: "crypto-terminal-3309a",
  storageBucket: "crypto-terminal-3309a.appspot.com",
  messagingSenderId: "240452210237",
  appId: "1:240452210237:web:f1bc9955c88205f6332454",
  measurementId: "G-41L4YQC7Y7",
};

export const DataFormatOptions: {
  month: "short";
  day: "numeric";
  hour: "numeric";
  minute: "numeric";
  second: "numeric";
  hour12: false;
} = {
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

export const websocketGetterOptions = {
  method: "SUBSCRIBE",
  params: ["btcusdt@aggTrade", "btcusdt@depth", "!ticker@arr", "btcusdt@kline"],
  // params: ["btcusdt@kline_1m"],
  id: 1,
};

export const candleStickOptions: MainChartType = {
  series: [
    {
      data: [],
      name: "volume",
    },
  ],
  options: {
    chart: {
      type: "candlestick",
      height: 290,
      id: "candles",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
  },
};

export const candleStickBarOptions = {
  seriesBar: [
    {
      name: "volume",
      data: candleStickOptions.series[0].data,
    },
  ],
  optionsBar: {
    chart: {
      height: 160,
      type: "bar",
      brush: {
        enabled: true,
        target: "candles",
      },
      selection: {
        enabled: true,
        // xaxis: {
        //   min: new Date('20 Jan 2017').getTime(),
        //   max: new Date('10 Dec 2017').getTime()
        // },
        fill: {
          color: "#ccc",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        colors: {
          ranges: [
            {
              from: -1000,
              to: 0,
              color: "#F15B46",
            },
            {
              from: 1,
              to: 10000,
              color: "#FEB019",
            },
          ],
        },
      },
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        offsetX: 13,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
};
