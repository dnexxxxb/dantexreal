import React from "react";
import { Button } from "react-bootstrap";
import img from "./assets/istock.jpg";
import img2 from "./assets/AM.jpeg";
import img3 from "./assets/Blog.webp";
const MyHomeImage = () => {
  return (
    <div>
      <div className="section-three">
        <div className="overlay">
          <div>
            <h2 className="thrive"> Where Entrepreneurs Thrive™</h2>
          </div>
          <div>
            <h3 className="enter">
              Join a team of doors, dreamers, and entrepreneurs
            </h3>
          </div>
          <Button className="ton">become a dantex realesate agent</Button>
        </div>
      </div>
      <div className="section-four">
        <div>
          <h1 className="line">Informed, empowered, successful.</h1>
          <p className="t">
            Discover the perfect home loan solution with dantex Home Loans.
          </p>
        </div>
        <div className="img-container">
          <img className="pic" src={img} alt="" />
        </div>
        <div className="img2-container">
          <img className="pik" src={img2} alt="" />
          <h5>
            Helping buyers stand out in competitive housing markets by providing
            faster loan approval and stronger purchase offer.
          </h5>
          <div>
            <Button>Read More</Button>
          </div>
          {/* <div className="overlay">
            <img className="pick" src={img3} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyHomeImage;
