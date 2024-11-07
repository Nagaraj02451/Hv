import React, { useState } from 'react'
import Navbar1 from './Navbar1'
import '../Styles/Property.css'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import axios from 'axios'
import { toast } from "react-toastify";


const Property = () => {
   const [name, setname] = useState("");
   const [email, setEmail] = useState("");
   const [surname, setsurname] = useState("");
   const [phone, setphone] = useState("");
   const [property, setproperty] = useState("");
   const [typeofproperty, settypeofproperty] = useState("");
   const [websitelink, setwebsitelink] = useState("");

   const conttactinfo = async () => {
      //  alert("df")
       try {
           if (email) {
               const result = await axios.post("/api/v1/listproperty", {
                   name : name,
                   surname : surname,
                   phone : phone,
                   email: email,
                   property : property,
                   typeofproperty : typeofproperty,
                   websitelink : websitelink
               });
               alert("Your details has been received successfully")

               toast.success(
                   `Hello ${email} your property details has been received successfully. Our team will contact you soon!!!`,
                   {
                       position: "bottom-top",
                   }
               );
           } else {
            toast.error(
               "Please fill in all required fields!",
               {
                   position: "bottom-center",
               }
           );
           }
       } catch (error) {
         if (error.response && error.response.status === 404) {
             toast.error(
                 "The server endpoint was not found. Please contact the administrator.",
                 {
                     position: "bottom-center",
                 }
             );
         } else {
             toast.error(
                 `An error occurred: ${error.message}`,
                 {
                     position: "bottom-center",
                 }
             );
         }
         console.error("Error submitting property details:", error);
     }
   };
  return (
    <>
    <div className='pro1'>
        <div className='pro2'>  
            <Navbar1/>

              <div className='pro3'>
                   <div className='pro31'>
                         <div className='pro32'>Faucibus vitae molestie ac <br></br>turpis pellentesque. Viverra.</div>
                         <div className='pro33'>
                         <div className='pro34' ><input value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'></input></div>
                         <div className='pro34' ><input value={surname} onChange={(e) => setsurname(e.target.value)} placeholder='Surname'></input></div>
                         <div className='pro34' ><input value={phone} onChange={(e) => setphone(e.target.value)}  placeholder='Phone'></input></div>
                         <div className='pro34' ><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input></div>
                         <div className='pro34' ><input value={property} onChange={(e) => setproperty(e.target.value)} placeholder='Select Your property location'></input></div>
                         <div className='pro34' ><input value={typeofproperty} onChange={(e) => settypeofproperty(e.target.value)}  placeholder='What type of property is it?'></input></div>
                         <div className='pro34' ><input value={websitelink} onChange={(e) => setwebsitelink(e.target.value)} placeholder='Photo/Website link (if any)'></input></div>


                         </div>
                         <div onClick={conttactinfo} className='cnt41e'><button>Send now</button></div>

                   </div>

                   <div className='pro35'>
                   <div className='pro36'><img src='Img/last1.svg'></img></div>

                   </div>

              </div>

              <div className='pro4'>
                  <div className='pro41'>Tellus tellus malesuada</div>
                  <div  className='pro42'>

                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>
                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>
                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>
                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>
                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>
                      <div className='pro43'>
                         <div className='pro44'><img src='Img/last2.svg'></img></div>   
                         <div className='pro45'>Nibh arcu erat pellentesque feugiat cursus<br></br> pretium nam tellus molestie. At feugiat tortor<br></br> mauris convallis. Mus in placerat eu aliquet<br></br> neque purus amet. </div>                     
                         <div className='pro45a'>Nibh arcu erat pellentesque feugiat <br></br> cursus pretium nam tellus molestie.<br></br> At feugiat tortor mauris convallis.<br></br> Mus in placerat eu aliquet  neque <br></br>purus amet. </div>                     

                      </div>


                  </div>
              </div>

             
             <div className='pro5'>
                <div className='pro51'>FAQ</div>

               <div className='pro52'>

                  <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                  <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"></img></div>
                  </div>
                     <div class="collapse pro55" id="collapseExample1" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
                     </div>

                     <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                     <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="true" aria-controls="collapseExample"></img></div>
                     </div>
                     <div class="collapse pro55" id="collapseExample2" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
                     </div>

                     <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                     <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="true" aria-controls="collapseExample"></img></div>
                     </div>
                     <div class="collapse pro55" id="collapseExample3" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
                     </div>

                     <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                     <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="true" aria-controls="collapseExample"></img></div>
                     </div>
                     <div class="collapse pro55" id="collapseExample4" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
                     </div>

                     <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                     <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="true" aria-controls="collapseExample"></img></div>
                     </div>
                     <div class="collapse pro55" id="collapseExample5" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
                     </div>

                     <div className='pro53'>
                     <div className='pro54'>Cras nullam blandit duis tellus odio. In phasellus lacus euismod non mauris facilisis.</div>
                     <div className='pro54a'><img src='Img/last3.svg' class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="true" aria-controls="collapseExample"></img></div>
                     </div>
                     <div class="collapse pro55" id="collapseExample6" >
                     <div class="card-body pro56" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).
                     </div>
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

export default Property