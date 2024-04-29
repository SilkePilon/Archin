import React from "react";
import Loader from "../../components/common/Loader";
import Footer from "../../components/innerpage/Footer";
import Menu from "../../components/innerpage/Menu";
import Navbar2 from "../../components/innerpage/Navbar2";
import StartButton from "../../components/home5_residence/StartButton";
import Header from "../../components/innerpage/portfolio/Header";
import Cases from "../../components/innerpage/portfolio/Cases";
import LatestCases from "../../components/innerpage/portfolio/LatestCases";
import { Helmet } from "react-helmet";

function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio: Comfy Homz Solution's Projects in Delhi, India</title>
        <meta
          name="description"
          content="Browse through our portfolio at Comfy Homz Solution! Discover our successful projects in home automation, home theater, wifi networking, and CCTV connections across Delhi, India."
        />
        <meta
          name="keywords"
          content="Comfy Homz Solution, portfolio, home automation projects, home theater installations, wifi networking setups, CCTV connections, Delhi, India"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 portfolio-pg-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar2 />
          <Header />
          <main>
            <Cases />
            <LatestCases />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default PortfolioPage;
