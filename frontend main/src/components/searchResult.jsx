import React from 'react'
import '../CSS/search.css'
import Entity from './Entity'
import { useEffect } from 'react'
import image from '../assets/smart-search.png'
import { useSelector, useDispatch } from 'react-redux'
// import {AddToWatchlist,RemoveFromWatchlist} from '../../redux/counterSlice'


const searchResult = ({searchkey,watchlist}) => {
 
  const data = [
    { name: "RTNINDIA", price: 35, daychange: 0.84, type: "stock", exchange: "BSE", open_price: 35.84 },
    { name: "TCS", price: 3500, daychange: -109.64, type: "stock", exchange: "NSE", open_price: 3390.36 },
    { name: "INFY", price: 1450, daychange: 30.27, type: "stock", exchange: "BSE", open_price: 1480.27 },
    { name: "WIPRO", price: 400, daychange: 14.52, type: "stock", exchange: "NSE", open_price: 414.52 },
    { name: "HDFCBANK", price: 1650, daychange: -43.62, type: "stock", exchange: "BSE", open_price: 1606.38 },
    { name: "RELIANCE", price: 2500, daychange: 57.41, type: "stock", exchange: "BSE", open_price: 2557.41 },
    { name: "ADANIENT", price: 2200, daychange: -60.89, type: "stock", exchange: "NSE", open_price: 2139.11 },
    { name: "ITC", price: 350, daychange: 7.56, type: "stock", exchange: "NSE", open_price: 357.56 },
    { name: "BAJAJFINSV", price: 1900, daychange: 41.73, type: "stock", exchange: "BSE", open_price: 1941.73 },
    { name: "ONGC", price: 180, daychange: -6.85, type: "stock", exchange: "NSE", open_price: 173.15 },
    { name: "POWERGRID", price: 250, daychange: -3.34, type: "stock", exchange: "BSE", open_price: 246.66 },
    { name: "BHARTIARTL", price: 700, daychange: 15.97, type: "stock", exchange: "NSE", open_price: 715.97 },
    { name: "MARUTI", price: 9600, daychange: -314.73, type: "stock", exchange: "NSE", open_price: 9285.27 },
    { name: "SUNPHARMA", price: 1040, daychange: 20.63, type: "stock", exchange: "BSE", open_price: 1060.63 },
    { name: "HCLTECH", price: 1200, daychange: -22.58, type: "stock", exchange: "NSE", open_price: 1177.42 },
    { name: "JSWSTEEL", price: 750, daychange: 18.44, type: "stock", exchange: "BSE", open_price: 768.44 },
    { name: "TATAMOTORS", price: 620, daychange: -9.41, type: "stock", exchange: "BSE", open_price: 610.59 },
    { name: "ULTRACEMCO", price: 8600, daychange: 280.68, type: "stock", exchange: "NSE", open_price: 8880.68 },
    { name: "COALINDIA", price: 220, daychange: -5.51, type: "stock", exchange: "BSE", open_price: 214.49 },
    { name: "SBIN", price: 620, daychange: 17.28, type: "stock", exchange: "NSE", open_price: 637.28 }
  ];
  
  const watchlistx=useSelector((state) => {
    return state[`watchlist${watchlist}`]
  }
  )
  
//   useEffect(() => {
//  console.log(watchlist)
  
    
//   }, [watchlist])
  
  
  return (

    <>
    {
      searchkey===""?<div className='search11 flex'>
        <img src={image} alt="" />
        Enter script to begin search
        
        
        </div>:
    <div className='search11'>

{
  data.filter((entities) => {
    return entities.name.toLowerCase().includes(searchkey.toLowerCase())
  }
  ).map((element) => {
    const exists=watchlistx.some((watchlist1_element) => {
      return (
   element.name===watchlist1_element.name &&
   element.exchange===watchlist1_element.exchange
      )
    }
    )

    return <Entity key={element.name} name={element.name} current_price={element.price} daychange={element.daychange} exchange={element.exchange} watchlist={watchlist} exists={exists} open_price={element.open_price}/>
  }
  )
}


    </div>
}
    </>
  )
}

export default searchResult
