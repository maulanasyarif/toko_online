import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//icon
import Electronic from "../assets/electric-appliance.png";
import Handphone from "../assets/handphone.png";
import Computer from "../assets/computer.png";
import sneaker from "../assets/sneakers.png";
import wardrobe from "../assets/wardrobe.png";
import automotive from "../assets/automotive.png";

function Index() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="columns mt-3">
          <div className="column">
            <div className="box">
              <h2 className="is-size-4 has-text-left">Category</h2>
              <div className="column is-three">
                <div className="columns">
                  <div className="column">
                    <img src={Electronic} />
                    <p>Electronic</p>
                  </div>
                  <div className="column">
                    <img src={Computer} />
                    <p>Computer</p>
                  </div>
                  <div className="column">
                    <img src={Handphone} />
                    <p>Handphone</p>
                  </div>
                  <div className="column">
                    <img src={wardrobe} />
                    <p>Fashion</p>
                  </div>
                  <div className="column">
                    <img src={sneaker} />
                    <p>Sneaker</p>
                  </div>
                  <div className="column">
                    <img src={automotive} />
                    <p>Automitive</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <h2 className="is-size-2">Tranding</h2>
              <div className="column is-one-quarter">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
                <div className="column">
                  <div className="buttons mt-2">
                    <button className="button is-primary">Cart</button>
                    <button className="button is-link">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
