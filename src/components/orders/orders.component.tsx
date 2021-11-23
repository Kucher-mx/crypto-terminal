import React, { useState } from 'react';
import ButtonCustom from '../button/button.component';
import OrdersListItem from './orders-list-item.component';

import './orders.styles.css';

const orders = [
  {
    status: 'open',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'filled',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'filled',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'open',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'canceled',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'closed',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'closed',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'closed',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'closed',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'stops',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'stops',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'open',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
  {
    status: 'open',
    side: 'sell',
    tp: 409000000,
    op: 'market',
    quantity: 1.53,
    time: Date.now(),
  },
];

const formatDate = (date: number) => {
  const DO = new Date(date);
  return `${DO.getHours().toString().padStart(2, '0')}:${DO.getMinutes()
    .toString()
    .padStart(2, '0')}:${DO.getSeconds().toString().padStart(2, '0')}`;
};

const buttons = [
  {
    name: 'all',
  },
  {
    name: 'open',
  },
  {
    name: 'filled',
  },
  {
    name: 'canceled',
  },
  {
    name: 'closed',
  },
  {
    name: 'stops',
  },
];

const Orders = () => {
  const [selectedButton, setSelectedButton] = useState('all');

  const filteredOrders =
    selectedButton === 'all' ? orders : orders.filter(item => item.status === selectedButton);

  return (
    <div className="orders">
      <div className="orders-header">
        <div className="title">Orders</div>
        <div className="button-menu">
          {buttons.map((item, idx) => {
            const { name } = item;
            const className = `orders-button ${
              selectedButton === name ? 'orders-button-active' : ''
            }`;
            return (
              <ButtonCustom
                onClick={() => setSelectedButton(name)}
                key={idx}
                customClass={className}
              >
                {name}
              </ButtonCustom>
            );
          })}
        </div>
      </div>
      <OrdersListItem
        status={'status'}
        side={'side'}
        tp={'Trigger price'}
        op={'Order price'}
        quantity={'Quantity'}
        time={'Time'}
        customStyle={'orders-list-header'}
      />
      <div className="orders-grid-wrapper">
        {filteredOrders.map((item, idx) => {
          const { status, side, tp, op, quantity, time } = item;
          return (
            <OrdersListItem
              key={idx}
              status={status}
              side={side}
              tp={tp.toString()}
              op={op}
              quantity={quantity.toString()}
              time={formatDate(time)}
              closeHandler={() => console.log('close')}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
