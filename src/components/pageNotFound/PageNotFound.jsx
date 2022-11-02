import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h2 className='error-text'>Page not found</h2>
      <p className='error-text'>
        We looked all over, but the page seems to have gotten away from us, Try
        This one
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
