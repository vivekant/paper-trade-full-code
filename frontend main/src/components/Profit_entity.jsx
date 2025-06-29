import React from 'react'
import '../CSS/profit_entity.css'
import cross from '../assets/cross.png'
import { useState , useEffect, useRef} from 'react'

const profit_entity = ({ buyPrice,
  sellPrice,
  quantity,
  buyTime,
  exitTime,
  target,
  stoploss,
  targetHitted,
  stoplossHitted,
  exitPrice,
  name,
  exchange }) => {

const [show, setShow] = useState(false)
const hdetailsRef = useRef(null);

useEffect(() => {
  console.log(show)

  
}, [show])


const handleClickOutside = (event) => {
  if (hdetailsRef.current && !hdetailsRef.current.contains(event.target)) {
    setShow(false);
  }
};

useEffect(() => {
  // Add event listener to detect clicks outside
  document.addEventListener('mousedown', handleClickOutside);

  // Remove event listener on cleanup
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);




  const profit = buyPrice ? exitPrice - buyPrice : sellPrice - exitPrice
  const pprofit = buyPrice ? (exitPrice - buyPrice) * 100 / buyPrice : (sellPrice - exitPrice) * 100 / sellPrice
  return (
    <div onClick={() => {
      return setShow(true)
    }
    } className='pfmain0'>

      {show &&
       <div  className="hdetails  ">
        <div ref={hdetailsRef} className='hdetails1'>
          <div  className='cancel1'> <img onClick={(event) => { 
            event.stopPropagation();
            return setShow(false)
            
          }
          }  src={cross} alt="" /></div>
          
          <div className="hdetails3">
            <div className={profit > 0 ? "pfgreen  pfprofit" : (profit < 0 ? "pfred" : "pfgray")}>{profit.toFixed(2)}</div>
            <div className={profit > 0 ? "pfgreen new" : (profit < 0 ? "pfred" : "pfgray")} >({pprofit.toFixed(2)}%)</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Instrument</div>
            <div className="hvalue">{name}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Order Type</div>
            <div className={ buyPrice?" hvalue pfgreen bold":" hvalue pfred bold"}>{buyPrice?"BUY":"SELL"}</div>
          </div>
         {buyPrice? <div className="hdetails2">
            <div className="htitle">Buy Price</div>
            <div className="hvalue">{buyPrice}</div>
          </div>:<div className="hdetails2">
            <div className="htitle">Sell Price</div>
            <div className="hvalue">{sellPrice}</div>
          </div>}
          <div className="hdetails2">
            <div className="htitle">Exit Price</div>
            <div className="hvalue">{exitPrice}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Quantity</div>
            <div className="hvalue">{quantity}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Stoploss</div>
            <div className="hvalue">{stoploss ? stoploss : "--"}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Target</div>
            <div className="hvalue">{target ? target : "--"}</div>
          </div>

          <div className="hdetails2">
            <div className="htitle">Buy Time</div>
            <div className="hvalue">{buyTime}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Exit Time</div>
            <div className="hvalue">{exitTime}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Target Status</div>
            <div className="hvalue">{targetHitted ? "Hitted" : "--"}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Stoploss Status</div>
            <div className="hvalue">{stoplossHitted ? "Hitted" : "--"}</div>
          </div>
          <div className="hdetails2">
            <div className="htitle">Exchange</div>
            <div className="hvalue">{exchange}</div>
          </div>
          {/* <div className="hdetails2">
        <div className="htitle"></div>
        <div className="hvalue"></div>
       </div> */}




        </div>
      </div>
      }


      <div className='pfelement1'>
        <div className='pfname'>{name} <sup className={exchange ? "pfsup" : "none"}>{exchange}</sup></div>
        <div className='pfqty'>Qty:{quantity}</div>
      </div>
      <div className='pfelement1 pfelement2' >
        <div className={profit > 0 ? "pfgreen pfprofit" : (profit < 0 ? "pfred" : "pfgray")}>{(quantity*profit).toFixed(2)}</div>
        <div className={profit > 0 ? "pfgreen" : (profit < 0 ? "pfred" : "pfgray")} >({pprofit.toFixed(2)}%)</div>
      </div>
    </div>
  )
}

export default profit_entity
