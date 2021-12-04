import React, { useState } from 'react';
import ButtonCustom from '../button/button.component';
import CheckboxCustom from '../inputs/checkbox/checkbox.component';
import InputOrder from '../inputs/input/input-order.component';
import RangeCustom from '../inputs/range/range.component';
import SelectCustom from '../inputs/select/select.component';
import Switch from '../inputs/switch/switch.component';

const available = 54000;
const optionsArr = [
  { title: 'Price', value: 'price' },
  { title: 'Persent', value: 'persent' },
];

const buyHandler = () => console.log('buy');
const sellHandler = () => console.log('sell');

const Market = () => {
  const [marketInfo, setMarketInfo] = useState({
    'market-size': '',
    'stop-loss': 'price',
    'take-profit': 'price',
    'take-profit-unput': '',
    'stop-loss-input': '',
    leverage: 0,
    tpsl: false,
    im: false,
  });

  const changeHandler = (e: React.ChangeEvent<any>) => {
    const { value, name, type, checked } = e.target;

    setMarketInfo({
      ...marketInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="limit">
      <div className="limit-input-wrapper">
        <InputOrder
          placeholder={'Size'}
          value={marketInfo['market-size'].toString()}
          name={'market-size'}
          onChange={changeHandler}
        >
          USDT
        </InputOrder>
      </div>

      <RangeCustom
        id="market-size"
        name="market-size"
        min="0"
        max="100"
        onChange={changeHandler}
        value={marketInfo['market-size']}
        classCustom={'limit-size'}
        labelSymbol={'%'}
      />

      <CheckboxCustom id="TP/SL" name="tpsl" onChange={changeHandler} value={marketInfo.tpsl}>
        TP/SL
      </CheckboxCustom>

      {marketInfo.tpsl ? (
        <div className="limit-input-wrapper">
          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={marketInfo['stop-loss-input'].toString()}
              name={'stop-loss-input'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="stop-loss"
              value={marketInfo['stop-loss']}
              onChange={changeHandler}
            />
          </div>

          <div className="tpsl-input-wrap">
            <InputOrder
              placeholder={''}
              value={marketInfo['take-profit-unput'].toString()}
              name={'take-profit-unput'}
              onChange={changeHandler}
            />
            <SelectCustom
              options={optionsArr}
              name="take-profit"
              value={marketInfo['take-profit']}
              onChange={changeHandler}
            />
          </div>
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
        value={marketInfo.im}
        options={['Isolated margin', 'Cross margin']}
      />

      <RangeCustom
        id="leverage-size"
        name="leverage"
        min="0"
        max="125"
        onChange={changeHandler}
        value={marketInfo.leverage}
        classCustom={'leverage'}
        labelSymbol={'x'}
      />
    </div>
  );
};

export default Market;
