import React from "react";

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="rotate-box" data-speed="1" data-lag="0.4">
              <a
                href="#"
                className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
              >
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path
                      id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">
                      Comfy Homz Solutions
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src="/innerpages/assets/img/leafs.png"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="text fsz-25 fw-500 mb-20">
                Welcome to Comfy Homz Solutions, where we've been transforming
                houses into smart homes for over a decade. With our expertise in
                home automation, home theaters, WiFi networking, and CCTV
                systems, we bring cutting-edge solutions to elevate your living
                experience.
              </div>
              <div className="text fsz-25 fw-500 mb-20">
                Currently Serving: Delhi NCR, Punjab, Haryana, Gujarat,
                Hyderabad, Kangpur.
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 95% </h2>
                <small> Returning Clients </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 350+ </h2>
                <small> Homes Automated </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
