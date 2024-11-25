import React from 'react';
import Image from 'next/image';
import Allpagebanner from "../assets/homepage-images/allpagebanner.jpg";
import SinglePageHeader from "@/Components/singlepageheader/SinglePageHeader";

const ambassadorsData = [
  {
    name: "Ali Zaryon",
    image: require("../assets/homepage-images/alizaryon.jpg"),
  },
  {
    name: "Imran Ashraf",
    image: require("../assets/homepage-images/imranashraf.jpg"),
  },
  {
    name: "Inaya Khan",
    image: require("../assets/homepage-images/inaya.jpg"),
  },
  {
    name: "Javed Iqbal",
    image: require("../assets/homepage-images/javediqbal.jpg"),
  },
];

const Ambassadors = () => {
  return (
    <>
      <SinglePageHeader title={"Brand Ambassadors"} pagebanner={Allpagebanner} />

      <div className="container py-5">
        <div className="row">
          {ambassadorsData.map((ambassador, index) => (
            <div key={index} className="col-lg-3">
              <div className="branding-img text-center">
                <Image src={ambassador.image} alt={ambassador.name} />
                <h3>{ambassador.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ambassadors;
