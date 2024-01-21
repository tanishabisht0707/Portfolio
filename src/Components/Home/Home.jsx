import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <div id="Home" className="  ">
        <div className="intro   flex flex-row">
          <div className=" content ">
            <div className="greet pl-10 flex text-6xl text-gray-200 gap-3 ">
              <span>Namaste</span>
              <img
                className="w-10"
                src="https://img.icons8.com/?size=80&id=DerRsoIcLJLq&format=png"
                alt=""
              />
            </div>
            <div className="intoduce pl-10 mt-5  text-gray-200  ">
              <p className="text-3xl">
                Iam " Tanisha Bisht " a<br />{" "}
                <span className="text-yellow-500 text-3xl ">
                  front-end web developer{" "}
                </span>
              </p>
              <p className="text-x mt-3 text-gray-500">
                I Love what i do and iam good at it, It's <br /> never makes me
                feel tired because i enjoy my work{" "}
              </p>
            </div>
          </div>
          <div className="img ml-2  ">
            <img
              className="  w-52 -mt-4 "
              src="https://ouch-cdn2.icons8.com/SaRCoiyFcXxOXal5eNBrS4-X37zMjXSRdzG57ALz8R4/rs:fit:368:466/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjgy/L2ExZGYxMGE0LTFk/NjMtNDA0Mi04ZWNj/LWI3OWU4N2ViM2Iw/Zi5wbmc.png"
            />
          </div>
        </div>
      </div>
      <section className="About-page relative top-0  ">
        <About />
      </section>

      <Skills />

      <section id="Projects " className=" Project-page relative">
        <Projects />
      </section>
      <Contact />
    </>
  );
}

export default Home;
