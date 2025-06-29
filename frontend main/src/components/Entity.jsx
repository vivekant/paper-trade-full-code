import React, { useState, useRef, useEffect } from 'react'
import '../CSS/entity.css'
import { useDispatch } from 'react-redux'
import cross from '../assets/cross.png'
import { useSelector } from 'react-redux'

import { AddToWatchlist, RemoveFromWatchlist, AddToPosition } from '../redux/counterSlice'

const entity = ({ name, daychange, current_price, exchange, exists, watchlist,open_price }) => {










  

  const change_p = (daychange / (current_price - daychange)) * 100
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const order_execute = useRef(null)
  const [order_type, setOrder_type] = useState(null)
  const [priceType, setPriceType] = useState("market")
  const [OrderPrice, setOrderPrice] = useState(current_price)
  const [OrderQuantity, setOrderQuantity] = useState(1)
  const [Error, setError] = useState(false)
  const [stoploss, setStoploss] = useState(null)
  const [target, setTarget] = useState(null)

  const [quantityerror, setQuantityerror] = useState(false)
  const [orderpriceerror, setOrderpriceerror] = useState(false)
  const [targetpriceerror, setTargetpriceerror] = useState(false)
  const [stoplosserror, setStoplosserror] = useState(false)


  useEffect(() => {
    if (priceType === "market") {
      setOrderPrice(current_price)
    }

  
  }, [current_price])

  useEffect(() => {
    if (exchange.includes("FO")) {
      if (OrderQuantity % 15 === 0) {
        setError(false)
        // console.log(`stoploss=${stoploss}`)
        // console.log(`target=${target}`)
      }
      else {
        setError(true)
      }
    }


  }, [OrderQuantity])

  useEffect(() => {
    if (OrderQuantity > 0) {
      setQuantityerror(false)
    }
    else {
      setQuantityerror(true)
    }
    if (OrderPrice > 0.7 * current_price && OrderPrice < 1.3 * current_price) {
      setOrderpriceerror(false)

    }
    else {
      setOrderpriceerror(true)
    }

    if (order_type == "B") {

      if (target) {
        if (target < current_price) {
          setTargetpriceerror(true)

        }
        else {
          setTargetpriceerror(false)
        }
      }
      if (stoploss) {
        if (stoploss > current_price) {
          setStoplosserror(true)
        }
        else {
          setStoplosserror(false)
        }
      }
    }
    else if (order_type == "S") {
      if (target) {
        if (target > current_price) {
          setTargetpriceerror(true)
        }
        else {
          setTargetpriceerror(false)
        }
      }
      if (stoploss) {
        if (stoploss < current_price) {
          setStoplosserror(true)
        }
        else {
          setStoplosserror(false)
        }
      }
    }

  }, [OrderQuantity, OrderPrice, target, stoploss])

  const handleClickOutside = (event) => {
    if (order_execute.current && !order_execute.current.contains(event.target)) {
      setShow(false);
    }
  };



  const handlePlaceOrder = () => {

    //  if(OrderQuantity===null || OrderQuantity<=0){
    //   setQuantityerror(true)


    //  }

    //  if(OrderPrice<0.8*current_price || OrderPrice>1.3*current_price){
    //   setOrderpriceerror(true)

    //  }








    if (OrderQuantity > 0 && OrderPrice > 0.7 * current_price && OrderPrice < 1.3 * current_price && !targetpriceerror && !stoplosserror) {

      const orderData = {
        buyTime: Date(),
        quantity: OrderQuantity,
        target: target,
        stoploss: stoploss,
        currentPrice: current_price,
        name,
        exchange,
        orderType: order_type
      }
      if (order_type === "B") {
        orderData.buyPrice = OrderPrice
      }
      else {
        orderData.sellPrice = OrderPrice
      }

      console.log(orderData)


      dispatch(AddToPosition(orderData))
      setShow(false)
    }
  }


  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);





  return (
    <div className='entity0'>

      
      <div className='namecolor' >{name} <sup className='sup'>{(name.includes("CE") || name.includes("PE")) ? (exchange + " FO") : exchange}</sup> </div>
      <div className='order0'>
        <button onClick={() => {
          setShow(true)
          setOrder_type("B")
        }
        } className='greenb'>BUY</button>
        <button onClick={() => {
          setShow(true)
          setOrder_type("S")
        }
        } className='redb'>SELL</button>
        {
          exists ? <button
            onClick={(params) => {
              
              dispatch(RemoveFromWatchlist({ name, exchange, watchlistNumber: watchlist }))
            }}
            className='remove' >remove</button> :
            <button
              onClick={(params) => 
                dispatch(AddToWatchlist({ name, exchange, watchlistNumber: watchlist, current_price, daychange,open_price }))
               
              }
              className='remove' >add</button>
        }
      </div>
      <div className='entity1'>
        <div className='currentprice' >{current_price}</div>
        <div className={change_p > 0 && 'changep green' || change_p < 0 && 'changep red' || change_p === 0 && 'changep gray'}>{daychange}  ({parseFloat(change_p.toFixed(2))}%)</div>

      </div>


      {
        show &&
        <div className="order-execute">
          <div ref={order_execute} className="order-execute1">

            <div className='cancel2'>
              <img onClick={() => setShow(false)
              } src={cross} alt="" />
            </div>

            {/* <div className='buyorsell0'>
              <div onClick={() => { setOrder_type("B") }}
                className={order_type === "B" ? "buyorsell1 orgreen" : "buyorsell1"}>Buy</div>
              <div onClick={() => { setOrder_type("S") }}
                className={order_type === "S" ? "buyorsell1 orred" : "buyorsell1"}>Sell</div>
            </div> */}




            <div className='buyorsell2'>
              <div className="name">
                {name}
                <p className={daychange > 0 ? "green" : (daychange < 0 ? "red" : "gray")}>{current_price}    </p>
                <p>  {daychange}   ({change_p.toFixed(2)}%)</p>
              </div>













              <div className="price">
                <div className="price1">
                  <span className='price4'>Qunatity {/* <button>-</button> */}  </span>
                  <span className='input'>
                    <input type="number" value={OrderQuantity} onChange={(event) => { setOrderQuantity(event.target.value) }} />
                    <span className={quantityerror ? "yes-error" : "no-error"} >quantity must be greater than 0</span>
                    {/* <button>+</button> */}
                    {<div className='quantity_error'>{!Error ? "" : "qunatity should be multiple of 15"}</div>}
                  </span>
                </div>

                <div className='buyorsell0'>
                  <div onClick={() => { setOrder_type("B") }}
                    className={order_type === "B" ? "buyorsell1 orgreen" : "buyorsell1"}>Buy</div>
                  <div onClick={() => { setOrder_type("S") }}
                    className={order_type === "S" ? "buyorsell1 orred" : "buyorsell1"}>Sell</div>
                </div>

              </div>














              <div className='price'>
                <div className='price1'>
                  <span className='price4'>Price </span>
                  <span className='input'>
                    <input type="number" value={OrderPrice}


                      onChange={(event) => {
                        setOrderPrice(event.target.value)
                      }}
                      onClick={() => {
                        setPriceType("limit")

                      }
                      }

                    />
                    <span className={orderpriceerror ? "yes-error" : "no-error"} >price must be in the range ({0.7 * current_price},{1.3 * current_price})</span>

                  </span>
                </div>
                <div className='pricetype'>
                  <span onClick={() => {
                    setPriceType("limit")
                  }
                  } className={priceType === "limit" ? "pricetypecolor" : ""}>limit</span>
                  <span onClick={() => {
                    setPriceType("market")
                  }
                  } className={priceType === "market" ? "pricetypecolor" : ""}>market</span>
                </div>
              </div>


















              {/* value of target */}

              <div className="price">
                <div className="price1">
                  <span className='price4'>Target</span>
                  <span className='input'><input type="number" onChange={(event) => {
                    setTarget(event.target.value)
                  }
                  } /><p>(Optional)</p>
                    <span className={(targetpriceerror ? "yes-error1" : "no-error1")}>{order_type == "B" ? "target must be greater than LTP" : "target must be less than LTP"}</span>

                  </span>

                </div>
              </div>







              {/* value of stoploss */}
              <div className="price">
                <div className="price1">
                  <span className='price4'>Stoploss</span>
                  <span className='input'>
                    <input type="number" onChange={(event) => {
                      setStoploss(event.target.value)
                    }
                    } />
                    <p>(Optional)</p>


                    <span className={(stoplosserror ? "yes-error1" : "no-error1")}>{order_type == "B" ? "stoploss must be less than LTP" : "stoploss must be greater than LTP"}</span>


                  </span>
                </div>

              </div>








              {/*  place order or cancel */}

              <div className="confirm0">
                <div onClick={() => {
                  setShow(false)

                }
                } className="confirm1 confirm11">
                  Cancle
                </div>
                <div
                  onClick={() => {



                    handlePlaceOrder()
                    // setShow(false)

                  }
                  }

                  className="confirm1 confirm12">
                  Place Order
                </div>

              </div>
















            </div>


          </div>
        </div>
      }



    </div>
  )
}

export default entity
