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
  params: [
    "btcusdt@aggTrade",
    "btcusdt@depth",
    "!ticker@arr",
    "btcusdt@kline_1m",
  ],
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

export class SampleFinancialData {
  public static create(items?: number): any[] {
    // initial values
    let v = 10000;
    let o = 500;
    let h = Math.round(o + Math.random() * 5);
    let l = Math.round(o - Math.random() * 5);
    let c = Math.round(l + Math.random() * (h - l));

    if (items === undefined) {
      items = 200;
    }

    const today = new Date();
    const end = new Date(today.getFullYear(), 11, 1);
    let time = this.addDays(end, -items);

    const data: any[] = [];
    for (let i = 0; i < items; i++) {
      const date = time.toDateString();
      const label = this.getShortDate(time, false);
      // adding new data item
      data.push({
        Time: time,
        Date: date,
        Label: label,
        Close: c,
        Open: o,
        High: h,
        Low: l,
        Volume: v,
      });
      // generating new values
      const mod = Math.random() - 0.45;
      o = Math.round(o + mod * 5 * 2);
      v = Math.round(v + mod * 5 * 100);
      h = Math.round(o + Math.random() * 5);
      l = Math.round(o - Math.random() * 5);
      c = Math.round(l + Math.random() * (h - l));
      time = this.addDays(time, 1);
    }
    return data;
  }

  public static addDays(dt: Date, days: number): Date {
    return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
  }

  public static getShortDate(dt: Date, showYear: boolean): string {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const ind = dt.getMonth();
    const day = dt.getDay() + 1;
    let label = months[ind] + " " + day;
    if (showYear) {
      label += " " + dt.getFullYear();
    }
    return label;
  }
}
