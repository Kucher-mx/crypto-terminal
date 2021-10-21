import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import ReactApexChart from "react-apexcharts";
import { candleStickBarOptions, candleStickOptions } from "../../consts/consts";
import Loader from "react-loader-spinner";

import "./chart.styles.css";

const Chart = () => {
  const candleStickData = useSelector((state: StateType) => state.candleStick);
  const [chartInfo, setchartInfo] = React.useState(candleStickOptions);

  let [chartBar, setChartBar] = React.useState(candleStickBarOptions);

  React.useEffect(() => {
    console.log(chartInfo.series[0]);

    setchartInfo({
      ...chartInfo,
      series: [
        {
          data: [...chartInfo.series[0].data, candleStickData],
          name: "volume",
        },
      ],
    });
    setChartBar({
      ...chartBar,
      seriesBar: [
        {
          name: "volume",
          data: chartInfo.series[0].data,
        },
      ],
    });
  }, [candleStickData]);
  console.log(chartInfo);

  return (
    <div className="chart">
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
              options={chartBar.optionsBar as any}
              series={chartBar.seriesBar}
              type="bar"
              height={160}
            />
          </div>
        </div>
      ) : (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </div>
  );
};

export default Chart;
