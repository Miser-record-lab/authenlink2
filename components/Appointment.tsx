"use client";

import React, { useEffect } from "react";

const Appointment = () => {
  useEffect(() => {
    // Charger le script Calendly après le montage du composant
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Supprimer le script quand le composant est démonté
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full py-20">
      <h2 className="text-center text-3xl font-bold mb-8">
        Prendre rendez-vous
      </h2>
      <div className="flex justify-center">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/authenlink/30min?hide_gdpr_banner=1&background_color=111928&text_color=ffffff"
          style={{ minWidth: "600px", height: "500px" }}
        ></div>
      </div>
    </section>
  );
};

export default Appointment;
