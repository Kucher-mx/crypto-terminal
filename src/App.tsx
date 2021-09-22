import React, { useEffect, useState } from "react";
import axios from "axios";
// import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { apiKey, apiKeySecret } from "../src/consts/consts";

const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m`;

// var burl = "https://api.binance.com";

// const query = "/api/v1/ticker/24hr";

// query += "?symbol=BTCUSDT";

// const url = burl + query;

const binanceReq = async () => {
  axios.get(url).then((res) => console.log(res));
};

const App = () => {
  const [chartInfo, setchartInfo] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  useEffect(() => {
    // setchartInfo;
    binanceReq();
  }, []);

  // const chart = new ApexCharts(document.querySelector("#chart"), chartInfo);

  // chart.render();

  return (
    <div id="chart">
      <Chart
        options={chartInfo.options}
        series={chartInfo.series}
        type="bar"
        width="500"
      />
    </div>
  );
};

export default App;
