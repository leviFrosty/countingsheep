import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>You look lost.</h1>
      <p>Get some help. Please</p>
      <Link to="/">Save me!</Link>
    </div>
  );
}
