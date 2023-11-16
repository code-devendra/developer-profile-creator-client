import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full text-center ">
      <h1 className="pt-28 uppercase text-3xl mb-8">404 - Page Not Found</h1>
      <Link
        to={"/"}
        className=" bg-blue px-7 py-3 text-white rounded-full font-semibold hover:bg-light-dark transition-all ease-in-out"
      >
        Go To Home Page
      </Link>
    </div>
  );
};

export default NotFound;
