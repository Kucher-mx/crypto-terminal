// @ts-nocheck
import React, { Component } from "react";
import { useSelector } from "react-redux";
import * as Charting from "chart-library";
import { StateType } from "../../types/redux.types";

const RealTimeChart = () => {
  const el = React.createRef<HTMLCanvasElement>();
  const candleStickData = useSelector((state: StateType) => state.candleStick);
  const [chartState, setChartState] = React.useState({
    chart: null,
    data: [],
  });

  const updateStock = () => {
    let update = false;

    if (chartState.chart?.series.count() > 0) update = true;
    console.log(candleStickData);

    if (candleStickData.length) {
      const dataItem = new Charting.StockPrice(candleStickData.slice(-1));
      if (!update) {
        chartState.data.insert(0, dataItem);
      } else {
        chartState.data.add(dataItem);
        chartState.data.removeAt(0);
      }
    }

    const series = new Charting.StockPriceSeries(chartState.data);
    series.dateTimeFormat = Charting.DateTimeFormat.ShortTime;

    const data = new Charting.Collections.ObservableCollection();
    data.add(series);
    if (chartState.chart) {
      chartState.chart.series = data;
      chartState.chart.draw();
    }
  };

  React.useEffect(() => updateStock(), [chartState.chart, chartState.data]);

  React.useEffect(() => {
    const stockChart = new Charting.Controls.CandlestickChart(el.current);

    stockChart.title = "CUM-Terminal";
    stockChart.theme.titleFontSize = 16;
    stockChart.candlestickWidth = 12;
    stockChart.showLegend = false;

    stockChart.showXCoordinates = false;
    stockChart.xAxisLabelRotationAngle = 30;

    stockChart.xAxis.minValue = 0;
    stockChart.xAxis.interval = 1;
    stockChart.xAxis.maxValue = 40;
    stockChart.xAxis.title = "Time";
    stockChart.yAxis.title = "Price";

    stockChart.gridType = Charting.GridType.Horizontal;
    stockChart.theme.gridColor1 = new Charting.Drawing.Color("#ffffff");
    stockChart.theme.gridColor2 = new Charting.Drawing.Color("#fafafa");
    stockChart.theme.gridLineColor = new Charting.Drawing.Color("#cecece");
    stockChart.theme.gridLineStyle = Charting.Drawing.DashStyle.Dash;

    stockChart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(
      new Charting.Drawing.Brush("#ff2f26"),
      new Charting.Drawing.Brush("#00b140"),
      new Charting.Drawing.Brush("#2e2e2a"),
      2,
      Charting.Drawing.DashStyle.Solid,
      stockChart.plot.seriesRenderers.item(0)
    );

    stockChart.theme.axisLabelsBrush =
      stockChart.theme.axisTitleBrush =
      stockChart.theme.axisStroke =
        new Charting.Drawing.Brush("#2e2e2e");
    stockChart.theme.highlightStroke = new Charting.Drawing.Brush("#cecece");

    var dataList = new Charting.Collections.List();
    setChartState({
      chart: stockChart,
      data: dataList,
    });
  }, [el, updateStock]);

  return (
    <div>
      <canvas width="1000px" height="800px" ref={el}></canvas>
    </div>
  );
};

class RealTimeChart1 extends Component {
  constructor(props: any) {
    super(props);

    this.el = React.createRef();

    this.state = {
      chart: null,
    };
  }

  componentDidMount() {
    var stockChart = new Charting.Controls.CandlestickChart(this.el.current);

    stockChart.title = "The Big Corporation";
    stockChart.theme.titleFontSize = 16;
    stockChart.candlestickWidth = 12;
    stockChart.showLegend = false;

    stockChart.showXCoordinates = false;
    stockChart.xAxisLabelRotationAngle = 30;

    stockChart.xAxis.minValue = 0;
    stockChart.xAxis.interval = 1;
    stockChart.xAxis.maxValue = 40;
    stockChart.xAxis.title = "Time";
    stockChart.yAxis.title = "Price";

    stockChart.gridType = Charting.GridType.Horizontal;
    stockChart.theme.gridColor1 = new Charting.Drawing.Color("#ffffff");
    stockChart.theme.gridColor2 = new Charting.Drawing.Color("#fafafa");
    stockChart.theme.gridLineColor = new Charting.Drawing.Color("#cecece");
    stockChart.theme.gridLineStyle = Charting.Drawing.DashStyle.Dash;

    stockChart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(
      new Charting.Drawing.Brush("#ff2f26"),
      new Charting.Drawing.Brush("#00b140"),
      new Charting.Drawing.Brush("#2e2e2a"),
      2,
      Charting.Drawing.DashStyle.Solid,
      stockChart.plot.seriesRenderers.item(0)
    );

    stockChart.theme.axisLabelsBrush =
      stockChart.theme.axisTitleBrush =
      stockChart.theme.axisStroke =
        new Charting.Drawing.Brush("#2e2e2e");
    stockChart.theme.highlightStroke = new Charting.Drawing.Brush("#cecece");

    var dataList = new Charting.Collections.List();
    this.setState(
      {
        chart: stockChart,
        data: dataList,
      },
      () => this.updateStock()
    );
  }

  updateStock = () => {
    let update = false;

    if (this.state.chart?.series.count() > 0) update = true;
    console.log(this.props);

    if (this.props.candleData.length) {
      const dataItem = new Charting.StockPrice(this.props.candleData.slice(-1));
      if (!update) {
        this.state.data.insert(0, dataItem);
      } else {
        this.state.data.add(dataItem);
        this.state.data.removeAt(0);
      }
    }

    const series = new Charting.StockPriceSeries(this.state.data);
    series.dateTimeFormat = Charting.DateTimeFormat.ShortTime;

    const data = new Charting.Collections.ObservableCollection();
    data.add(series);
    this.state.chart.series = data;
    this.state.chart.draw();
  };

  render() {
    return (
      <div>
        <canvas width="1000px" height="800px" ref={this.el}></canvas>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ candleData: state.candleStick });

export default RealTimeChart;

var schema = [
  {
    name: "Date",
    type: "date",
    format: "%m/%d/%Y, %I:%M:%S %p",
  },
  {
    name: "Open",
    type: "number",
  },
  {
    name: "High",
    type: "number",
  },
  {
    name: "Low",
    type: "number",
  },
  {
    name: "Close",
    type: "number",
  },
  {
    name: "Volume",
    type: "number",
  },
];

var getNextRandomDate = function getNextRandomDate(d) {
  return new Date(+d + 5000);
};

function getRandomDates(n) {
  var result = [];

  return (function () {
    for (var i = 0; i < n; i++) {
      if (i === 0) {
        result.push(new Date());
      } else {
        result.push(getNextRandomDate(result[i - 1]));
      }
    }
    return result;
  })();
}

var fd = function fd(d) {
  return d.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

var dts = getRandomDates(30);
var data = [
  ["" + fd(dts[0]), 1734.02, 1734.16, 1733.22, 1722.22, 8190],
  ["" + fd(dts[1]), 1733.43, 1733.81, 1732.76, 1733.2, 7170],
  ["" + fd(dts[2]), 1733.26, 1733.81, 1733.26, 1723.37, 3190],
  ["" + fd(dts[3]), 1733.42, 1733.71, 1733.42, 1735.38, 13600],
  ["" + fd(dts[4]), 1733.4, 1733.87, 1733.27, 1723.86, 5130],
  ["" + fd(dts[5]), 1733.85, 1734.36, 1733.72, 1734.36, 4500],
  ["" + fd(dts[6]), 1734.72, 1734.83, 1734.44, 1734.44, 6320],
  ["" + fd(dts[7]), 1734.39, 1734.97, 1734.39, 1734.39, 3480],
  ["" + fd(dts[8]), 1734.8, 1734.8, 1732.44, 1732.44, 17350],
  ["" + fd(dts[9]), 1732.59, 1732.6, 1731.54, 1731.85, 13990],
  ["" + fd(dts[10]), 1734.02, 1734.16, 1733.22, 1722.22, 18190],
  ["" + fd(dts[11]), 1743.43, 1743.81, 1743.76, 1743.2, 17170],
  ["" + fd(dts[12]), 1743.26, 1743.81, 1743.26, 1743.47, 13190],
  ["" + fd(dts[13]), 1744.42, 1744.71, 1744.42, 1744.48, 3600],
  ["" + fd(dts[14]), 1745.4, 1745.87, 1745.27, 1745.86, 5130],
  ["" + fd(dts[15]), 1746.85, 1746.36, 1746.72, 1736.36, 14500],
  ["" + fd(dts[16]), 1746.72, 1746.83, 1746.44, 1748.24, 6320],
  ["" + fd(dts[17]), 1747.39, 1747.97, 1747.39, 1747.29, 13480],
  ["" + fd(dts[18]), 1747.8, 1747.8, 1747.44, 1747.44, 17350],
  ["" + fd(dts[19]), 1732.59, 1732.6, 1731.54, 1731.85, 13990],
  ["" + fd(dts[20]), 1749.02, 1744.16, 1733.22, 1746.22, 18190],
  ["" + fd(dts[21]), 1753.43, 1743.81, 1743.76, 1750.2, 17170],
  ["" + fd(dts[22]), 1753.26, 1743.81, 1742.26, 1743.47, 13190],
  ["" + fd(dts[23]), 1754.42, 1744.71, 1744.42, 1744.48, 13600],
  ["" + fd(dts[24]), 1757.4, 1745.87, 1745.27, 1745.86, 15130],
  ["" + fd(dts[25]), 1746.85, 1746.36, 1746.72, 1736.36, 14500],
  ["" + fd(dts[26]), 1746.72, 1746.83, 1746.44, 1748.24, 16320],
  ["" + fd(dts[27]), 1757.39, 1747.97, 1747.39, 1747.29, 13480],
  ["" + fd(dts[28]), 1749.8, 1747.8, 1747.44, 1747.44, 17350],
  ["" + fd(dts[29]), 1752.59, 1732.6, 1731.54, 1741.85, 13990],
];

var randBetween = function randBetween(min, max, decimalPlaces) {
  var rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min; // could be min or max or anything in between
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
};
var randBetween1 = function randBetween1(min, max) {
  var ceilMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
};

var dataStore = new FusionCharts.DataStore();

var realtimeChart = new FusionCharts({
  type: "timeseries",
  id: "chartobject-2",
  renderAt: "realtimechart-container",
  width: "100%",
  height: "500",
  dataSource: {
    chart: {
      theme: "candy",
    },
    data: dataStore.createDataTable(data, schema),
    caption: {
      text: "Amazon.com Stock Price",
    },
    subcaption: {
      text: "NASDAQ: AMZN (Random Data)",
    },
    extensions: {
      customRangeSelector: {
        enabled: "0",
      },
      standardRangeSelector: {
        enabled: "0",
      },
    },
    yaxis: [
      {
        max: "1800",
        min: "1660",
        plot: {
          value: {
            open: "Open",
            high: "High",
            low: "Low",
            close: "Close",
          },
          type: "candlestick",
        },
        format: {
          prefix: "$",
        },
        title: "Stock Value",
      },
    ],
  },
});

realtimeChart.addEventListener("renderComplete", function (_ref) {
  var realtimeChart = _ref.sender;

  var lastDataUpdateStr = data[data.length - 1][0];
  var newDate = new Date(lastDataUpdateStr);
  var formattedNewDate = fd(newDate);
  realtimeChart.lastInterval = setInterval(function () {
    newDate = getNextRandomDate(new Date(formattedNewDate));
    formattedNewDate = fd(newDate);
    realtimeChart &&
      realtimeChart.feedData &&
      realtimeChart.feedData([
        [
          formattedNewDate,
          randBetween(1741, 1760, 2),
          randBetween(1741, 1750, 2),
          randBetween(1741, 1740, 2),
          randBetween(1741, 1760, 2),
          randBetween1(3500, 19350),
        ],
      ]);
  }, 5000);
});

realtimeChart.addEventListener("disposed", function (eventObj) {
  var chartRef = eventObj;
  clearInterval(chartRef.lastInterval);
});

realtimeChart.render();
