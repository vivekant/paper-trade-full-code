import React from 'react'
import '../CSS/profit.css'
import Profit_entity from './Profit_entity.jsx'
import { useSelector } from 'react-redux'

const Profit = () => {
  const data = useSelector((state) => {
    return state.history

  }
  )
  const pdata = useSelector((state) => {
    return state.positions

  }
  )
  const stringToDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}${d.getDate()}${d.getFullYear()}`;
  };
  
  const TodayDate=stringToDate(Date())
  


  let pfvalue=0
  let RealisedGain=0
  for (const element of data) {
    const exitDate=stringToDate(element.exitTime)
    if(element.buyPrice){
      const prf1=(element.exitPrice-element.buyPrice)*element.quantity
      pfvalue+=prf1
      if(exitDate===TodayDate){
       RealisedGain+=prf1
      }
    }
    else{
      const prf2=(element.sellPrice-element.exitPrice)*element.quantity
      pfvalue+=prf2

      if(exitDate===TodayDate){
        RealisedGain+=prf2
       }
    }
    
  }
  for (const element of pdata) {
    if(element.buyPrice){
      pfvalue+=(element.currentPrice-element.buyPrice)*element.quantity
      console.log(pfvalue)
    }
    else{
      pfvalue+=(element.sellPrice-element.currentPrice)*element.quantity
    }
    
  }

  


  // const pfvalue = 10000000000
  const unrealisedgain=-10000
  return (
    <div className='profit0'>



      <div className='pfprofit4'>
        <div className='pfprofit2'>
          ₹{pfvalue}
        </div>
        <div className='pfprofit3 pfgray'>Net Profit</div>
      </div>
      <div className="pfsummary">
        <div className="pfsummary1">
          <div className="pftitle">Realised gain</div>
          <div className={"pfvalue " + (RealisedGain > 0 ? "pfgreen1" : (RealisedGain < 0 ? "pfred1" : "pfgray1"))}>₹{RealisedGain}</div>
        </div>
        <div className="pfsummary1">
          <div className="pftitle">Unrealized gain</div>
          <div className={"pfvalue " + (unrealisedgain > 0 ? "pfgreen1" : (unrealisedgain < 0 ? "pfred1" : "pfgray1"))}>₹{unrealisedgain}</div>
        </div>
        <div className="pfsummary1">
          <div className="pftitle">Est charge</div>
          <div className="pfvalue">₹{data.length*40}</div>
        </div>
      </div>


      {/* <div className="hdetails">
        <div className='hdetails1'>History details</div>
      </div> */}





























      {/* <div className='hentity0'>
{ 
  data.map((element) => {
   return  element?  <Profit_entity name={element.name} buyPrice={element.buyPrice} exitPrice={element.exitPrice}  /> :""
    
  }
  )
}
</div> */}



    </div>
  )
}

export default Profit
