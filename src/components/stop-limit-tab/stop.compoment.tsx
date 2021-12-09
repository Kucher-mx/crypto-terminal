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

const optionsArr = [
  { title: 'Price', value: 'price' },
  { title: 'Persent', value: 'persent' },
];

const StopLimit = () => {
  const riskType: string = useSelector((state: StateType) => state.risk);
  const asset: string = useSelector((state: StateType) => state.asset);
  const [stopLimitInfo, setStopLimitInfo] = useState({
    'stop-limit-price': '',
    'stop-price': '',
    'stop-limit-size': '',
    'stop-loss': 'price',
    'take-profit': 'price',
    'take-profit-unput': '',
    'stop-loss-input': '',
    leverage: 0,
    tpsl: false,
    im: false,
  });

  const createHandler = (side: string) => {
    createOrder({
      type: 'market',
      asset,
      side,
      quantity: Number(stopLimitInfo['stop-limit-size']),
      stopPrice: Number(stopLimitInfo['stop-limit-price']),
    });
  };

  const changeHandler = (e: React.ChangeEvent<any>) => {
    const { value, name, type, checked } = e.target;

    setStopLimitInfo({
      ...stopLimitInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="limit">
      <div className="limit-input-wrapper">
        <InputOrder
          placeholder={'Stop'}
          value={stopLimitInfo['stop-price'].toString()}
          name={'stop-price'}
          onChange={changeHandler}
        >
          USDT
        </InputOrder>
        <InputOrder
          placeholder={'Limit'}
          value={stopLimitInfo['stop-limit-price'].toString()}
          name={'stop-limit-price'}
          onChange={changeHandler}
        >
          USDT
        </InputOrder>
        <InputOrder
          placeholder={'Size'}
          value={stopLimitInfo['stop-limit-size'].toString()}
          name={'stop-limit-size'}
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
        value={stopLimitInfo['stop-limit-size']}
        classCustom={'stop-limit-size'}
        labelSymbol={'%'}
      />

      {riskType === 'manual' ? (
        <CheckboxCustom id="TP/SL" name="tpsl" onChange={changeHandler} value={stopLimitInfo.tpsl}>
          TP/SL
        </CheckboxCustom>
      ) : null}

      {stopLimitInfo.tpsl ? (
        <div className="limit-input-wrapper">
          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={stopLimitInfo['stop-loss-input'].toString()}
              name={'stop-loss-input'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="stop-loss"
              value={stopLimitInfo['stop-loss']}
              onChange={changeHandler}
            />
          </div>

          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={stopLimitInfo['take-profit-unput'].toString()}
              name={'take-profit-unput'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="take-profit"
              value={stopLimitInfo['take-profit']}
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
        value={stopLimitInfo.im}
        options={['Isolated margin', 'Cross margin']}
      />

      <RangeCustom
        id="leverage-size"
        name="leverage"
        min="0"
        max="125"
        onChange={changeHandler}
        value={stopLimitInfo.leverage}
        classCustom={'leverage'}
        labelSymbol={'x'}
      />
    </div>
  );
};

export default StopLimit;
