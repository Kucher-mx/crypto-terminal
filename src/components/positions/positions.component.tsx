import React, { useState } from 'react';
import PositionsListItem from './positions-list-item.component';

import './positions.styles.css';

const positions = [
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
  {
    symbol: 'open',
    size: 124 + 'BTC',
    ep: 409000000,
    lp: 'market',
    pnl: 1.53,
  },
];

const Positions = () => {
  return (
    <div className="positions">
      <div className="title">Positions</div>
      <PositionsListItem
        symbol={'symbol'}
        size={'size'}
        lp={'entry price'}
        op={'liq price'}
        pnl={'PNL(ROE%)'}
        customStyle={'positions-list-header'}
      />
      <div className="positions-grid-wrapper">
        {positions.map((item, idx) => {
          const { symbol, size, ep, lp, pnl } = item;
          return (
            <PositionsListItem
              key={idx}
              symbol={symbol}
              size={size.toString()}
              lp={lp.toString()}
              op={ep.toString()}
              pnl={pnl.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
