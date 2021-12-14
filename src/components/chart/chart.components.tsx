import React from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import TradingViewWidget from 'react-tradingview-widget';
import { StateType } from '../../types/redux.types';

import './chart.styles.css';

const Chart = () => {
  const asset = useSelector((state: StateType) => state.asset);
  return (
    <div className="chart-wrapper">
      <TradingViewWidget symbol={`${asset.toUpperCase()}PERP`} locale="en" theme="dark" autosize />
    </div>
  );
};

export default Chart;
