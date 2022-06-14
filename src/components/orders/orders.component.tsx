import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../types/redux.types'
import ButtonCustom from '../button/button.component'
import OrdersListItem from './orders-list-item.component'

import './orders.styles.css'

const formatDate = (date: number) => {
  const DO = new Date(date)
  return `${DO.getHours().toString().padStart(2, '0')}:${DO.getMinutes().toString().padStart(2, '0')}:${DO.getSeconds()
    .toString()
    .padStart(2, '0')}`
}

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
]

const Orders = () => {
  const orders = useSelector((state: StateType) => state.orders)
  const [selectedButton, setSelectedButton] = useState('all')

  const filteredOrders = selectedButton === 'all' ? orders : orders.filter((item) => item.status === selectedButton)

  console.log('filteredOrders', filteredOrders)

  return (
    <div className="orders">
      <div className="orders-header">
        <div className="title">Orders</div>
        <div className="button-menu">
          {buttons.map((item, idx) => {
            const { name } = item
            const className = `orders-button ${selectedButton === name ? 'orders-button-active' : ''}`
            return (
              <ButtonCustom onClick={() => setSelectedButton(name)} key={idx} customClass={className}>
                {name}
              </ButtonCustom>
            )
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
        <div className="blurred_info">
          currently is not avaliable due to{' '}
          <a href="https://www.binance.com/en" target="blank">
            binance
          </a>{' '}
          withdrawal changes
        </div>
        {filteredOrders.map((item, idx) => {
          const { status, side, avgPrice, price, origQty, time } = item
          return (
            <OrdersListItem
              key={idx}
              status={status}
              side={side}
              tp={avgPrice.toString()}
              op={price}
              quantity={origQty}
              time={formatDate(time)}
              closeHandler={() => console.log('close')}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Orders
