import React from "react";
import "./portfolio.css";
import web1 from "../../assets/web2.jpg";
import web2 from "../../assets/web2.png";
import web3 from "../../assets/web3.jpg";
import web4 from "../../assets/web5.png";
import web5 from "../../assets/web4.jpg";
import web6 from "../../assets/web6.jpg";
import web7 from "../../assets/web6.png";

const data = [
  {
    id: 1,
    image: web1,
    title: "first web",
    github: "https://github.com",
    demo: "demo url",
  },
  {
    id: 2,
    image: web2,
    title: "second web",
    github: "https://github.com",
    demo: "demo url",
  },
  {
    id: 3,
    image: web3,
    title: "Third web",
    github: "https://github.com",
    demo: "demo url",
  },
  {
    id: 4,
    image: web4,
    title: "Fourth web",
    github: "https://github.com",
    demo: "demo url",
  },
  {
    id: 5,
    image: web5,
    title: "Fifth web",
    ithub: "https://github.com",
    demo: "demo url",
  },
  {
    id: 6,
    image: web6,
    title: "Sixth web",
    github: "https://github.com",
    demo: "demo url",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github{" "}
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
