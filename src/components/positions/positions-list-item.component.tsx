import React from 'react';

import './positions.styles.css';

type PositionsItemProps = {
  symbol: string;
  size: string;
  lp: string;
  op: string;
  pnl: string;
  customStyle?: string;
};

const PositionsListItem = ({ symbol, size, lp, op, pnl, customStyle = '' }: PositionsItemProps) => {
  return (
    <div className={`positions-list-item ${customStyle}`}>
      <div className="positions-cell positions-item-text">{symbol}</div>
      <div className="positions-cell positions-item-text">{size}</div>
      <div className="positions-cell positions-item-text">{lp}</div>
      <div className="positions-cell positions-item-htext">{op}</div>
      <div className="positions-cell positions-item-text">{pnl}</div>
    </div>
  );
};

export default PositionsListItem;
