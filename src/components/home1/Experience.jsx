import React from "react";

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num"> 10+ </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/exp.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Est. 2012 </h3>
              <div className="text fsz-15 color-666">
                Welcome to Comfy Homz Solutions Elevating Smart Home Living for
                Over a Decade we specialize in transforming houses into smart
                homes. With over 14 years of experience, we have been at the
                forefront of providing cutting-edge solutions in home
                automation, home theaters, WiFi networking, and CCTV systems.
              </div>
              <a
                href="/services"
                className="butn rounded-pill mt-50 hover-bg-black bg-white"
              >
                <span>
                  Our Studio <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              {/* <ul>
                <li>
                  <a href="#"> Ishan@comfyhomz.com </a>
                </li>
                <li>
                  <a href="#"> +919899912244 </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Experience;
