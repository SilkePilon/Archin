import React from "react";

function Footer() {
  return (
    <footer className="tc-footer-style1">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  Ready to transform your home? Contact Us today for a
                  consultation and take the first step towards a smarter, more
                  connected living space.
                </div>
                <div className="foot-social mt-50">
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
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">
                  {" "}
                  Gurgaon, Haryana{" "}
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      SF-41-2nd, Omaxe Celebration Mall, Sector 48, Gurgaon,
                      Haryana, 122001.
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
              {/* <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Boston, MA </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> 3D Visualization Architect </a>
                  </li>
                  <li>
                    <a href="#"> Interior Architect </a>
                  </li>
                  <li>
                    <a href="#"> Sustainable Design Architect </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">
                  {" "}
                  Gurgaon, Haryana{" "}
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      SF-41-2nd, Omaxe Celebration Mall, Sector 48, Gurgaon,
                      Haryana, 122001.
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
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Helps </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">
                © 2024 Comfy Homz Solutions . All Right Reserved
              </p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <a href="/"> Home </a>
                <a href="/services"> Services </a>
                <a href="/about"> About </a>
                <a href="/portfolio"> Gallery </a>
                <a href="/contact"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
