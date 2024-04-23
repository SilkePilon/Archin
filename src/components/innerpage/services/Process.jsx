import React from "react";

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> Why Choose Us </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <div
                  className="accordion wow fadeInUp slow"
                  id="accordionProcess"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span>
                        <h3> Experience </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
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
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span>
                        <h3> Custom Solutions </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
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
                </div>
                <a
                  href="#"
                  className="butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    Our Projects
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="img wow">
                <img
                  src="/home1/assets/img/process.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Process;
