export type basicChart = {
  series: [{ data: any[]; name?: string }];
  options: {
    title: { text: string; align: "left" | "center" | "right" | undefined };
    xaxis: { type: "datetime" | "category" | "numeric" | undefined };
    yaxis: { tooltip: { enabled: boolean } };
  };
};

export type comboChart = {
  series: [{ data: any[]; name?: string }];
  chart: {
    type: string;
    height: number;
    id: string;
    toolbar: {
      autoSelected: string;
      show: boolean;
    };
    zoom: {
      enabled: boolean;
    };
  };
  plotOptions: {
    candlestick: {
      colors: {
        upward: string;
        downward: string;
      };
    };
  };
  xaxis: {
    type: string;
  };
};

export type chartBarType = {
  seriesBar: any[];
  optionsBar: {
    chart: {
      height: number;
      type: "bar";
      brush: {
        enabled: boolean;
        target: "candles";
      };
      selection: {
        enabled: boolean;
        // xaxis: {
        //   min: new Date('20 Jan 2017').getTime(),
        //   max: new Date('10 Dec 2017').getTime()
        // },
        fill: {
          color: "#ccc";
          opacity: number;
        };
        stroke: {
          color: "#0D47A1";
        };
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    plotOptions: {
      bar: {
        columnWidth: "80%";
        colors: {
          ranges: [
            {
              from: number;
              to: number;
              color: "#F15B46";
            },
            {
              from: number;
              to: number;
              color: "#FEB019";
            }
          ];
        };
      };
    };
    stroke: {
      width: number;
    };
    xaxis: {
      type: "datetime";
      axisBorder: {
        offsetX: number;
      };
    };
    yaxis: {
      labels: {
        show: boolean;
      };
    };
  };
};

export type MainChartType = {
  series: [{ data: { x: number; y: Array<number> }[]; name: string }];
  options: {
    chart: {
      type:
        | "bar"
        | "area"
        | "line"
        | "candlestick"
        | "histogram"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "treemap"
        | "boxPlot"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | undefined;
      height: number;
      id: string;
      toolbar: {
        autoSelected: "pan" | "zoom" | "selection" | undefined;
        show: boolean;
      };
      zoom: {
        enabled: boolean;
      };
    };
    plotOptions: {
      candlestick: {
        colors: {
          upward: string;
          downward: string;
        };
      };
    };
    xaxis: {
      type: "numeric" | "datetime" | "category" | undefined;
    };
  };
};
