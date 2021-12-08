import React from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import TradingViewWidget from 'react-tradingview-widget';
import { StateType } from '../../types/redux.types';

const Chart = () => {
  const asset = useSelector((state: StateType) => state.asset);
  return (
    <TradingViewWidget symbol={`${asset.toUpperCase()}PERP`} locale="en" theme="dark" autosize />
  );
};

export default Chart;
