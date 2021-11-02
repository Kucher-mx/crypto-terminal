// @ts-nocheck
import React, { Component } from "react";
import { connect } from "react-redux";
import * as Charting from "chart-library";

class RealTimeChart extends Component {
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

export default connect(mapStateToProps)(RealTimeChart);
