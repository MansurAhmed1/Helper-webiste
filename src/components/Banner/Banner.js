/** @format */

import React from "react";
import image from "../../image/teacher-image.png";
import image2 from "../../image/teacher-imag2.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active first-item ">
            <div className="row">
              <div className="col-lg-7 ">
                <h1 className="fw-bold tutuor text-info  ps-lg-5">
                  {" "}
                  Professional Tutor
                  <span className="text-black"> for Your Children</span>
                </h1>
                <p className="details ps-lg-5">
                I am a  a tutor  in Dhaka city. I am providing quality home tutor sine 2014. To finding the perfect and best tutor in all over in Dhaka city you should must contact with to me
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt=""
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
            </div>
          </div>
          <div class="carousel-item  first-item ">
            <div className="row">
              <div className="col-lg-7 ">
                <h1 className="fw-bold tutuor  text-info  ps-lg-5">
                  {" "}
                  Professional Tutor
                  <span className="text-black"> for Your Children</span>
                </h1>
                <p className="details ps-lg-5">
                I am a  a tutor  in Dhaka city. I am providing quality home tutor sine 2014. To finding the perfect and best tutor in all over in Dhaka city you should must contact with to me
              
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center align-items-center">
                <img
                  src={image2}
                  className='pe-5 pb-5'
                  alt=""
                  style={{ width: "800px", height: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
