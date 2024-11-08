import React, { useState } from 'react'
import '../Styles/Frontpage1.css'
import Navbar1 from './Navbar1'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

const Frontpage1 = () => {
   const [count, setcount] = useState(0);
   const [count1, setcount1] = useState(0);
   const increment =()=>{
      setcount(count+1)
      if(count >= 3){
        alert("Only 5 Members allowed")
      }
      }
      
      const decrement =()=>{
      setcount(count-1)
      if(count === 0){
         setcount(0)
         alert("Select alteast one")
       }
      }
   const increment1 =()=>{
      setcount1(count1+1)
      if(count1 >= 3){
        alert("Only 5 Members allowed")
      }
      }
      
      const decrement1 =()=>{
      setcount1(count1-1)
      if(count1 === 0){
         setcount1(0)
         alert("Select alteast one")
       }
      }
   return (
      <>
         <div className='fr1'>
            <div className='fr2'>

               <Navbar1 />

               <div className='fr3'>
                  <div className='fr4'>
                     <div className='fr4a'>Tellus netus odio vitae <br></br> viverra phasellus tincidunt.</div>
                     <a className='fr4c' href='/site'><button className='fr4b'>SEE OUR STAYS</button></a>

                  </div>

                  <div className='fr5'>

                     <div className='ufygu'>
                        <p className='iuyrtf87iyug'>In lacus at lectus non neque pellentesque.</p>
                        <select>
                        <option>SUNSET COTTAGE</option>
      <option>SUNSET VALLEY VILLA</option>
      <option>RIVERSIDE</option>
      <option>NETHRA </option>
      <option>TINYHOUSE </option>
                        </select>
                        <div className='uytfdu6ty'>
                        <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <input type='text' placeholder='CHECK IN ' />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                        <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <input type='text' placeholder='CHECK OUT ' />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                           {/* <input type='text' placeholder='CHECK IN ' />
                           <input type='text' placeholder='CHECK OUT' /> */}
                        </div>
                        <hr />
                        <div className='uy6trf7856'>
                           <p id='uy6trf7856'>ADULTS</p>
                           <div className='iuy7tf7i'>
                              <div onClick={decrement} className='uytrf657fg'>-</div>
                              <div>{count}</div>
                              <div onClick={increment} className='uytrf657fg'>+</div>
                           </div>

                        </div>
                        <div className='uy6trf7856'>
                           <p id='uy6trf7856'>CHILDERN (0-11)</p>
                           <div className='iuy7tf7i'>
                              <div onClick={decrement1} className='uytrf657fg'>-</div>
                              <div>{count1}</div>
                              <div onClick={increment1} className='uytrf657fg'>+</div>
                           </div>

                        </div>

                      <a href='site' className='ytrfg7yu'>  <div className='uytedr756fg'><span className='uytrfd6u7tyf'></span>SEARCH</div>
                      </a>
                     </div>




                  </div>

               </div>
            </div>
            <Footer1 />

         </div>



         {/* /mob view */}

         <div className='mf1'>

            <div className='mf2'>

               <div className='mf21'>
                  <div className='mf22'><Navbar1 /></div>
                  <div className='mf23'>Tellus netus odio vitae <br></br> viverra phasellus tincidunt.</div>
               </div>

            </div>

            <div className='mf3'>
       
            <div className='fr5'>

<div className='ufygu'>
   <p className='iuyrtf87iyug'>In lacus at lectus non neque pellentesque.</p>
   <select>
      <option>ALL stays
         
      </option>
      <option>SUNSET COTTAGE</option>
      <option>SUNSET VALLEY VILLA</option>
      <option>RIVERSIDE</option>
      <option>NETHRA </option>
      <option>TINYHOUSE </option>
   </select>
   <div className='uytfdu6ty'>
  
   <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <input type='text' placeholder='CHECK IN ' />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                        <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <input type='text' placeholder='CHECK OUT ' />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
   </div>
   <hr />
   <div className='uy6trf7856'>
      <p id='uy6trf7856'>ADULTS</p>
      <div className='iuy7tf7i'>
         <div onClick={decrement} className='uytrf657fg'>-</div>
         <div>{count}</div>
         <div onClick={increment} className='uytrf657fg'>+</div>
      </div>

   </div>
   <div className='uy6trf7856'>
      <p id='uy6trf7856'>CHILDERN (0-11)</p>
      <div className='iuy7tf7i'>
         <div onClick={decrement1} className='uytrf657fg'>-</div>
         <div>{count1}</div>
         <div onClick={increment1} className='uytrf657fg'>+</div>
      </div>

   </div>

 <a href='site' className='ytrfg7yu'>  <div className='uytedr756fg'><span className='uytrfd6u7tyf'></span>SEARCH</div>
 </a>
</div>




</div>

            </div>

            <div className='mf4'>
               <Footer2 />
            </div>

         </div>


      </>
   )
}

export default Frontpage1
