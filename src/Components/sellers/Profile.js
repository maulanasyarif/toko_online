import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="columns mt-3">
          <div className="column">
            <div className="box">
              <div className="columns">
                <div className="column">
                  <div className="column">
                    <label className="label has-text-left">Store Name </label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-primary"
                          name="storeName"
                          type="storeName"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label has-text-left">Email </label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-danger"
                          name="email"
                          type="email"
                          required
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label has-text-left">Phone Number </label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-primary"
                          name="phone"
                          type="phone"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="column">
                    <label className="label has-text-left">Province </label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-primary"
                          name="province"
                          type="province"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label has-text-left">City </label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-primary"
                          name="city"
                          type="city"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label has-text-left">Address</label>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-primary"
                          name="address"
                          type="address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="button is-info">Back</button>
                <button className="button is-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
