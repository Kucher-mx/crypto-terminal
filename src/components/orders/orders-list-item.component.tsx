import React from 'react';

import './orders.styles.css';

type OrderListItemProps = {
  status: string;
  side: string;
  tp: string;
  op: string;
  quantity: string;
  time: string;
  customStyle?: string;
  closeHandler?: () => void;
};

const OrdersListItem = ({
  status,
  side,
  tp,
  op,
  quantity,
  time,
  customStyle = '',
  closeHandler,
}: OrderListItemProps) => {
  return (
    <div className={`orders-list-item ${customStyle}`}>
      <div className="order-cell orders-item-text">{status}</div>
      <div className="order-cell orders-item-htext">{side}</div>
      <div className="order-cell orders-item-text">{tp}</div>
      <div className="order-cell orders-item-bordered">
        <span className="order-price">{op}</span>
      </div>
      <div className="order-cell orders-item-text">{quantity}</div>
      <div className="order-cell orders-item-text">{time}</div>
      <div className="order-cell orders-item-text close">{customStyle ? '' : '✕'}</div>
    </div>
  );
};

export default OrdersListItem;
