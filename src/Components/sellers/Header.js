import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../assets/profile.png";
import Notify from "../../assets/notification-bell.png";
import Message from "../../assets/notification.png";
import Menu from "../../assets/menu.png";
import axios from "axios";

function Header() {

  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const Logout = async (e) => {
    e.preventDefault();
      await axios.post('http://localhost:8000/api/user/logout').then(res => {
        if(res.data.code === 1){
          navigate('/login');
          setMsg(res.data.message);
        }
      });
  }

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/seller/index">
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
              <a className="navbar-link">
                <img src={Menu} />
              </a>

              <div className="navbar-dropdown">
                <a href="/seller/index" className="navbar-item">
                  Dashboard
                </a>
                <a className="navbar-item">Product</a>
                <a className="navbar-item">Chart</a>
                <a className="navbar-item">Ordered</a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <img src={Notify} />
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <img src={Message} />
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Mark send you a message
                    </p>
                    <p class="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <a className="navbar-item">
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Robson send you a message
                    </p>
                    <p class="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <a className="navbar-item">
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Nial send you a message
                    </p>
                    <p class="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <a className="navbar-item">
                  <h1 className=" is-size-5">4 new message</h1>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            <p className="has-text-centered is-size-4">{msg}</p>
              <input
                className="input is-success"
                type="text"
                placeholder="Search...."
              />
              <button className="button is-success">
                <strong>Search</strong>
              </button>
            </div>
            <div className="navbar-item">
              <figure class="image">
                <img className="is-rounded" src={Profile} />
              </figure>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Name</a>

              <div className="navbar-dropdown">
                <a href="/seller/profile" className="navbar-item">
                  Profile
                </a>
                <form onSubmit={Logout}>
                  <button type="submit" className="button is-danger">Logout</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
