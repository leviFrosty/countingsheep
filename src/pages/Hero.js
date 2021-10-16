import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__shadow">
          <div className="hero-left">
            <h1 className="hero__title">
              Calories?<span>count 'em!</span>
            </h1>
          </div>
          <div className="hero-right">
            <div className="hero-right__shadow">
              <p className="hero__description">
                Millions of people&mdash;from all around the world&mdash;enjoy
                countem as their go-to calorie counting app.
              </p>
              <Link to="/signin" className="hero__cta">
                Sign in
              </Link>
              <button className="hero__cta">count em!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
