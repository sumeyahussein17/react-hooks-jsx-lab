import React from "react";
import { image } from "../data/data";
import image from "../images/your-image.jpg";

function About() {
  return(
    <div id="About">
      <h2>About Me</h2>
      <p>full struck software engineering</p>
      <img src={image}alt="I made this" />
      
    </div>
  ) 
}

export default About;
