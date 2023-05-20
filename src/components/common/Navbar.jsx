import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user);
  const handleLogout = () => {
    logOut().then(() => {}).catch((error) => { console.log(error.message) });
  }

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
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/all-toys"}>AllToys</Link>
          </li>
          <li>
            <Link to={"/my-toys"}>My Toys</Link>
          </li>
          <li>
            <Link to={"/add-toy"}>AddToy</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          {user && <li>{user?.email}</li>}
          {user && <li><img src={user?.photoURl} alt=""  /></li>}
          
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn bg-primary rounded-md">Logout</button>
        ) : (
          <Link to={"/login"} className="btn bg-white text-yellow-700">
            Login
          </Link>
        )}
      </div>
      {/* To do: Navbar will be show profile pic instead of login btn if user is logged in */}
    </div>
  );
};

export default Navbar;
