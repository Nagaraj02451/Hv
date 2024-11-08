import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isopen, toggle }) => {
    let opacityClasses = ["sidebar-container"];
    if (isopen) {
      opacityClasses.push("opacity-on");
    } else {
      opacityClasses.push("opacity-off");
    }
  return (
    <>
         <div id='bar1' className={opacityClasses.join(" ")}
      isopen={isopen.toString()}>

          <div className='bar2'>
             <a onClick={toggle} className='bar3'><img src='Img/close2.svg'></img></a>
             <a href='/destination3' className='bar4' id='bar5'>OUR STAYS</a>
     <hr className='bar9'></hr>
             <a href='/profile1' className='bar5' id='bar5'>CONTACT US</a>
     <hr className='bar9'></hr>

              <a href='/destination2' className='bar6'  id='bar5'>LIST YOUR PROPERTY</a>
     <hr className='bar9'></hr>

          
          </div>

      </div>
    </>
)
}

export default Sidebar