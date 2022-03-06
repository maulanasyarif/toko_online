import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {

  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassworrd] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/login",  {
        email: email,
        password: password,
      });
      navigate("/seller/index");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
        navigate('/login')
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="columns is-mobile is-centered">
          <div className="column is-4">
            <div className="box">
              <form onSubmit={Login}>
              <p className="has-text-centered is-size-4">{msg}</p>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassworrd(e.target.value)}
                      placeholder="**********"
                      required
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button className="button is-primary">Sign in</button>
                  <Link className="button is-link" to={`/register`}>
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
