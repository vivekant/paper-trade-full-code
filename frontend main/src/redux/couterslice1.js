import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API Fetching Function (Replace with real API URL)
export const fetchStockData = createAsyncThunk('stocks/fetchData', async () => {
  const response = await fetch('http://localhost:3000/vivedhara', {
    method: 'POST', // Change to POST method
    headers: {
        'Content-Type': 'application/json' // Ensure the request body is JSON
    },
    body: JSON.stringify({ /* Add any necessary data for the POST request */ })
});
    const data = await response.json();
    return data; // Assume data is an array of stock objects
});

const initialState = {
    darkmode:localStorage.getItem("darkmode")?localStorage.getItem("darkmode"):false,
    watchlist1: [
        { name: "ADANIENT", current_price: 3000, daychange: 100, exchange: "NSE" },
        { name: "ADANIENT", current_price: 3000, daychange: 100, exchange: "BSE" },
    ],
    watchlist2: [
        { name: "TATAMOTORS", current_price: 3000, daychange: 100, exchange: "NSE" },
        { name: "TATAMOTORS", current_price: 3000, daychange: 100, exchange: "BSE" },
    ],
    watchlist3: [],
    watchlist4: [],
    watchlist5: [],
    positions: [
        {
            buyPrice: 100, sellPrice: null, currentPrice: 160, quantity: 1000,
            buyTime: "10th October 2024 5:35PM", target: 120, stoploss: 90,
            name: "TATAMOTORS", exchange: "NSE", orderType: "B"
        },
    ],
    history: [
      {
        // "buyPrice": 320.5,
        "sellPrice": 340.2,
        "quantity": 50,
        "buyTime": "2024-11-21T09:15:00+05:30",
        "exitTime": "2024-11-21T15:30:00+05:30",
        "target": 345.0,
        "stoploss": 310.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 340.2,
        "exchange": "NSE",
        "name": "TATASTEEL"
      },
      {
        "buyPrice": 1200.0,
        "sellPrice": 1250.5,
        "quantity": 10,
        "buyTime": "2024-11-20T09:20:00+05:30",
        "exitTime": "2024-11-20T15:25:00+05:30",
        "target": 1260.0,
        "stoploss": 1180.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 1250.5,
        "exchange": "BSE",
        "name": "RELIANCE"
      },
      {
        "buyPrice": 250.75,
        "sellPrice": 270.0,
        "quantity": 100,
        "buyTime": "2024-11-22T10:00:00+05:30",
        "exitTime": "2024-11-22T14:45:00+05:30",
        "target": 275.0,
        "stoploss": 245.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 270.0,
        "exchange": "NSE",
        "name": "INFY"
      },
      {
        "buyPrice": 680.0,
        "sellPrice": 705.0,
        "quantity": 30,
        "buyTime": "2024-11-21T09:50:00+05:30",
        "exitTime": "2024-11-21T15:10:00+05:30",
        "target": 710.0,
        "stoploss": 665.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 705.0,
        "exchange": "BSE",
        "name": "WIPRO"
      },
      {
        "buyPrice": 150.25,
        "sellPrice": 160.3,
        "quantity": 200,
        "buyTime": "2024-11-19T09:25:00+05:30",
        "exitTime": "2024-11-19T15:00:00+05:30",
        "target": 162.0,
        "stoploss": 145.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 160.3,
        "exchange": "NSE",
        "name": "SBIN"
      },
      {
        "buyPrice": 210.0,
        "sellPrice": 225.0,
        "quantity": 120,
        "buyTime": "2024-11-23T09:30:00+05:30",
        "exitTime": "2024-11-23T14:55:00+05:30",
        "target": 230.0,
        "stoploss": 205.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 225.0,
        "exchange": "BSE",
        "name": "HDFCBANK"
      },
      {
        "buyPrice": 905.0,
        "sellPrice": 920.0,
        "quantity": 15,
        "buyTime": "2024-11-22T09:45:00+05:30",
        "exitTime": "2024-11-22T15:20:00+05:30",
        "target": 930.0,
        "stoploss": 890.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 920.0,
        "exchange": "NSE",
        "name": "HCLTECH"
      },
      {
        "buyPrice": 175.8,
        "sellPrice": 180.0,
        "quantity": 180,
        "buyTime": "2024-11-20T09:35:00+05:30",
        "exitTime": "2024-11-20T14:50:00+05:30",
        "target": 182.0,
        "stoploss": 170.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 180.0,
        "exchange": "BSE",
        "name": "IOC"
      },
      {
        "buyPrice": 430.5,
        "sellPrice": 445.5,
        "quantity": 80,
        "buyTime": "2024-11-18T09:40:00+05:30",
        "exitTime": "2024-11-18T15:15:00+05:30",
        "target": 450.0,
        "stoploss": 420.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 445.5,
        "exchange": "NSE",
        "name": "ADANIPORTS"
      },
      {
        "buyPrice": 290.0,
        "sellPrice": 300.0,
        "quantity": 60,
        "buyTime": "2024-11-23T10:15:00+05:30",
        "exitTime": "2024-11-23T15:25:00+05:30",
        "target": 305.0,
        "stoploss": 280.0,
        "targetHitted": false,
        "stoplossHitted": false,
        "exitPrice": 300.0,
        "exchange": "BSE",
        "name": "ITC"
      }
  ],
  fetchedStocks: [],
    loading: false,
    error: null
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

     updatedarkmode: (state , action) => {
       const {darkmode}=action.payload
       state.darkmode = darkmode;
       localStorage.setItem("darkmode",darkmode)
     },
     
      AddToWatchlist: (state, action) => {
          const { watchlistNumber, name, current_price, daychange, exchange } = action.payload;

          const entity = { name, current_price, daychange, exchange };

          // Dynamically access the correct watchlist
          const watchlistKey = `watchlist${watchlistNumber}`;
          if (state[watchlistKey]) {
              state[watchlistKey].push(entity);
          } else {
              console.error(`Invalid watchlist number: ${watchlistNumber}`);
          }
      },
      RemoveFromWatchlist: (state, action) => {
          const { name, exchange, watchlistNumber } = action.payload
          const watchlistkey = `watchlist${watchlistNumber}`
          if (state[watchlistkey]) {
              state[watchlistkey] = state[watchlistkey].filter((entity) => {
                  return !(entity.name === name && entity.exchange === exchange)
              }
              )
          }
          else {
              console.log(`error while removing entity from watchlist${watchlistNumber}`);

          }
      },
      AddToPosition: (state, action) => {
          const {
              buyPrice,
              sellPrice,
              currentPrice,
              quantity,
              buyTime,
              target,
              stoploss,
              name,
              exchange,
              orderType

          } = action.payload
          console.log()
          let targetHitted = false
          let stoplossHitted = false
          let profit = 0
          let exitTime="--"
          let exitPrice="--"
          if (buyPrice) {
              profit = (currentPrice - buyPrice)
              if (target && target <= currentPrice) {
                  targetHitted = true
                  exitTime = Date().split("GMT")[0]
                  profit = (target - buyPrice)
                  exitPrice=target
              }
              else if (stoploss && stoploss >= currentPrice) {
                  stoplossHitted = true
                  exitTime = Date().split("GMT")[0]
                  exitPrice=stoploss
                  profit = stoploss - buyPrice
              }
          }
          else if (sellPrice) {
              profit = (sellPrice - currentPrice)
              if (target && target >= currentPrice) {
                  targetHitted = true
                  exitTime = Date().split("GMT")[0]
                  profit = sellPrice - target
                  exitPrice=target

              }
              else if (stoploss && stoploss <= currentPrice) {
                  stoplossHitted = true
                  exitTime = Date().split("GMT")[0]
                  profit = sellPrice- stoploss
                  exitPrice=stoploss
              }
          }


          const entity = {
              buyPrice,
              sellPrice,
              currentPrice,
              quantity,
              buyTime,                
              target,
              stoploss,
              // targetHitted,
              // stoplossHitted,
              profit,
              name,
              exchange,
              orderType
              // exitPrice
          }
          if (targetHitted || stoplossHitted) {
              entity.targetHitted=targetHitted
              entity.stoplossHitted=stoplossHitted
              entity.exitTime=exitTime
              entity.exitPrice=exitPrice
              state.history.push(entity)
          }
          else {
              state.positions.push(entity)
          }



      },
      // AddToHistory: (state, action) => {
      //     const {
      //         buyPrice,
      //         sellPrice,
      //         quantity,
      //         buyTime,
      //         exitTime,
      //         target,
      //         stoploss,
      //         targetHitted,
      //         stoplossHitted
      //     } = action.payload

      //     const entity = {
      //         buyPrice,
      //         sellPrice,
      //         quantity,
      //         buyTime,
      //         exitTime,
      //         target,
      //         stoploss,
      //         targetHitted,
      //         stoplossHitted
      //     }
      //     state.history.push(entity)
      // },
      exitPosition: (state, action) => {
          const { name, buyTime, exitPrice,exchange } = action.payload
          const data = state.positions.filter((element) => {
              return (element.name === name && element.buyTime === buyTime)
          })[0]

          state.positions = state.positions.filter((element) => {
              return !(element.name === name && element.buyTime === buyTime)
          })
      
         

          const {
              buyPrice,
              sellPrice,
              currentPrice,
              quantity,
              exitTime,
              target,
              stoploss,
              targetHitted,
              stoplossHitted,
              
          } = data

          if(!exitPrice){
              const entity = {
                  buyPrice,
                  sellPrice,
                  quantity,
                  buyTime,
                  exitTime,
                  target,
                  stoploss,
                  targetHitted,
                  stoplossHitted,
                  exitPrice:currentPrice,
                  exchange,
                  name
              }
              state.history.push(entity)


          }
          else{
              const entity = {
                  buyPrice,
                  sellPrice,
                  quantity,
                  buyTime,
                  exitTime,
                  target,
                  stoploss,
                  targetHitted,
                  stoplossHitted,
                  exitPrice,
                  exchange,
                  name
              }
              state.history.push(entity)
          }

          

   



         




      },
      updatePosition: (state, action) => {
        const {name,exchange, buyTime,newstp,newtrgt}=action.payload


       
        // finding the target element to change them
        const targetElement=state.positions.filter((element) => { return (element.name===name && element.exchange===exchange && element.buyTime===buyTime)})[0]
        if(targetElement.orderType==="B"){

        }
        if(targetElement.orderType==="S"){
          
        }

        // finding index of the above target element
        const index=state.positions.findIndex((element) => {
          return element===targetElement

        }
        )

        // changing the target element values
        state.positions[index].stoploss=newstp
        state.positions[index].target=newtrgt
        state.positions[index].lastUpdatedAt=Date()
          }
        
      
      









  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchStockData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchStockData.fulfilled, (state, action) => {
            state.loading = false;
            state.fetchedStocks = action.payload; // Overwrite fetched data
        })
        .addCase(fetchStockData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
      }
});

// Start Fetching Data Every Second
export const startFetchingData = () => (dispatch) => {
    setInterval(() => {
        dispatch(fetchStockData());
    }, 1000);
};

export const { AddToWatchlist,AddToPosition,RemoveFromWatchlist,exitPosition, updatePosition,  updatedarkmode } = counterSlice.actions
export default counterSlice.reducer;
