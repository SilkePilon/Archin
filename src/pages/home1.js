import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import Loader from "../components/common/Loader";
import Menu from "../components/home1/Menu";
import Navbar from "../components/home1/Navbar";
import Header from "../components/home1/Header";
import Experience from "../components/home1/Experience";
import Services from "../components/home1/Services";
import Process from "../components/home1/Process";
import Awards from "../components/home1/Awards";
import Projects from "../components/home1/Projects";
import Testimonials from "../components/home1/Testimonials";
import Team from "../components/home1/Team";
import Blog from "../components/home1/Blog";
import Chat from "../components/home1/Chat";
import Footer from "../components/home1/Footer";
import { Helmet } from "react-helmet";

function Home1() {
  return (
    <>
      <Helmet>
        <title>
          Comfy Homz Solution: Transforming Homes in Delhi, India Since 2012
        </title>
        <meta
          name="description"
          content="Welcome to Comfy Homz Solution! Your premier destination for home automation, home theater, wifi networking, and CCTV connections in Delhi, India. Experience the future of smart living with us."
        />
        <meta
          name="keywords"
          content="Comfy Homz Solution, home automation, home theater, wifi networking, CCTV connections, Delhi, India"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/home1/assets/js/home_1_scripts.js"></script>
      </Helmet>
      <body className="home-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Experience />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <Awards />
            {/* <Team /> */}
            {/* <Blog /> */}
            <Chat />
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </>
  );
}

export default Home1;
