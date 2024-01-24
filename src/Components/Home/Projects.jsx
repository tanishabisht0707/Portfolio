import React from "react";
import website from "../../../Image/website.png";
import foodWeb from "../../../Image/foodWeb.png";
import petWeb from "../../../Image/petWeb.png";
import coffee from "../../../Image/coffee.png";
import shoes from "../../../Image/shoes.png";
import { Carousel } from "@material-tailwind/react";

function Projects() {
  return (
    <div className="Projects">
      <div  id="carouselExampleCaptions" className="carousel slide w-4/6"  data-bs-ride="carousel"
      >
   
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={website} className="d-block w-100" />
            <button className=" bg-white">blick</button>
          </div>
          <div className="carousel-item">
            <img src={foodWeb} className="d-block w-100"  />
          </div>
          <div className="carousel-item">
            <img src={petWeb} className="d-block w-100"  />
          </div>
          <div className="carousel-item">
            <img src={shoes} className="d-block w-100"  />
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
