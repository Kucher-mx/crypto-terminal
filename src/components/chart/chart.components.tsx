import React from 'react';
// @ts-ignore
import TradingViewWidget from 'react-tradingview-widget';

const Chart = () => {
  return <TradingViewWidget symbol="BTCUSDTPERP" locale="en" theme="dark" autosize />;
};

export default Chart;
