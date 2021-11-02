import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import Loader from "react-loader-spinner";

import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";

import "./chart.styles.css";

IgrFinancialChartModule.register();

const Chart = () => {
  let chartRef: null | IgrFinancialChart = null;

  const candleStickData = useSelector((state: StateType) => state.candleStick);
  useEffect(() => {
    chartRef?.notifySetItem(
      candleStickData,
      candleStickData.length - 1,
      {},
      candleStickData[candleStickData.length - 1]
    );
  }, [candleStickData, chartRef]);

  const onChartRef = (chart: IgrFinancialChart) => {
    chartRef = chart;
  };

  return (
    <div className="chart">
      {candleStickData.length > 0 ? (
        <IgrFinancialChart
          ref={onChartRef}
          width="100%"
          height="100%"
          isToolbarVisible={false}
          chartType="Candle"
          chartTitle="CUM-terminal"
          titleAlignment="Left"
          titleLeftMargin="25"
          titleTopMargin="10"
          titleBottomMargin="10"
          // subtitle="CME - CME Delayed Price, Currency in USD"
          subtitleAlignment="Left"
          subtitleLeftMargin="25"
          subtitleTopMargin="5"
          subtitleBottomMargin="10"
          yAxisLabelLocation="OutsideRight"
          yAxisMode="Numeric"
          // yAxisTitle="Financial Prices"
          yAxisTitleLeftMargin="10"
          yAxisTitleRightMargin="5"
          yAxisLabelLeftMargin="0"
          zoomSliderType="Candle"
          dataSource={candleStickData}
        />
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
