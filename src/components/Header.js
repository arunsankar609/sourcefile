import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row bg-slate-300 justify-around text-center ">
        <ul className="flex flex-row p-2 ">
          <Link to="/">
            {" "}
            <li className="mx-3">Home</li>
          </Link>
          <Link to="about">
            <li className="mx-3">About</li>
          </Link>
          <Link to="post">
            {" "}
            <li className="mx-3">Post</li>
          </Link>
          <Link to="contact">
            {" "}
            <li className="mx-3">Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
