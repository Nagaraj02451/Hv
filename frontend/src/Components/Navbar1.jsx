import React, {useState} from 'react'
import '../Styles/Navbar1.css'
import Sidebar from './Sidebar';

const Navbar1 = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>

<Sidebar isopen={isopen} toggle={toggle} />


    <div className='nav1'>
        <div className='nav2'>
         <a href='site' className='nav1a'>OUR STAYS</a>
         <a href='contact' className='nav1a'>CONTACT US</a>
         <a className='nav2a' href='/sidebar'  onClick={toggle}>
            <img src='Img/nav1.svg'></img>
         </a>
        </div>

        <div className='nav3'>
            <a className='nav3a' href='/'>
            <img src='Img/firstlogo1.svg'></img>
            </a>
        </div>

        <div className='nav2'> 
        <a className='nav2a nav12aa' href='/sidebar'  onClick={toggle}>
        <img src='Img/nav1.svg'></img>
        </a>
         <a href='property' className='nav1a'>LIST YOUR PROPERTY</a>
         <a href='' className='nav1a'>+91 5235 2523 53</a>
       </div>


    </div>
    </>
  )
}

export default Navbar1