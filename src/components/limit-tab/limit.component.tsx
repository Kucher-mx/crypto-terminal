import React, { useState } from 'react';
import ButtonCustom from '../button/button.component';
import CheckboxCustom from '../inputs/checkbox/checkbox.component';
import InputOrder from '../inputs/input/input-order.component';
import RangeCustom from '../inputs/range/range.component';
import SelectCustom from '../inputs/select/select.component';
import Switch from '../inputs/switch/switch.component';

import './limit.styles.css';

const available = 54000;
const optionsArr = [
  { title: 'Price', value: 'price' },
  { title: 'Persent', value: 'persent' },
];

const buyHandler = () => console.log('buy');
const sellHandler = () => console.log('sell');

const Limit = () => {
  const [limitInfo, setLimitInfo] = useState({
    'limit-price': '',
    'limit-size': '',
    'stop-loss': 'price',
    'take-profit': 'price',
    leverage: 0,
    tpsl: false,
    im: false,
  });

  const changeHandler = (e: React.ChangeEvent<any>) => {
    const { value, name, type, checked } = e.target;
    setLimitInfo({
      ...limitInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="limit">
      <div className="text-block">
        Avbl: <span className="text-num">{available}</span>
      </div>

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

      <div className="limit-text-info">
        <div className="text-block">
          Buy: <span className="text-num">{'0.00 USDT'}</span>
        </div>
        <div className="text-block">
          Sell: <span className="text-num">{'0.00 USDT'}</span>
        </div>
      </div>

      <CheckboxCustom id="TP/SL" name="tpsl" onChange={changeHandler} value={limitInfo.tpsl}>
        TP/SL
      </CheckboxCustom>

      {limitInfo.tpsl ? (
        <div className="limit-input-wrapper">
          <SelectCustom
            options={optionsArr}
            name="stop-loss"
            value={limitInfo['stop-loss']}
            onChange={changeHandler}
          />
          <SelectCustom
            options={optionsArr}
            name="take-profit"
            value={limitInfo['take-profit']}
            onChange={changeHandler}
          />
        </div>
      ) : null}

      <div className="co-buttons-wrapper">
        <ButtonCustom customClass="green" onClick={buyHandler}>
          Buy/Long
        </ButtonCustom>
        <ButtonCustom customClass="red" onClick={sellHandler}>
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
