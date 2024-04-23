import React from "react";

function Services() {
  return (
<section className="tc-services-style1">
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-80 text-center">
            <p className="color-666 text-uppercase wow"> our services </p>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-home"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> Home Automation </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser1.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Revolutionize the way you live with our custom home
                    automation solutions. Control lighting, climate, security,
                    and more, all at your fingertips.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-soundcloud"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">Home Theatres</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser2.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Immerse yourself in a cinematic experience right at home
                    with our tailored home theater installations. From
                    projectors to surround sound systems, we create the ultimate
                    entertainment space.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-wifi"></i>
                  </div>
                  <h5 className="fsz-24 mb-20"> WiFi Networking </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Stay connected seamlessly with our robust WiFi networking
                    solutions. Whether it's for work, entertainment, or smart
                    home devices, we ensure reliable and high-speed connectivity
                    throughout your home.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-video-camera"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">CCTV Systems</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser4.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Keep your property safe and secure with our state-of-the-art
                    CCTV systems. Monitor your home from anywhere, at any time,
                    with remote access and real-time alerts.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
            >
              <span>
                Get A Free Quote Now
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser.jpg" alt="" />
      </div>
    </section>
  );
}

export default Services;
