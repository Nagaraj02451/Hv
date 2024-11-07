import React, { useState } from 'react'
import '../Styles/Contact.css'
import Navbar1 from './Navbar1'
import axios from "axios"
import Footer2 from './Footer2'
import { toast } from "react-toastify";


const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setsurname] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");

    const conttactinfo = async () => {
        // alert("df")
        try {
            if (email) {
                const result = await axios.post("/api/v1/contact", {
                    name : name,
                    surname : surname,
                    phone : phone,
                    email: email,
                    message : message
                });
                alert("Your details has been received successfully")
                toast.success(
                    `Hello ${email} your details has been received successfully. Our team will contact you soon!!!`,
                    {
                        position: "bottom-top",
                    }
                );
            } else {
                toast.success(
                    `Please fill !`,
                    {
                        position: "bottom-top",
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div className='cnt1'>
                <div className='cnt2'>
                    <Navbar1 />

                    <div className='cnt3'>
                        <div className='cnt31' >Semper vitae sit pretium nisl</div>
                        <div className='cnt32'>CONTACT US</div>

                        <div className='cnt33'>
                            <div className='cnt34'>


                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>


                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>



                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='cnt34a'>


                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>



                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>



                                <div className='cnt35'>
                                    <div className='cnt35aa'>

                                        <div className='cnt35a'><img src='Img/con1.svg'></img></div>
                                        <div className='cnt35b'>
                                            <div className='cnt35c'>Call</div>
                                            <a className='cnt35d'>+91 2125 2151 51</a>
                                        </div>
                                        <div className='cnt35e'>
                                            <div className='cnt35c'>Email </div>
                                            <a className='cnt35d'>tinyhouse@hiddenvalleystays.com</a>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>



                        <div className='cnt4'>
                            <div className='cnt41'>
                                <div className='cnt41a'>Keep in touch!</div>
                                <div className='cnt41b'>Lorem ipsum dolor sit amet consectetur. Sagittis fermentum <br></br> porttitor turpis magna convallis. Platea maecenas.</div>
                                <div className='cnt41bb'>Lorem ipsum dolor sit amet consectetur.<br></br> Sagittis fermentum porttitor turpis magna <br></br>convallis. Platea maecenas.</div>

                                <div className='cnt41c' >
                                    <div className='cnt41d' ><input type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'></input></div>
                                    <div className='cnt41d'><input type='text' value={surname} onChange={(e) => setsurname(e.target.value)} placeholder='Surname'></input></div>
                                    <div className='cnt41d'><input  type='text' value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Phone'></input></div>
                                    <div className='cnt41d'><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input></div>
                                    <div className='cnt41d'><textarea value={message} onChange={(e) => setmessage(e.target.value)} type='text' placeholder='Message' rows="8" cols=""></textarea></div>


                                </div>
                                <div className='cnt41e' onClick={conttactinfo}><button>Send now</button></div>
                            </div>
                            <div className='cnt42'>
                                <div className='cnt42a'>Follow us on</div>
                                <div className='cnt42b'><img src='Img/insta1.svg'></img></div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='ourfoot'>

                    <Footer2 />

                </div>
            </div>
        </>
    )
}

export default Contact