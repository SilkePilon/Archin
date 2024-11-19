import React from "react";
import Loader from "../../components/common/Loader";
import Footer from "../../components/innerpage/Footer";
import Menu from "../../components/innerpage/Menu";
import Navbar from "../../components/home4_personal_architect/Navbar";
import StartButton from "../../components/home5_residence/StartButton";
import Header from "../../components/innerpage/contact/Header";
import ContactInfo from "../../components/innerpage/contact/ContactInfo";
import Map from "../../components/innerpage/contact/Map";
import ContactForm from "../../components/innerpage/contact/ContactForm";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Us: Get in Touch with Comfy Homz Solution - Home Automation
          Experts in Delhi, India
        </title>
        <meta
          name="description"
          content="Reach out to us at Comfy Homz Solution! Whether you're interested in home automation, home theater, wifi networking, or CCTV connections, our team is here to assist you in Delhi, India."
        />
        <meta
          name="keywords"
          content="Comfy Homz Solution, contact us, home automation inquiries, home theater consultations, wifi networking solutions, CCTV connection services, Delhi, India"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/home4_personal_architect/assets/css/home_4_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 contact-pg-style1">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <ContactInfo />
            <Map />
            <ContactForm />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ContactPage;
