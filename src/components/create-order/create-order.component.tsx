import React, { useState } from 'react'
import Limit from '../limit-tab/limit.component'
import Market from '../market-tab/market.component'
import Stop from '../stop-limit-tab/stop.compoment'

import './create-order.style.css'

const CreateOrder = () => {
  const [tab, setActiveTab] = useState('limit')
  return (
    <div className="create-order-wrapper">
      <div className="blurred_info">
        currently is not avaliable due to{' '}
        <a href="https://www.binance.com/en" target="blank">
          binance
        </a>{' '}
        withdrawal changes
      </div>
      <ul className="tabs-wrappers">
        <li className={`limit-tab ${tab === 'limit' ? 'active-tab' : ''}`} onClick={() => setActiveTab('limit')}>
          Limit
        </li>
        <li className={`limit-tab ${tab === 'market' ? 'active-tab' : ''}`} onClick={() => setActiveTab('market')}>
          Market
        </li>
        <li className={`limit-tab ${tab === 'sl' ? 'active-tab' : ''}`} onClick={() => setActiveTab('sl')}>
          Stop limit
        </li>
      </ul>
      {tab === 'limit' ? <Limit /> : tab === 'market' ? <Market /> : <Stop />}
    </div>
  )
}

export default CreateOrder
