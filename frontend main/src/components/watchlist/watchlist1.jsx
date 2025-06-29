import React from 'react'
import '../../CSS/entity.css'
import Entity from '../Entity.jsx'
import { useSelector } from 'react-redux'


const watchlist1 = () => {


const data=useSelector((state) => {
// console.log(state.watchlist1)

  return state.watchlist1
}
)
  return (
    <div className='trade2'>
       <div className='trade1'>
     {/* <Entity name={"ADANIENT"} current_price={3000} daychange={100} exchange={'NSE'}/>
     <Entity name={"ADANIENT"} current_price={3000} daychange={100} exchange={'BSE'}/> */}


     {
      data.map((element) => element?<Entity key={element.name+element.exchange} name={element.name} current_price={element.current_price} daychange={element.daychange} exchange={element.exchange} exists={true} watchlist={1} open_price={element.open_price}/>:""
      )
      
     }
     
     </div>
    </div>
  )
}

export default watchlist1
