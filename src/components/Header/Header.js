/** @format */

import React from "react";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";


const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
     <header className=" bg-secondary  border py-2">
      <nav className="navbar navbar-expand-lg navbar-light  mx-4">
          <div className="container-fluid">
            <CustomLink className="navbar-brand "  to='/logo'>
              <img src="https://tutor.foxthemes.me/wp-content/uploads/2017/08/Logo_4.png" className="img-fluid header-image" alt="" />
            </CustomLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/'}>
                  Home
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/checkout'}>
                  Checkout
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/aboutme'}>
                  About me
                </CustomLink>
                <CustomLink className="nav-link mx-3 p-1" to='/blog'>Blog</CustomLink>
                {user? <button className="border-0 bg-secondary mx-3 p-1 text-white" onClick={handleSignOut}>SignOut</button>:<CustomLink  className="nav-link mx-3 p-1" to='/login'>
                  Login
                </CustomLink>
              
               }
              </div>
            </div>
          </div>
        </nav>
      </header>
   

 
    </div>
  );
};

export default Header;
