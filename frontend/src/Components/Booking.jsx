import React from 'react'
import "../Styles/Booking.css"
import Navbar2 from './Navbar2'
import Navbar1 from './Navbar1'
import Footer2 from './Footer2'

const Booking = () => {
  return (
   <>
   <div className='book1'>
    <div className='book11'>
    <Navbar1/>

        <div className='book2'>  
            <div  className='book21'><img src='Img/book1.svg' ></img><div  className='book22'>Room Details</div></div>

            <div  className='book3'>
                <div  className='book4'>
                    <div  className='book41'>Guest Information</div>

                    <div  className='book42'>
                        <div  className='book43'><input placeholder='Name'></input></div>
                        <div  className='book44'>
                            <div  className='book43'><input placeholder='Email'></input></div>
                            <div  className='book44a'>This is the email we will send your confirmation to</div>
                        </div>
                        <div  className='book43'><input placeholder='Phone'></input></div>

                    </div>

                    <div className='book5'>
                        <div className='book51'>Polices :</div>
                        <div className='book52'>
                             <div className='book53'>
                              <div className='book54'>Check-In</div>
                              <div className='book55'>After 12:00 pm</div>
                             </div>
                             <div className='book53a'>
                              <div className='book54'>Check-out</div>
                              <div className='book55'>Before 12:00 pm</div>
                            </div>

                        </div>
                    </div>


                    <div className='book6'>
                         <div className='book61'>Cancel Policy</div>
                         <div className='book62'>If you require to  cancel or amend a reservation more than 7 days prior to arrival, the deposit will be refunded; less than 7 days prior to arrival or in case of No-Show, the full amount of the stay will be charged as cancellation fees. </div>
                    </div>

                    <div className='book6 book6a'>
                         <div className='book61'>Terms & Condition</div>
                         <div className='book62'>If you require to cancel or amend a reservation more than 7 days prior to arrival, the deposit will be refunded; less than 7 days prior to arrival or in case of No-Show, the full amount of the stay will be charged as cancellation fees. </div>
                    </div>




                </div>

                <div className='book7'>
                    <div className='book8'>
                    <div className='book81'>Your Stay</div>
                     <div className='book82'><div className='book83'>Date:</div><div className='book84'> Wed, Aug 9, 2023 - Thu, Aug 10, 2023</div></div>
                     <div className='book82'><div className='book83'>Guests: </div><div className='book84'>2 Adults</div></div>
                     <div className='book82'><div className='book83'>Stay:</div><div className='book84'> Tiny house</div></div>
                     <div className='book82'><div className='book83'>Selected Room:</div><div className='book84'>King Room with Forest View</div></div>
                     <div className='book82'><div className='book83'>Duration of the Stay: </div><div className='book84'> 1 Night</div></div>
                    
                     <div className='book85'>  
                        <div className='book86'><div className='book86a'><img src='Img/book2.svg'></img></div><div className='book86b'>Add a Room</div></div>
                        <hr className='bookhr1'></hr>
                        <div className='book87'><div className='book87a'>Room's Charge</div><div className='book87b'>6000</div></div>
                        <div className='book87 book871'><div className='book87a'>Taxes & GST</div><div className='book87b'>1200</div></div>
                        <hr className='bookhr1'></hr>
                        <div className='book88'><div className='book88a'>TOTAL</div><div className='book88b'>7200</div></div>
                    </div>
                


                    </div>

                         
               <a href='booking'>   <div className='book9'>
                        <button className='book91'>Book Now</button>
                   </div></a>  
                     
                </div>

            </div>

        </div>

    </div>
   </div>
  <Footer2 />
   </>
  )
}

export default Booking
