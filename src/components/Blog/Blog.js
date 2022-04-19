/** @format */

import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
    
      <h5 className="fw-bold text-start pt-4">
        {" "}
        1.Difference Between Authentication and Authorization:
      </h5>
      <p className="text-start">
        {" "}
        authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to. The situation is like that of an
        airline that needs to determine which people can come on board. The
        first step is to confirm the identity of a passenger to make sure they
        are who they say they are. Once a passenger’s identity has been
        determined, the second step is verifying any special services the
        passenger has access to, whether it’s flying first-class or visiting the
        VIP lounge. In the digital world, authentication and authorization
        accomplish these same goals. Authentication is used to verify that users
        really are who they represent themselves to be. Once this has been
        confirmed, authorization is then used to grant the user permission to
        access different levels of information and perform specific functions,
        depending on the rules established for different types of users.
      </p>
      <div className="main">
        <div className="fw-bold">Authentication</div>
        <div className="fw-bold">Authorization</div>
        <div>Authentication verifies who the user is.</div>
        <div>Authorization determines what resources a user can access.</div>
        <div>
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
        </div>
        <div>
          {" "}
          biometric information, and other information provided or entered by
          the user. Authorization works through settings that are implemented
          and maintained by the organization.
        </div>
        <div>
          Authentication is the first step of a good identity and access
          management process.
        </div>
        <div>Authorization always takes place after authentication.</div>
        <div>
          Authentication is visible to and partially changeable by the user.
        </div>
        <div>Authorization isn’t visible to or changeable by the user.</div>
        <div>
          Example: By verifying their identity, employees can gain access to an
          HR application that includes their personal pay information, vacation
          time, and 401K data.
        </div>
        <div>
          Example: Once their level of access is authorized, employees and HR
          managers can access different levels of data based on the permissions
          set by the organization.
        </div>
      
     
      </div>

      <h5 className="fw-bold text-start pt-4">
      2.What other services does firebase provide other than authentication:
      </h5>
      <p className='text-start fw-bold' style={{textDecoration:"underLine"}}>
      There are many services which provides Firebase without authentication  Most useful of them are:
      <br />
 
       <ul>
       
       
           <li>Cloud Firestore.</li>
           <li>Cloud Functions.</li>
           <li>Hosting.</li>
           <li>Cloud Storage.</li>
           <li>Google Analytics.</li>
           <li>Predictions.</li>
           <li>Cloud Messaging.</li>
       </ul>
      </p>

      <h5 className="fw-bold text-start pt-4">
      3.Why are you using firebase? What other options do you have to implement authentication?
      </h5>
      <p className=" text-start ">
          we use firabse because firebase authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
      </p>
      <p className="text-start fw-bold "style={{textDecoration:"underLine"}} >I implement authentication without firebase by these below options </p>
      <ul className="text-start">
          <li>Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...</li>
          <li>MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...</li>
          <li>Passport. ...</li>
          <li>Okta. ...</li>
          <li>Amazon Cognito. ...</li>
          <li>Keycloak. ...</li>
          <li>OAuth2.</li>
      </ul>
    </div>
  );
};

export default Blog;
