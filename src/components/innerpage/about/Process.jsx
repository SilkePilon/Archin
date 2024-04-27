import React from "react";

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
          Our{" "}
          <span className="sub-font fst-italic color-orange1 fw-400">
            Process
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span> <h3> Experience </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          With over a decade of expertise, we have the knowledge
                          and skills to deliver exceptional results.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span>{" "}
                        <h3> Custom Solution </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Every home is unique, and we tailor our solutions to
                          meet your specific needs and preferences.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span>{" "}
                        <h3> Quality Products </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          We partner with leading brands to provide top-quality
                          products that guarantee performance and reliability.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span>{" "}
                        <h3> Professional Installation </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Our team of trained technicians ensures seamless
                          installation and setup for a hassle-free experience.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=919899912244"
                  className="butn bg-white rounded-pill mt-50 hover-bg-black"
                >
                  <span>
                    Get A Free Quote
                    <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <div className="img" data-lag="0.2">
                  <img
                    src="/innerpages/assets/img/process/proc1.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Design </span>
                </div>
                <div className="img" data-lag="0.4">
                  <img
                    src="/innerpages/assets/img/process/proc2.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Handover </span>
                </div>
                <div className="img" data-lag="0.3">
                  <img
                    src="/innerpages/assets/img/process/proc3.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Survey </span>
                </div>
                <div className="img" data-lag="0.5">
                  <img
                    src="/innerpages/assets/img/process/proc4.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Implement </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
