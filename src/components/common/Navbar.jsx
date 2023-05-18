import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-purple-950 text-yellow-300">
      <div className="navbar-start">
        <div className="flex items-center text-xl">
          <img className="h-24" src={logo} alt="" />
          <p>Toy Store</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/'}>Home </Link>
          </li>
          <li><Link to={'/all-toys'}>AllToys</Link></li>
          <li>
            <Link to={'/my-toys'}>My Toys</Link>
          </li>
          <li>
            <Link to={'/add-toy'}>AddToy</Link>
          </li>
          <li>
            <Link to={'/blogs'}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-white text-yellow-700">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
