import React from "react";

function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              What Clients Say <br /> About ComfyHomz
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “I love how Comfy Homz Solutions transformed my home
                        into a smart oasis! Their team was efficient and
                        professional, and now I can control everything with a
                        tap on my phone. Thanks, Comfy Homz!.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.png"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Rajesh Kumar
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Project Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “I couldn't be happier with the services provided by
                        Comfy Homz Solutions. Their knowledgeable staff helped
                        me navigate through various smart home options and
                        tailored a solution that perfectly fit my needs and
                        budget.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team2.png"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Harsh Sharma
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Private Villa Owner
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “The entire team tactfully delivered a project of
                        exceptional quality while staying on schedule and under
                        budget. More than what i&apos;m expected. I’m really
                        satisfied and recommended!.”
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team3.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            M. Salah
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Dash Private Villa Project Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> Creative </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Flexible </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Dedicated </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
