import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Figma Web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interactive GUI Design</p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux design */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive web design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Dynamic web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ecommerce websites</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Fullstack Web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Porfolio websites</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interactive web Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>WordPress websites</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>WIX websites</p>
            </li>
          </ul>
        </article>
        {/* end of Web Development */}{" "}
        <article className="service">
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Poster Design</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Image manipulation</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Video Editing</p>
            </li>
          </ul>
        </article>
        {/* end of Graphic Design */}
      </div>
    </section>
  );
};

export default Services;
