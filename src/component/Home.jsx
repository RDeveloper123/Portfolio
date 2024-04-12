import React from "react";
import "../component/home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Photo from "./images/photo.png"
import About from "./images/about image.jpg"
function Home() {
  return (
    <>
      <Header />

      {/* <!-- Container Body Start--> */}
      <div className="container text-light">
        {/* <!-- Arrow --> */}
        <a href="">
          <i className="fa-solid fa-arrow-up d-none d-md-block" id="arrow"></i>
        </a>

        {/* <!-- First row start --> */}
        <div className="row mt-5 justify-content-between" id="banner">
          {/* <!-- Left side content --> */}
          <div className="col-md-5 mt-5" id="leftSide">
            <p id="welcome">WELCOME!</p>
            <h1>I Am Frontend Developer</h1>
            <p id="para">
              "Hello, I'm a front-end developer with a strong foundation in
              HTML, CSS, Bootstrap, Javascipt and ReactJs. I have creating
              responsive and user-friendly websites."
            </p>

            <p id="socialIcons">
              <Link target="_blank" to="https://github.com/RDeveloper123">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link target="_blank" to="https://www.linkedin.com">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link target="_blank" to="https://twitter.com">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link target="_blank" to="https://www.google.com/">
                <i className="fa-brands fa-google"></i>
              </Link>
            </p>

            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1rqZh2T6tMs9uHXzVNMsXA3-Tk7cMYNtC/view?usp=sharing"
              download=""
            >
              <input type="button" value="Download CV" id="btn" />
            </Link>
          </div>
          {/* <!-- Left side content end --> */}

          {/* <!-- Right side content start --> */}
          <div className="col-md-5" id="rightSide">
            <img src={Photo} alt="" id="image"/>
          </div>
          {/* <!-- Right side content end --> */}
        </div>
        {/* <!-- First row end --> */}

        {/* <!-- Second row start --> */}
        <div className="row" id="secondRow">
          <div className="col-md-4" id="secondRowLeft">
            <img src={About} alt="" className="d-none d-md-block" />
          </div>
          <div className="col-md-6" id="secondRowRight">
            <h1>Hello, I Am Vasimakram Choudhari</h1>
            <p>
              Greetings! I'm Vasimakram Choudhari, a passionate and dedicated
              front-end web developer with a versatile skill set that includes
              HTML, CSS, Bootstrap, JavaScript, and ReactJS. My journey in the
              world of web development began with a curiosity to create visually
              appealing and interactive user interfaces.
            </p>
            <p>
              <strong style={{fontWeight: "600"}}>Skills Overview:</strong>
              HTML, CSS, Bootstrap: Proficient in crafting well-structured and
              responsive web pages that deliver a seamless user experience
              across devices.
            </p>
            <p>
              <strong style={{fontWeight: "600"}}>Javascript:</strong> Equipped
              with the ability to add dynamic functionality and enhance user
              interactions using JavaScript.
            </p>
            <p>
              <strong style={{fontWeight: "600"}}>ReactJS:</strong> Experienced in
              building scalable and efficient web applications with ReactJS,
              utilizing its component-based architecture for a modular and
              maintainable codebase.
            </p>

            <form>
              <table id="table">
                <tr>
                  <th>Name</th>
                  <th id="content">: Vasimakram Choudhari</th>
                </tr>
                <tr>
                  <th>Age</th>
                  <th id="content">: 23</th>
                </tr>

                <tr>
                  <th>Email</th>
                  <th id="content">: vasimakramc@gmail.com</th>
                </tr>
              </table>
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1uzR93Ywthf095Q2ak_CLireswI5ystZj/view?usp=sharing"
                download=""
              >
                <input type="button" value="Download CV" id="btn" />
              </Link>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Container Body End--> */}
    </>
  );
}

export default Home;
