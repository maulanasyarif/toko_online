import React from "react";

function Footer() {
  return (
    <div>
      <div className="box">
        <footer className="column is-narrow">
          <div className="content has-text-centered">
            <p>
              <strong> &copy; </strong> {new Date().getFullYear()} Copyright
              To'ol.Ltd
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
