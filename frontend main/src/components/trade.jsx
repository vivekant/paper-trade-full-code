import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import searchwhite from '../assets/searchwhite.svg';
// import searchfinal from '../assets/searchfinal.svg';
import '../CSS/trade.css';
import Navbar from './Navbar';
import Line from './Line';
import SearchResult from './searchResult';
import { NavLink } from 'react-router-dom';
import {  useSelector } from 'react-redux';


const Trade = ({}) => {
  const [searchKey, setSearchKey] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [watchlist, setWatchlist] = useState(1)
  // const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') === 'true' ? true : false)
  const darkmode=useSelector((state) => {
    return state.darkmode;
  }
  )




  // useEffect(() => {
  //   console.log(searchKey);
  // }, [searchKey]);
  const handleWatchlist=(watchlistNumber) => {
    setWatchlist(watchlistNumber)
    // console.log(watchlistNumber)
  }


  // useEffect(() => {
  //   // document.documentElement.setAttribute('data-theme', darkmode ? "dark" : "light")
  //   //  localStorage.setItem('darkmode', darkmode) 
  //   // localStorage.setItem('darkmode', darkmode)

    
  // }, [darkmode])






  
  return (
    <div className='main0'>
      <Navbar  />
      <Line />


      <div className='trade0'>
        {/* <img className='search1' src={darkmode?searchwhite:search} alt="" /> */}
        <img className={`search1 ${darkmode ? "hidden" : "visible"}`} src={search} alt="" />
        <img className={`search1 ${darkmode ? "visible" : "hidden"}`} src={searchwhite} alt="" />
        <input
          onFocus={() => setShowSearch(true)} // Show the search div
          onBlur={(e) => setShowSearch(false)}
          onChange={async (event) => {
            await setSearchKey(event.target.value);
            // console.log(searchKey);
          }}
          type="text"
          placeholder='Search Index, Derivatives,Stocks '
        />
      </div>

      {showSearch && (
        <div
          className='search0'
          // tabIndex="-1" // Allow the div to receive focus
          onMouseDown={(e) => e.preventDefault()} // Prevent input blur when clicking inside
        >
          <SearchResult searchkey={searchKey} watchlist={watchlist} />
        </div>
      )}
      <ul className='watchlist0'>
        <NavLink
          onClick={ () =>  handleWatchlist(1)
          
          }
          className={({ isActive }) => {
            
            return (isActive ? 'navlink0 black button1 ' : 'navlink0 gray')}}
          to="/trade/watchlist1"
        >
          WatchList1
        </NavLink>



        <NavLink
         onClick={() => handleWatchlist(2)
         }
        className={({ isActive }) => {
          
          return (isActive ? 'navlink0 black button1 sw' : 'navlink0 gray')}}
          to="/trade/watchlist2"
        >
          WatchList2
        </NavLink>



        <NavLink
         onClick={() => handleWatchlist(3)
         }
className={({ isActive }) => {
  
  return (isActive ? 'navlink0 black button1' : 'navlink0 gray')}}
          to="/trade/watchlist3"
        >
          <li>WatchList3</li>
        </NavLink>


        <NavLink
         onClick={() =>handleWatchlist(4)
         }
          className={({ isActive }) => {
          
            return (isActive ? 'navlink0 black button1' : 'navlink0 gray')}}
          to="/trade/watchlist4"
        >
          <li>WatchList4</li>
        </NavLink>


        <NavLink
       onClick={() =>handleWatchlist(5)
       }
 className={({ isActive }) => {
  
  return (isActive ? 'navlink0 black button1' : 'navlink0 gray')}}
          to="/trade/watchlist5"
        >
          <li>WatchList5</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Trade;
