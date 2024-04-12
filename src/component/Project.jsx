import React from "react";


import "../component/project.css";
import Header from "./Header";
import ProjectBanner from "./images/projectPhoto.jpg"
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <Header />
      {/* <!-- container Start --> */}
      <div class="container text-light">
        {/* <!-- Arrow --> */}
        <Link to="">
          <i class="fa-solid fa-arrow-up d-none d-md-block" id="arrow"></i>
        </Link>

        {/* <!-- First row start --> */}
        <div class="row mt-5 justify-content-between" id="banner">
          {/* <!-- Left side content --> */}
          <div class="col-md-6 mt-5" id="leftSide">
            <h1 id="welcome">WELCOME TO MY PROJECTS</h1>
            <p id="para">
              "Explore a selection of my showcased projects that Sourcenstrate
              my proficiency in web development. From interactive games like
              Tic-Tac-Toe to practical tools like a digital calculator, each
              project showcases a blend of HTML, CSS, Bootstrap, and JavaScript.
              Dive into a variety of applications, including an e-commerce
              portfolio and a digital identity card, highlighting my skills in
              building dynamic and responsive web solutions. These projects not
              only reflect technical expertise but also a commitment to creating
              engaging and user-friendly web experiences."
            </p>

            <p id="socialIcons">
              <Link target="_blank" to="https://www.linkedin.com">
                <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link target="_blank" to="https://twitter.com">
                <i class="fa-brands fa-x-twitter"></i>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link target="_blank" to="https://www.google.com/">
                <i class="fa-brands fa-google"></i>
              </Link>
            </p>

            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1uzR93Ywthf095Q2ak_CLireswI5ystZj/view?usp=sharing"
              download=""
            >
              <input type="button" value="Download CV" id="btn" />
            </Link>
          </div>
          {/* <!-- Left side content end --> */}

          {/* <!-- Right side content start --> */}
          <div class="col-md-4" id="rightSide">
            <img src={ProjectBanner} alt="" id="image" />
          </div>
          {/* <!-- Right side content end --> */}
        </div>
        {/* <!-- First row end --> */}

        <div id="myProject">
          <h1>
            MY <span>PROJECTS</span>
          </h1>
          <p></p>
        </div>

        {/* <!-- Third Row Start --> */}

        <div class="row" id="thirdRow">
          <div class="col-md-3 tic_tac_toe" id="project">
            <h4>Tic Tac Toe Game</h4>
            <p>: Description :</p>
            <p id="description">
              - Created a fully functional Tic Tac Toe game using HTML, CSS, and
              JavaScript. <br />- Designed an interactive user interface with
              game logic to facilitate competitive gameplay between two players.
            </p>

            <Link
              target="_blank"
              to="https://github.com/RDeveloper123/Tic-Tac-Toe-Game.git"
            >
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
          <div class="col-md-3 E_Commerce" id="project">
            <h4>E-Commerce</h4>
            <p>: Description :</p>
            <p id="description">
              - Built E-Commerce Project using a combination of HTML, CSS, and
              JavaScript, this project showcases the integration of front-end
              technologies to create an interactive and visually appealing
              online shopping platform.
            </p>

            <Link
              target="_blank"
              to="https://github.com/RDeveloper123/E-Commerce.git"
            >
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
          <div class="col-md-3 portfolio" id="project">
            <h4>Portfolio</h4>
            <p>: Description :</p>
            <p id="description">
              - This project showcases my skills in web development through a
              carefully crafted combination of HTML, CSS, Bootstrap, and
              JavaScript. <br />- The portfolio is designed to provide an
              engaging and informative overview of my expertise, featuring a
              clean and responsive layout.
            </p>

            <Link target="_blank" to="#">
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
        </div>
        {/* <!-- Third Row End --> */}

        {/* <!-- Fourth Row Start --> */}
        <div class="row" id="fourthRow">
          <div class="col-md-3 calculator" id="project">
            <h4>Calculater</h4>
            <p>: Description :</p>
            <p id="description">
              - Developed a user-friendly calculator application utilizing HTML,
              CSS, and JavaScript.
              <br />- Implemented fundamental arithmetic operations including
              addition, subtraction, multiplication, and division with
              precision.
            </p>

            <Link
              target="_blank"
              to="https://github.com/RDeveloper123/Calculater.git"
            >
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
          <div class="col-md-3 identity_card" id="project">
            <h4>Digital Identity Card</h4>
            <p>: Description :</p>
            <p id="description">
              - Created an interactive identity card project by coding in HTML,
              CSS, and JavaScript. <br />- Structured the identity card using
              HTML, including a container and two sections for the profile
              picture and user's details
            </p>

            <Link
              target="_blank"
              to="https://github.com/RDeveloper123/Digital_Identity_Card.git"
            >
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
          <div class="col-md-3 Typing_Speed_Test" id="project">
            <h4>Typing_Speed_Test</h4>
            <p>: Description :</p>
            <p id="description">
              - "Experience a fun and interactive typing speed test! Utilizing
              HTML, CSS, and JavaScript, this project offers users an engaging
              platform to assess their typing skills.
              <br />- Measure your words per minute (WPM) and accuracy, all
              within a sleek and user-friendly interface.
            </p>

            <Link
              target="_blank"
              to="https://github.com/RDeveloper123/Typing_Speed_Test.git"
            >
              <input type="button" value="View Source" id="btnView" />
            </Link>
          </div>
        </div>
        {/* <!-- Fourth Row End --> */}
      </div>
      {/* <!-- container End --> */}
    </>
  );
}

export default Project;
