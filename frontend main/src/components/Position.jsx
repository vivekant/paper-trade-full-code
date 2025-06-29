import React from 'react'
import Entity from './Entity.jsx'
import '../CSS/position.css'
import Position_entity from './Position_entity.jsx'
import { useSelector } from 'react-redux'
const Position = () => {
  const positions_data=useSelector((state) => {
    return state.positions
  }  
  )
  return (
    <div className='position0'>
      {/* <Position_entity name={'TATAMOTORS'} quantity={1000} current_price={500} buy_price={500}   /> */}


      {
        positions_data.map((element) => element? <Position_entity key={element.name+element.exchange}
         name={element.name} 
         quantity={element.quantity} 
         current_price={element.currentPrice} 
          exchange={element.exchange}
           ltp={element.ltp?element.ltp:null} 
           buy_price={element.buyPrice?element.buyPrice:null}
           sell_price={element.sellPrice?element.sellPrice:null} 
           orderType={element.orderType}
           target={element.target}
           stoploss={element.stoploss}
           buyTime={element.buyTime}
           lastUpdatedAt={element.lastUpdatedAt} />:""
        )
      }
    </div>
  )
}

export default Position
