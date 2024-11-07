import React from "react";

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Mariska, Dennis </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#"> Zuiderzeestraatweg West 12A </a>
                      </li>
                      <li>
                        <a href="mail:info@usanceinterieurs.nl">
                          {" "}
                          info@usanceinterieurs.nl{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ paddingRight: "15px" }}
                          href="tel:+31-6-30305760"
                        >
                          Mariska - 06 30305760
                        </a>{" "}
                        <a href="tel:+31-6-30211174">Dennis - 06 30211174</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Gurgaon, Haryana </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">2221 Sw Broadway Dr, Portland, OR 97201</a>
                      </li>
                      <li>
                        <a href="#"> portland@archin.co </a>
                      </li>
                      <li>
                        <a href="#"> (021) 4246 63 68 </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
              {/* <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/usanceinterieurs/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
