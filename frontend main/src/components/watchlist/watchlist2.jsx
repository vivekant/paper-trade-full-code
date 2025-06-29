import React from 'react'
import '../../CSS/entity.css'
import Entity from '../Entity.jsx'
import { useSelector } from 'react-redux'
const watchlist2 = () => {
  const data = useSelector((state) => {
    return state.watchlist2
  }
  )

  return (
    <div>
      <div className='trade1'>
        {/* <Entity name={"TATAMOTORS"} current_price={1000} daychange={50} exchange={'NSE'} />
        <Entity name={"TATAMOTORS"} current_price={1000} daychange={50} exchange={'BSE'} /> */}


        {
          data.map((element) => element ? <Entity key={element.name + element.exchange} name={element.name} current_price={element.current_price} daychange={element.daychange} exchange={element.exchange} exists={true} watchlist={2} /> : ""
          )
        }
      </div>
    </div>
  )
}

export default watchlist2
