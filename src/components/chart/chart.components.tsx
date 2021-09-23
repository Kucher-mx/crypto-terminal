import React, { useEffect, useState } from "react";
import axios from "axios";
import { chartBarType } from "../../types/chartType";
import ReactApexChart from "react-apexcharts";
import Binance from "node-binance-api";
import { apiKey, apiKeySecret } from "../../consts/consts";

const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h`;

const binanceReq = async () => {
  return axios.get(url).then((res) => res);
};

const binance = new Binance().options({
  APIKEY: apiKey,
  APISECRET: apiKeySecret,
});

const Chart = () => {
  const [state, setstate] = useState<null | any[]>([]);
  const [chartInfo, setchartInfo] = useState<any>({
    series: [{ data: [], name: "volume" }],
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
  });

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(url);
      const chartData: any[] = response.data.map((item: any[]) => ({
        x: new Date(item[0]),
        y: item.slice(1, 5),
      }));
      setchartInfo({ ...chartInfo, series: [{ data: chartData }] });
      setstate(chartData);
      console.log(await binance.futuresMarketBuy("BNBUSDT", 5));
    }
    fetchMyAPI();
  }, []);
  console.log("chartInfo", chartInfo);

  let chartBar: chartBarType = {
    seriesBar: [
      {
        name: "volume",
        data: state,
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

  // <ReactApexChart
  //         options={chartInfo.options}
  //         series={chartInfo.series}
  //         type="candlestick"
  //         height={350}
  //       />

  return (
    <>
      {chartInfo.series[0].data.length > 0 ? (
        <div className="chart-box">
          <div id="chart-candlestick">
            <ReactApexChart
              options={chartInfo.options}
              series={chartInfo.series}
              type="candlestick"
              height={290}
            />
          </div>
          <div id="chart-bar">
            <ReactApexChart
              options={chartBar.optionsBar}
              series={chartBar.seriesBar}
              type="bar"
              height={160}
            />
          </div>
        </div>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default Chart;
