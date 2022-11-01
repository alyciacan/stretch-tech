import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        We looked all over, but the page seems to have gotten away from us, Try
        This one
      </p>
      <Link to="/">
        <button>Home</button>{" "}
      </Link>
    </div>
  );
}
