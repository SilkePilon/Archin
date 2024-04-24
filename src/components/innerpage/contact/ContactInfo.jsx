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
                    <h6 className="fsz-24 mb-15 fw-bold"> Gurgaon, Haryana </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">
                          {" "}
                          SF-41, 2nd Floor, Omaxe Celebration mall, sector 48,
                          Gurgaon, Haryana, 122001{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#"> Ishan@comfyhomz.com </a>
                      </li>
                      <li>
                        <a href="#"> +91 9899911244/+919899912244 </a>
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
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
