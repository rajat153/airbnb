import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
//import image from "./images/image.png"
import Data from './data'

export default function App() {
  let dd = Data.map((item)=>{
    return (<Card
     key={item.id} //anytime when using map we need key
        
      item={item} //here it pass entire object inside a item
    // {...item} use this spread object method also and remove .item from App.js file
    //  img = {item.coverImg}
    //  title = {item.title}
    //  price= {item.price}
    //  reviewCount={item.stats.reviewCount}
    //  rating={item.stats.rating}
    //  country={item.location}
    //  openSpots={item.openSpots}
     />
    )

  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list"> 
      {dd}
      </section>
     
      {/* <Card
        img={image}
        rating="5"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Kkatie Zaferes"
        price={136}
      /> */}
    </>
  );
}
