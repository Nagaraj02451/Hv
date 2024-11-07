import React from 'react'
import Navbar1 from './Components/Navbar1'
import Pages from './Pages'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <div>
    <ToastContainer theme='dark' />

      <Pages/>
    </div>
    </>
  )
}

export default App