import React, { useRef } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

const Auth = () => {
  
  const auth = useAuth();
  let navigate = useNavigate();

  let emailRef = useRef();
  let passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.authenticate(emailRef.current.value, passwordRef.current.value);
      navigate("/u/layout", { replace: true });
    } catch (error) {
      console.log("error ");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
