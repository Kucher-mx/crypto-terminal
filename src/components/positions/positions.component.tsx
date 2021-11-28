import React, { useState } from 'react';
import ButtonCustom from '../button/button.component';
import InputOrder from '../inputs/input/input-order.component';
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
];

const positionsButtons = () => (
  <div className="positions-buttons">
    <ButtonCustom onClick={() => console.log('market')} customClass={'position-button'}>
      Market
    </ButtonCustom>
    <ButtonCustom onClick={() => console.log('limit')} customClass={'position-button'}>
      Limit
    </ButtonCustom>
  </div>
);

const Positions = () => {
  const [positionsInputs, setPositionsInputs] = useState({
    persent: '',
    size: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPositionsInputs({
      ...positionsInputs,
      [name]: value,
    });
  };

  return (
    <div className="positions">
      <div className="title">Positions</div>
      <PositionsListItem
        symbol={'symbol'}
        size={'size'}
        lp={'entry price'}
        op={'liq price'}
        pnl={'PNL(ROE%)'}
        closeAll={'Close All Positions'}
        customStyle={'positions-list-header'}
      />
      <div className="positions-grid-wrapper">
        {positions.map((item, idx) => {
          const { symbol, size, ep, lp, pnl } = item;
          return (
            <div className="position-item-wrapper">
              <PositionsListItem
                key={idx}
                symbol={symbol}
                size={size.toString()}
                lp={lp.toString()}
                op={ep.toString()}
                pnl={pnl.toString()}
                closeAll={positionsButtons()}
              />
              <div className="positions-inputs">
                <InputOrder
                  placeholder={''}
                  value={positionsInputs.persent}
                  name={'persent'}
                  onChange={changeHandler}
                />

                <InputOrder
                  placeholder={''}
                  value={positionsInputs.size}
                  name={'size'}
                  onChange={changeHandler}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
