import React from 'react'
import '../CSS/position_entity.css'
import { useState, useRef, useEffect } from 'react'
import cross from '../assets/cross.png'
import { useDispatch } from 'react-redux'
import { exitPosition, updatePosition } from '../redux/counterSlice'

const position_entity = ({ name, quantity, buy_price, current_price, ltp, exchange, orderType, sell_price, stoploss, target, buyTime,lastUpdatedAt }) => {
  const [stploss, setStploss] = useState(stoploss)
  const [trgt, setTrgt] = useState(target)
  

  const profit=buy_price?current_price-buy_price:sell_price-current_price
  const pprofit = profit * 100 / (buy_price?buy_price:sell_price)
  const [show, setShow] = useState(false)
  const order_execute = useRef(null)
  const dispatch=useDispatch()
  const [positionEditShow, setPositionEditShow] = useState(false)

  const handleClickOutside = (event) => {
    if (order_execute.current && !order_execute.current.contains(event.target)) {
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

  const handleUpdatePosition=(stploss,trgt) => {
    dispatch(updatePosition({name,exchange,buyTime,newstp:stploss,newtrgt:trgt}))
  }



  useEffect(() => {
    
  handleUpdatePosition(stploss,trgt)
   
  }, [current_price])
  



const handleExitPosition=() => {
  dispatch(exitPosition({name,exchange,buyTime,exitPrice:current_price}))
}



  return (
    <div

      onClick={() => {
        setShow(true)

      }
      }

      className='pentity00'>

      <div className="pentity0">
      <div className='pentity1'>
        <div className='pname '>{name} <sup className='exchange'>{exchange}</sup ></div>
        <div className='pgray'>QTY:{quantity}</div>
        <div className='pgray'>Avg Buy price:{buy_price}</div>
      </div>
      <div className='pentity1 pentity2'>
        <div className={profit > 0 ? "pgreen" : (profit == 0 ? "pgray" : "pred")}>{profit * quantity}</div>
        <div className={profit > 0 ? "pgreen" : (profit == 0 ? "pgray" : "pred")}   >({pprofit.toFixed(3)}%)</div>
        <div className='pgray'>LTP:{ltp ? ltp : current_price}</div>
      </div>
      </div>




      {
        show &&
        <div className="position_control0">
          <div ref={order_execute} className="position_control1">


            <div className='cancel2'>
              <img onClick={(event) => {
                event.stopPropagation()
                setShow(false)
              }
              } src={cross} alt="" />
            </div>














            {/*  acposition mean action on position */}



            <div className="acposition0">
              <div className="acprofit">{quantity * profit.toFixed(2)}</div>
              <div className="acpprofit">({pprofit}%)</div>
            </div>

            <div className="acdetails00">
              <div className="acdetails0">
                <div className="actitle">Instrument</div>
                <div className="acvalue">{name}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">Order Type</div>
                <div className="acvalue">{orderType === "B" ? "BUY" : "SELL"}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">Quantity</div>
                <div className="acvalue">{quantity}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">{buy_price ? "Buy Price" : "Sell Price"}</div>
                <div className="acvalue">{buy_price ? buy_price : sell_price}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">Current Price</div>
                <div className="acvalue">{current_price}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">Target</div>
                <div className="acvalue">{target}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">Stoploss</div>
                <div className="acvalue">{stoploss}</div>
              </div>
              <div className="acdetails0">
                <div className="actitle">BuyTime</div>
                <div className="acvalue">{buyTime}</div>
              </div>
              {lastUpdatedAt && <div className="acdetails0">
                <div className="actitle">Last Updated </div>
                <div className="acvalue">{lastUpdatedAt}</div>
              </div>}


              {positionEditShow && <div className="update-data">
                <div className="newstp">
                  <span>New Stoploss</span>
                  <input onChange={(event) => {
                    setStploss(event.target.value)
                  }
                  } value={stploss} type="number" />
                </div>
                <div className="newstp">
                  <span>New Target</span>
                  <input onChange={(event) => {
                    setTrgt(event.target.value)
                  }
                  } value={trgt} type="number" />
                </div>
              </div>}



              <div className="exebutton0">
                <div className="exebutton1">
                  {positionEditShow ? <button onClick={() => {
                    setPositionEditShow(!positionEditShow)
                    handleUpdatePosition(stploss, trgt)
                  }
                  } className="update bgreen">Set</button> : <button
                    onClick={() => {
                      setPositionEditShow(!positionEditShow)
                    }
                    } className="update">Edit</button>}
                  <button onClick={() => {
                    handleExitPosition()
                  }
                  } className="exit">Exit</button>
                </div>
              </div>



            </div>




























          </div>
        </div>
      }


































    </div>
  )
}

export default position_entity
