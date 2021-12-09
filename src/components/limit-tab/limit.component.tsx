import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createOrder } from '../../consts/helpers';
import { StateType } from '../../types/redux.types';
import ButtonCustom from '../button/button.component';
import CheckboxCustom from '../inputs/checkbox/checkbox.component';
import InputOrder from '../inputs/input/input-order.component';
import RangeCustom from '../inputs/range/range.component';
import SelectCustom from '../inputs/select/select.component';
import Switch from '../inputs/switch/switch.component';

import './limit.styles.css';

const optionsArr = [
  { title: 'Price', value: 'price' },
  { title: 'Persent', value: 'persent' },
];

const Limit = () => {
  const riskType: string = useSelector((state: StateType) => state.risk);
  const asset: string = useSelector((state: StateType) => state.asset);
  const [limitInfo, setLimitInfo] = useState({
    'limit-price': '',
    'limit-size': '',
    'stop-loss-input': '',
    'take-profit-unput': '',
    'stop-loss': 'price',
    'take-profit': 'price',
    leverage: 0,
    tpsl: false,
    im: false,
  });

  const createHandler = (side: string) => {
    createOrder({
      type: 'limit',
      asset,
      side,
      quantity: Number(limitInfo['limit-price']) * Number(limitInfo['limit-size']),
      price: Number(limitInfo['limit-price']),
    });
  };

  const changeHandler = (e: React.ChangeEvent<any>) => {
    const { value, name, type, checked } = e.target;
    setLimitInfo({
      ...limitInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="limit">
      <div className="limit-input-wrapper">
        <InputOrder
          placeholder={'Price'}
          value={limitInfo['limit-price'].toString()}
          name={'limit-price'}
          onChange={changeHandler}
        >
          USDT
        </InputOrder>
        <InputOrder
          placeholder={'Size'}
          value={limitInfo['limit-size'].toString()}
          name={'limit-size'}
          onChange={changeHandler}
        >
          USDT
        </InputOrder>
      </div>

      <RangeCustom
        id="limit-size"
        name="limit-size"
        min="0"
        max="100"
        onChange={changeHandler}
        value={limitInfo['limit-size']}
        classCustom={'limit-size'}
        labelSymbol={'%'}
      />

      {riskType === 'manual' ? (
        <CheckboxCustom id="TP/SL" name="tpsl" onChange={changeHandler} value={limitInfo.tpsl}>
          TP/SL
        </CheckboxCustom>
      ) : null}

      {limitInfo.tpsl ? (
        <div className="limit-input-wrapper">
          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={limitInfo['stop-loss-input'].toString()}
              name={'stop-loss-input'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="stop-loss"
              value={limitInfo['stop-loss']}
              onChange={changeHandler}
            />
          </div>

          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={limitInfo['take-profit-unput'].toString()}
              name={'take-profit-unput'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="take-profit"
              value={limitInfo['take-profit']}
              onChange={changeHandler}
            />
          </div>
        </div>
      ) : null}

      <div className="co-buttons-wrapper">
        <ButtonCustom customClass="green" onClick={() => createHandler('buy')}>
          Buy/Long
        </ButtonCustom>
        <ButtonCustom customClass="red" onClick={() => createHandler('sell')}>
          Sell/Short
        </ButtonCustom>
      </div>

      <div className="total-block">
        <div className="total-num">
          Total: <span className="total-dyn">30278.25 USDT</span>
        </div>
        <div className="total-num">
          Available <span className="total-dyn">302.25 USDT</span>
        </div>
      </div>

      <Switch
        id="im"
        name="im"
        onChange={changeHandler}
        value={limitInfo.im}
        options={['Isolated margin', 'Cross margin']}
      />

      <RangeCustom
        id="leverage-size"
        name="leverage"
        min="0"
        max="125"
        onChange={changeHandler}
        value={limitInfo.leverage}
        classCustom={'leverage'}
        labelSymbol={'x'}
      />
    </div>
  );
};

export default Limit;
