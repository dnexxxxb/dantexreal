import React from "react";
import Grid from "./grid";

const Header = () => {
  const myAlert = () => {
    alert("Allow location");
  };
  return (
    <div>
      <header>
        <div className="overlay">
          <div>
            {/* <img src={logo} alt="" /> */}
            <h2>"Your dream home awaits".</h2>
          </div>
          <div className="flx">
            <div>
              <h4>Buy,</h4>
            </div>
            <div>
              <h4>Sell,</h4>
            </div>
            <div>
              <h4>Rent,..</h4>
            </div>
          </div>
          <div className="hero">
            <div className="search-box">
              <input
                type="text"
                placeholder="City,Neighborhood,Address,Postal code,School district"
              />
              <button>search</button>
            </div>
          </div>
          <div className="location">
            <h3>
              Want to see great homes in your area? Share your current location.
            </h3>
            <button className="button" onClick={myAlert}>
              &#128205; Allow location sharing..
            </button>
          </div>
        </div>
      </header>
      <div>
        <h1 className="h1">Take it From Our Experts</h1>
        <p className="p">
          Explore our blog posts to learn from the best about buying <br />{" "}
          selling and maintaining your home
        </p>
      </div>
      
    </div>
  );
};

export default Header;
