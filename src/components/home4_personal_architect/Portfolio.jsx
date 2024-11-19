import React from "react";

function Portfolio() {
  return (
    <section className="tc-portfolio-style4">
      <div className="container">
        <div className="content">
          <div className="title js-splittext-lines">
            <h2 className="sec-title mb-30"> Ons Werk </h2>
            <p className="fsz-18 color-666">
              Creativiteit staat centraal in al <br /> mijn projecten
            </p>
          </div>
          <div className="projects">
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/1.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> WONINGINTERIEUR RENOVATIE </h5>
            </a>
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/1.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> RETAIL INTERIEURONTWERP </h5>
            </a>
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/wr3.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> INTERIEURONTWERP & REALISATIE VOOR PARTICULIEREN </h5>
            </a>
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/wr4.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> INTERIEURONTWERP & REALISATIE VOOR BEDRIJVEN</h5>
            </a>
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/wr5.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> BOUWBEGELEIDING </h5>
            </a>
            <a href="#" className="work-card">
              <div className="img wow">
                <img
                  src="/home4_personal_architect/assets/img/works/wr6.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
              <h5> MEUBELSHOWROOM CONCEPTEN VOOR ROUTING EN BELEVING </h5>
            </a>
          </div>
          <h4 className="pr-link">
            <a href="#" className="js-splittext-lines">
              view all <br /> works
            </a>
            <span className="icon js-splittext-lines">
              <i className="ti-arrow-top-right"></i>
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
