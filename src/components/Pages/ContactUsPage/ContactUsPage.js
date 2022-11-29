import React from "react";
import "./ContactUsPage.css";

function ContactUsPage() {
  return (
    <div className="contact-us_container">
      <a
        href="https://www.facebook.com/gamilasecretIL"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-us_container_facebook"></div>
      </a>
      <a
        href="https://www.facebook.com/gamilasecretIL"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-us_container_whatsapp"></div>
      </a>
      <a
        href="https://www.facebook.com/gamilasecretIL"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-us_container_instagram"></div>
      </a>
      <a
        href="https://www.facebook.com/gamilasecretIL"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-us_container_mail"></div>
      </a>
    </div>
  );
}

export default ContactUsPage;