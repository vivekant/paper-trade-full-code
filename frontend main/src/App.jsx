import { useState ,useEffect} from 'react'
import './App.css'

import Trade from './components/trade.jsx';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx'
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";

function App() {
   const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') === 'true' ? true : false)
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', darkmode ? "dark" : "light")
       localStorage.setItem('darkmode', darkmode) 
      
    }, [darkmode])

  return (
   <>
   <SignedOut>
        <div className="signinpage">
        <SignIn />
        </div>
          
        </SignedOut>
  <SignedIn>
  <RouterProvider router={router}>  
  <Trade  darkmode={darkmode} setDarkmode={setDarkmode} />
  </RouterProvider>
  </SignedIn>
  
  

   </>
  )
}

export default App
