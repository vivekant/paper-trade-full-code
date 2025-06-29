import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS/profit.css'
import Profit_entity from './Profit_entity.jsx'

const history = () => {
  const data = useSelector((state) => {
    return state.history
  }
  )
  return (
    <div className='hentity0'>
      {
        data.map((element) => {
          return element ? <Profit_entity
            name={element.name}
            buyPrice={element.buyPrice}
            sellPrice={element.sellPrice}
            exitPrice={element.exitPrice}
            quantity={element.quantity}
            buyTime={element.buyTime}
            exitTime={element.exitTime}
            target={element.target}
            stoploss={element.stoploss}
            targetHitted={element.targetHitted}
            stoplossHitted={element.stoplossHitted}
            exchange={element.exchange}
          /> : ""

        }
        )
      }
    </div>
  )
}

export default history
