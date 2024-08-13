import React from "react";
import "./Section.css";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  return (
    <div className="wrap">
      <p className="para">Summer Collection</p>
      <h1 className="heading">Introducing New Arrivals</h1>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <button className="btn1" onClick={() => navigate("/products")}>
        VIEW COLLECTION
      </button>
    </div>
  );
};

export default Section;
