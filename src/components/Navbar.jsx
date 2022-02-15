import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav navbar fixed-top mb-5">
      <div className="container navStyle">
        <a className="navbar-brand" href="/home">
          <img
            src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875692.png?token=exp=1644629701~hmac=799a2960981254d0b7adda8b81a77eae"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Infra Analytics
        </a>
      </div>
    </div>
  );
};

export default Navbar;
