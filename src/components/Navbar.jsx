import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = ({ setToken }) => {
  const state = useSelector((state) => state.handleCart);

  const logOuthandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className="container justify-content-center">
          <NavLink
            className="navbar-brand fw-bold fs-4 bg-dark p-2 text-white"
            to="/products"
          >
            FakeStore
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark mr-2">
            <i className="fa fa-cart-shopping mr-1"></i>({state.length})
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse h-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button
                className="btn btn-outline-dark"
                onClick={() => logOuthandler()}
              >
                <i className="fa fa-sign-in me-1"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
