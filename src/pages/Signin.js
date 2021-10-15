import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="container">
      <div className="signin">
        <div className="signin__title">
          <h1>Sign in</h1>
        </div>
        <div className="signin__fields">
          <form>
            <input required type="email" placeholder="enter your email" />
            <input required type="password" placeholder="enter your email" />
            <button className="signin__button btn">Sign in</button>
          </form>
        </div>
        <div className="signin__actions">
          <Link to="/signup">Sign up</Link>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}
