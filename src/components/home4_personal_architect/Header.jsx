import React from "react";

function Header() {
  return (
    <header className="tc-header-style4">
      <div className="container">
        <div className="rotate-box" data-speed="1" data-lag="0.4">
          <a
            href="https://www.instagram.com/usanceinterieurs/"
            target="_blank"
            className="rotate-circle fsz-35 rotate-text d-inline-block text-uppercase"
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
                  {" "}
                  - volg ons op instagram{" "}
                </textPath>
              </text>
            </svg>
          </a>
          <span className="num">
            <a
              target="_blank"
              href="https://www.instagram.com/usanceinterieurs/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8vh"
                height="8vw"
                viewBox="0 0 256 256"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
                    fill="#0A0A08"
                  />
                </g>
              </svg>
            </a>
          </span>
        </div>
        <h1 style={{ color: "#C54C34" }}> Usance </h1>
        <span style={{ color: "#2A2B2D" }} className="float_txt js-title">
          {" "}
          Interieurs{" "}
        </span>
        <div className="info">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="img mb-4 mb-lg-0 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <center>
                  <div className="image-carousel" style={{ marginLeft: "4vw" }}>
                    <div className="carousel-container">
                      <img
                        src="/home4_personal_architect/assets/img/header.jpg"
                        alt=""
                        className="carousel-image"
                      />
                      <img
                        src="/home4_personal_architect/assets/img/header.jpg"
                        alt=""
                        className="carousel-image"
                      />
                      <img
                        src="/home4_personal_architect/assets/img/header.jpg"
                        alt=""
                        className="carousel-image"
                      />
                    </div>
                  </div>
                </center>
                <style jsx>{`
                  .image-carousel {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.75rem;
                  }

                  .carousel-container {
                    display: flex;
                    width: 300%;
                    height: 100%;
                    animation: slideShow 7.5s linear infinite;
                  }

                  .carousel-image {
                    width: 33.333%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                  }

                  @keyframes slideShow {
                    0% {
                      transform: translateX(0);
                    }
                    28% {
                      transform: translateX(0);
                    }
                    33% {
                      transform: translateX(-33.333%);
                    }
                    61% {
                      transform: translateX(-33.333%);
                    }
                    66% {
                      transform: translateX(-66.666%);
                    }
                    94% {
                      transform: translateX(-66.666%);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }
                `}</style>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp slow" data-wow-delay="0.4s">
              <div className="text fsz-24 mb-30">
                'Wat betekent Usance eigenlijk?'. De vertaling van Wikipedia, de
                vrije encyclopedie, klinkt als volgt: "usance: gewoonte.
                utilitair: (Fr.: utilitaire) het nut beogend". En dit is nou
                precies waar Usance voor staat! Usance Interieurs denkt met u
                mee en zal altijd voor het interieur van uw woning, bedrijf,
                winkel of product het nut als uitgangspunt nemen.
              </div>
              <div className="text fsz-24 mb-80">
                Als duo vormen Dennis van den Dool en Mariska van der Velde
                Usance Interieurs. Een mooi interieurontwerp maken kunnen vele.
                Maar een op maat gemaakt advies waarin volledig op uw wensen en
                eisen wordt ingespeeld, tot en met de realisatie, dat doet
                Usance Interieurs uit gewoonte.
              </div>
              <a
                href="/about"
                className="fsz-14 text-uppercase text-decoration-underline"
              >
                {" "}
                MEER OVER ONS{" "}
              </a>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="social wow fadeInUp slow" data-wow-delay="0.6s">
                <p className="fsz-12 text-uppercase color-999 mb-30">
                  {" "}
                  social{" "}
                </p>
                <ul className="text-uppercase fsz-18 lh-6">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/usanceinterieurs/"
                    >
                      {" "}
                      Instagram{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
