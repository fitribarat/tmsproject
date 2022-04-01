import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import signup from "./images/signup.svg";
import { Link } from "react-router-dom";

const Login = () => {

  return (
  
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" >
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
              type="text" 
              placeholder="Masukkan NIP" 
              required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              type="password" 
              placeholder="Masukkan Password" 
              required
              />
            </div>
            {/* <ErrorMessage message={errorMessage} /> */}
            <Link to="/">
              <input type="submit" value="Login" className="btn solid" />
            </Link>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>Task Management System</h1>
            <hr></hr>
            <p>Silahkan login menggunakan akun warga.</p>
          </div>
          <img src={signup} className="image" alt="" />
        </div>
      </div>

      <script
        src="https://kit.fontawesome.com/64d58efce2.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Login;
