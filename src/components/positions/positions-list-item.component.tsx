import React from 'react';

import './positions.styles.css';

type PositionsItemProps = {
  symbol: string;
  size: string;
  lp: string;
  op: string;
  pnl: string;
  closeAll: string | JSX.Element;
  customStyle?: string;
};

const PositionsListItem = ({
  symbol,
  size,
  lp,
  op,
  pnl,
  closeAll,
  customStyle = '',
}: PositionsItemProps) => {
  return (
    <div className={`positions-list-item ${customStyle}`}>
      <div className="cell-small positions-item-text ">{symbol}</div>
      <div className="cell-small positions-item-text">{size}</div>
      <div className="positions-cell positions-item-text">{lp}</div>
      <div className="cell-small positions-item-htext">{op}</div>
      <div className="cell-small positions-item-text">{pnl}</div>
      <div className="positions-cell positions-item-text">{closeAll}</div>
    </div>
  );
};

export default PositionsListItem;
