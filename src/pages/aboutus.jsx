import React from 'react'
import Image from 'next/image';
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";
import AboutImg from "../assets/homepage-images/aboutimg.jpg";


const Aboutus = () => {
  return (
    <>
        <SinglePageHeader  title={"About Us"} pagebanner= {Allpagebanner}  />
        
        <div className='container py-4'>
            <div className='row'>
                <div className='col-12'>
                    <p>HKS global petroleum is blending Korean based oil with group 2 products at high tech plant. We are a registered company with the Securities and Exchange Commission of Pakistan (SECP). Our mission is to provide a wide range of high-quality, high-performance lubricants that meet the ever-changing and complex requirements of our customers. At HKS GLOBAL PETROLEUM, we are committed to operating under the core values of quality, reliability, innovation, and performance. These values drive everything we do, from product development to customer service. We believe in delivering lubricants that not only meet industry standards but also exceed our customers’ expectations.</p>
                </div>    
            </div>

            <div className="row py-md-4 py-3">
                
                <div className="col-md-6 aboutpg">
                    <h2 className='py-md-4 py-2'>About HKS Global</h2>
                    <div className="aboutpg-content">

                        <p> One of our key strengths lies in our ability to offer customized lubricant solutions to our customers. We understand that each business has unique needs, and we are dedicated to meeting those requirements with tailor-made products. Our team of experts works closely with our clients to develop lubricants that specifically address their specific needs, ensuring optimal performance and efficiency. </p>

                        <p> Our state-of-the-art manufacturing facility is equipped with the best machinery and technology in the industry. This enables us to produce lubricants with the highest standards of quality and performance. We continuously invest in research and development to stay at the forefront of technological advancements and deliver innovative lubricant solutions to our customers. </p>

                        <p> At HKS GLOBAL PETROLEUM, we pride ourselves on our commitment to customer satisfaction. We strive to build long-term relationships with our clients by providing exceptional products and outstanding service. Our dedicated team is always ready to assist our customers with technical expertise, prompt delivery, and comprehensive support. </p>

                        <p> We invite you to explore our range of lubricants and grease products, knowing that each one has been carefully formulated and tested to ensure superior performance.</p>

                    </div>
                </div>

                <div className='col-md-6 aboutpg-img'>
                    <Image src={AboutImg} />
                </div>

            </div>

            <div className='row'>
                <div className='col-12'>
                    <p>Partner with HKS GLOBAL PETROLEUM and experience the difference that our high-quality lubricants can make in optimizing the efficiency and longevity of your machinery. Thank you for choosing HKS GLOBAL PETROLEUM as your trusted partner in lubricants and grease solutions.</p>
                </div>    
            </div>

        </div>
    </>
  )
}

export default Aboutus;
