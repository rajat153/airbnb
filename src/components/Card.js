import React from "react";
//import image from "../../public/static/image.png"
import image1 from "../images/Star.png";



export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.item.openSpots === 0?<div className="card--badge">SOLD OUT</div>:props.item.location==="Online"?<div className="card--badge">ONLINE</div>:""}
      <img src={`./imags/${props.item.coverImg}`} className="card-img" />
      <div className="card-info">
        <section>
          <img src={image1} width="15px" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount})</span>
          <span className="gray">{props.item.location}</span>
        </section>
        <p className="ca">{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}
