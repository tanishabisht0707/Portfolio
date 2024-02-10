import React from "react";
import website from "../../../Image/website.png";
import foodWeb from "../../../Image/foodWeb.png";
import petWeb from "../../../Image/petWeb.png";
import coffee from "../../../Image/coffee.png";
import shoes from "../../../Image/shoes.png";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects relative">
      <div  id="carouselExampleCaptions" className="carousel slide w-4/6 rounded-xl "  data-bs-ride="carousel"
      >
   
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={website} className="d-block w-100 " />
            <NavLink to="https://shestore.netlify.app" target="blank"  className="Demo">Live Demo</NavLink>
            <span>sheStore a women fashion wear website where girls and women can buy there trendy and fashionable western and traditional dresses. This website has all functionality. Languages : React JS  , Redux  and CSS.</span>
          </div>
          <div className="carousel-item">
            <img src={foodWeb} className="d-block w-100"  />
            <NavLink to="https://recepesite.netlify.app" target="blank"  className="Demo">Live Demo</NavLink>
            <span>RecepeSite a Recepe finding website where anyone can find Recepe of different countries. This website has all basic functionality. Languages : React JS  , Redux  and CSS.</span>
          </div>
          <div className="carousel-item">
            <img src={shoes} className="d-block w-100"  />
            <NavLink to="https://sneakerswear.netlify.app" target="blank"  className="Demo">Live Demo</NavLink>
            <span>Sneaks is a Sneakers website where anyone can buy all trendy sneakers.This was my first website i made when i was just a begginer and very new to fronted devlepment. I made it with my all potential  i had that time. Languages : HTMLL, CSS nad Javascript.</span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
