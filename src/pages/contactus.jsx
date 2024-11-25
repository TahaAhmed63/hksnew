import React from 'react'
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";
import Emailimg from '../assets/homepage-images/email.png'
import Location from '../assets/homepage-images/location.png'
import Image from 'next/image';

const ContactUs = () => {
  return (
    <>
      <SinglePageHeader title={"Contact Us"} pagebanner={Allpagebanner} />

      <div className="container">
        <div className="row py-5">
            <div className="col-md-6 text-center">
                    <div className="email-col">
                        <Image  src={Emailimg}/>

                        <p><a href="info@hksglobal-petroleum.com">info@hksglobal-petroleum.com</a></p>
                        
                        <Image src={Location}/>

                        <p> Office # 504, 5th Floor Alfalah Tower, <br /> Main Jinnah Avenue Commercial Bahria Town – Karachi Pakistan</p>
                    
                    </div>
            </div>

           
            <div className="col-md-6">
                <div className="contactform-pg">
                <form action="">
                    <div className="row">

                        <div className="col-md-6 mb-2">
                            <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="First Name"
                            />
                        </div>

                        <div className="col-md-6 mb-2">
                            <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Last Name"
                            />
                        </div>

                         <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="Email"
                                name="Email"
                                required
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="col-md-6 mb-2">
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                required
                                placeholder="Phone Number"
                                pattern="^[+]?[0-9]{1,4}[-\s]?[0-9]{1,15}$"
                                title="Enter a valid phone number"
                            />
                        </div>

                        <div className="col-12 mb-2">
                        <input name="input_6" id="input_1_6" type="text" value="" class="large" placeholder="Subject" aria-invalid="false" />
                        </div>

                        <div className="col-12 mb-2">

                        <textarea name="input_5" id="input_1_5" class="textarea small" placeholder="Message" aria-invalid="false" rows="10" cols="20"></textarea>
                        </div>

                        <div className="col-12 contact-submit-btn">
                                <input type="submit" value="Submit"/>
                        </div>




                    </div>

                    {/* You can add more fields as needed */}
                </form>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default ContactUs;
