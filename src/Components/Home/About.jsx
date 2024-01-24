import React from "react";

function About() {
  return (
    <div id="About-page" className="home ">
     
        <p className="text-3xl  text-center ">
          About<span className="text-pink-300">Me</span>
        </p>
        <div className="text ">
          <p className=" text-gray-300">
            Iam <span className="text-pink-300 text-2xl">Tanisha Bisht</span> a  frontend 
            web developer from New Delhi, Dwarka.{" "}
          </p>
          <p className=" text-gray-300   ">
            Iam have good skills in{" "}
            <span className="text-yellow-500 text-2xl">
              {" "}
              Html , Css , JavaScript , ReactJs and Tailwind css
            </span>
            . I love maintainig and devloping responsive website that offer a
            good user exeperience. Currently iam pursuing BCA (Bechler in
            computer application) from Ignou. It tooks me total 8 months to
            skill frontend development, it was a very intresting journey because
            learning everyday something new was making it more enjoybal.{" "}
          </p>
          <p className=" text-gray-300">
            I makes lots of project but now i want to make something big with a
            team and utilize my skills. My projects says more about me don't
            forget to check them.
          </p>
        </div>
      </div>
   
  );
}

export default About;
