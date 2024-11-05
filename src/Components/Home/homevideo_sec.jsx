import Image from "next/image";
import React from "react";
import Videobgimage from "../../assets/homepage-images/videosec-img.png";
const HomeVideoSec = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-sec-content my-md-5">
                <h2>
                  We’re committed <br /> to help clients
                </h2>

                <p>
                  HKS GLOBAL PETROLEUM is blending Korean based oil with group 2
                  products at a high-tech plant, which is one of the reliable
                  and infallible toll blending plants in Pakistan. We are also
                  providing a facility of oil sample testing laboratory.
                </p>

                <div className="video-sec-btn">
                  <button>Our Vision</button>
                  <button>Our Mission</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 video-col">
              <div className="video-img">
                <Image src={Videobgimage} />
              </div>

              <div class="video-img-2">
                <iframe
                  width="270"
                  height="182"
                  src="https://www.youtube.com/embed/YDX0iKSKTKY"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vc_sep_line"></div>
    </>
  );
};

export default HomeVideoSec;
