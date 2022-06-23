import React from "react";
import image from "../images/Group.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={image} alt="group image" className="hero--img" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
