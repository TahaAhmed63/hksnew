
"use-client"

import Image from "next/image";
import Maskgroup from "../../assets/homepage-images/mask-group.png"

const BreifProfile = () => {
  return (
   
     
     <div className="container-fluid py-md-5 p-0">
        <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="mainbrief">
                            <h2>BRIEF PROFILE</h2>
                            <p>HKS GLOBAL PETROLEUM is a pioneer in lubricants and grease manufacturing company registered with SECP (Securities and Exchange Commission of Pakistan). We offer a wide range of high-quality, high-performance lubricants that address the ever-changing and complex requirements of customers.</p>
                            <button>
                                <a href="https://staging.hksglobalpetroleum.com/about-us/">Learn More</a>
                            </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="bimg">
                        <Image src={Maskgroup} alt="" />
                    </div>
                </div>
        </div>
     </div>

  )
}

export default BreifProfile