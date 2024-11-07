import React from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'


const Ourstays = () => {
  return (
    <>
      <div className='os1'>
            <div className='osa'>


                 <div className='osb'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/third6.svg'></img>
                       </div>
                     <div className='os33'>Nibh arcu erat pellentesque feugiat cursus pretium nam tellus<br></br> molestie. At feugiat tortor mauris convallis. Mus in placerat eu aliquet <br></br>neque purus amet. </div>
                     <div className='os33a'>Nibh arcu erat pellentesque feugiat<br></br> cursus pretium nam tellus molestie. At<br></br> feugiat tortor mauris convallis. Mus <br></br>in placerat eu aliquet neque purus<br></br> amet. </div>

                     <a href='bprocess'><div className='os34'>
                        <button>BOOK NOW</button>
                     </div></a>
                     </div>

             </div>
                 </div>

                 
            </div>
  

             <div className='os4'>

                   <div className='os41'>
                     <div className='os42'>AMENITIES</div>

                      <div className='os43'>
                         <div className='os44'>
                           <div className='os45'> 100m2</div>
                           <div className='os45'> 3 Guests</div>
                           <div className='os45'> Shower</div>
                           <div className='os45'> Wake-up service</div>
                           <div className='os45'> Common Fireplace</div>
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> Mountain View</div>
                           <div className='os45'> Bedroom with king size bed</div>
                           <div className='os45'> Patio</div>
                           <div className='os45'> Wi-Fi / internet access / Television</div>
                           <div className='os45'> Breakfast / Dinner (On Request and Fixed Menu)</div>
                         </div>
                      </div>
                   </div>

             </div>

             <div className='os5'>
                <div className='os51'>
                  <div className='os42'>GALLERY</div>
                  <div className='os53'><img src='Img/third3.svg'></img></div>
                </div>
             </div>

                 
            <div className='os6'>
               <div className='os61'>
                  <div className='os42'>TYPES OF ROOM</div>
                  <div className='os63'>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third4.svg'></img></div>
                        <div className='os66'>TYPE 1</div>
                        <div className='os67'>Coorg | 2 Rooms | ₹1500-2300</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third4.svg'></img></div>
                        <div className='os66'>TYPE 2</div>
                        <div className='os67'>Coorg | 3 Rooms | ₹1500-2300</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third4.svg'></img></div>
                        <div className='os66'>TYPE 3</div>
                        <div className='os67'>Coorg | 3 Rooms | ₹1500-2300</div>
                     </div>
                  </div>
               </div>
            </div>  
   <div className='ourfoot'>

   <Footer2/>

   </div>
      </div>
    </>
  )
}

export default Ourstays