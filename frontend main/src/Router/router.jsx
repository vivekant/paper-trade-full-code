// routes.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import Watchlist1 from "../components/watchlist/watchlist1.jsx";
import Watchlist2 from "../components/watchlist/watchlist2.jsx";
import Watchlist3 from "../components/watchlist/watchlist3.jsx";
import Watchlist5 from "../components/watchlist/watchlist5.jsx";
import Watchlist4 from "../components/watchlist/watchlist4.jsx";
import Trade from "../components/trade.jsx";
import Navbar from "../components/Navbar.jsx";
import Line from "../components/Line.jsx";
import Position from "../components/Position.jsx";
import Profit from "../components/profit.jsx";
import History from "../components/history.jsx";
import '../CSS/watchlist.css'

const router = createBrowserRouter([
    {
        path: '/trade',
        element: <Navigate to="/trade/watchlist1"/>
    },
    {
        path: '/',
        element: <Navigate to="/trade/watchlist1"/>
    },


    {
        path: "/trade/watchlist1",
        element: (
            <div className="trade-watchlist">
                <Trade />
               <div className="trade-watchlist1"> <Watchlist1  /></div>

            </div>
        ),
    },
    {
        path: "/trade/watchlist2",
        element: (
            <div className="trade-watchlist">
                <Trade />
               <div className="trade-watchlist1"> <Watchlist2  /></div>

            </div>
        ),
    },
    {
        path: "/trade/watchlist3",
        element: (
            <div className="trade-watchlist">
            <Trade />
           <div className="trade-watchlist1"> <Watchlist3  /></div>

        </div>
        ),
    },
    {
        path: "/trade/watchlist4",
        element: (
            <div className="trade-watchlist">
                <Trade />
               <div className="trade-watchlist1"> <Watchlist4  /></div>

            </div>
        ),
    },
    {
        path: "/trade/watchlist5",
        element: (
            <div className="trade-watchlist">
                <Trade />
               <div className="trade-watchlist1"> <Watchlist5  /></div>

            </div>
        ),
    },
    {
        path:"/positions",
        element:
        <div className="trade-watchlist">
        <Navbar/>
        <Line/>
        <div className="trade-watchlist1 rposition"><Position/></div>
        </div>
        
    },
    {
        path:"/p&l",
        // element:<>
        // <Navbar/>
        // <Line/>
        // <Profit/>
      
        // </>

        element: <div className="trade-watchlist">
        <Navbar/>
        <Line/>
        <div  ><Profit/></div>
        <div className="trade-watchlist1 rposition"><History/></div>
        </div>
    }

]);

export default router;
