import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <h1 className="text-5xl font-black">Search</h1>
      <p className="my-6">
        Search is a technical test for Simetrik developed by Emiliano Pacheco :)
      </p>
      <Link to="/home">
        <button>Start</button>
      </Link>
      <br />
      <Link to="/about">
        <button className="no-fill">About Project</button>
      </Link>
    </>
  );
};
