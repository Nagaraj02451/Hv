import React from 'react'
import '../Styles/Navbar2.css'

const Navbar2 = () => {
  return (
    <>
    <div className='nav11'>
        <div className='nav12'>
         <a href='site' className='nav11a'>OUR STAYS</a>
         <a href='contact' className='nav11a'>CONTACT US</a>
         <a className='nav12a' href='/sidebar'>
            <img src='Img/nav2.svg'></img>
         </a>
        </div>

        <div className='nav13'>
            <a className='nav13a' href='/'>
            <img src='Img/firstlogo2.svg'></img>
            </a>
        </div>

        <div className='nav12'> 
        <a className='nav12a nav12aa'>
        <img src='Img/nav2.svg'></img>
        </a>
         <a href='property' className='nav11a'>LIST YOUR PROPERTY</a>
         <a href='' className='nav11a'>+91 5235 2523 53</a>
       </div>


    </div>
    </>
  )
}

export default Navbar2