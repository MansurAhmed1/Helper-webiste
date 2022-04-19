/** @format */

import React from "react";
import Banner from "../Banner/Banner";
import serviceData from "../Hook/serviceData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const [data] = serviceData();

  return (
    <div>
      <Banner></Banner>
      <div id="service-section">
        <div className=" ">
          <h3 className="fw-bold py-5 ">My Service</h3>
          <div
            className=" row row-cols-1 row-cols-md-3 gx-lg-5 gy-5 gx-4 mx-auto  "
            style={{ width: "90%" }}
          >
            {data.map((obj, index) => (
              <ServiceCard key={index} obj={obj}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
