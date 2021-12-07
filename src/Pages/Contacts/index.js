import React from "react";

import * as s from "./style.module.scss";

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41176.27489678376!2d23.9772163333895!3d49.83273913809288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1638729962100!5m2!1suk!2sua"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        title="map"
      ></iframe>
      <div className={s.contacts_content}>
        <ul className={s.contacts_list}>
          <li>
            <i class="fas fa-mobile-alt"></i> +380671775547
          </li>
          <li>
            <i class="fas fa-envelope"></i> taras.galaburda@outlook.com
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i> Lviv, someName street, 5
          </li>
          <li>
            <i class="far fa-clock"></i>
            <div className={s.contacts_list_address}>
              <span>Mon - Fr: 10 AM - 8 PM</span>{" "}
              <span>Sat - San: day off</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
