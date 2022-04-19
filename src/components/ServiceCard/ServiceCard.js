import React from 'react';
import {Link} from 'react-router-dom';

const ServiceCard = (props) => {
    const{img,title,details,price}=props.obj
    return (
        <div className='col'>
            <div className="card  shadow py-4 m-0 p-0" style={{height:"500px"}} >
   <div className="">
   <img src={img} className=" img-fluid w-50" style={{height:"200px"}} alt="..."/>
    <h5 className="card-title pt-5 fw-bold">{title}</h5>
    <h5 className="card-title pt-2">Price:{price}</h5>
    <p className="card-text mx-3">{details}</p>
    <Link to='/checkout' className="btn  btn-secondary rounded py-2 mt-2 px-5">Service Checkout</Link>
  </div>
</div>

        </div>
    );
};

export default ServiceCard;