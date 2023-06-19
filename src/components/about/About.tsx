import "./about.css";
import about from "../../assets/about.png";
import { BsFillAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";

function About() {
  return (
    <>
      <section id="about">
        <h5 className="small-text">Know more about me</h5>
        <h2> about me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={about} alt="about-me-image" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <BsFillAwardFill className="about_icon" />
                <h5>Experience</h5>
                <small>2+ years</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>Happy and Returning Clients</small>
              </article>
              <article className="about_card">
                <BsFolder2 className="about_icon" />
                <h5>Projects</h5>
                <small>60+ completed</small>
              </article>
            </div>
            <p>I build highly scalable responsive Full Stack Applications</p>
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
// import './about.css'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About
