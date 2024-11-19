import React from "react";

function Header() {
  return (
    <header className="tc-header-style4">
      <div className="container">
        <div className="rotate-box" data-speed="1" data-lag="0.4"></div>
        <h1 style={{ color: "#C54C34" }}>Over Ons</h1>

        <div className="info">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="img mb-4 mb-lg-0 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <img
                  src="/home4_personal_architect/assets/img/user1.jpg"
                  alt=""
                  className="img-cover"
                />
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
                    {" "}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/usanceinterieurs/"
                    >
                      {" "}
                      Instagram{" "}
                    </a>{" "}
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
