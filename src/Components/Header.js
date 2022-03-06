import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h2 className="is-size-2">To'ol</h2>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Category</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Electronic</a>
                <a className="navbar-item">Computer</a>
                <a className="navbar-item">Handphone</a>
                <a className="navbar-item">Fashion</a>
                <a className="navbar-item">Sneaker</a>
                <a className="navbar-item">Automitive</a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>

            <div className="navbar-item">
              <input
                className="input is-success"
                type="text"
                placeholder="Search"
              />
              <button className="button is-success">
                <strong>Search</strong>
              </button>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={`/register`} className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to={`/login`} className="button is-link">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
