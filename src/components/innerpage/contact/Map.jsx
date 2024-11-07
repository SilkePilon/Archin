import React from "react";

function Map() {
  return (
    <section className="tc-map-style1">
      <div className="map-card wow zoomIn slow" data-wow-delay="0.2s">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.297857031445!2d5.824884412734951!3d52.428514371920734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7d2330827fbb5%3A0x66851ec4ec2992b3!2sZuiderzeestraatweg%20West%2012A%2C%208085%20AE%20Doornspijk!5e1!3m2!1snl!2snl!4v1730969499141!5m2!1snl!2snl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
