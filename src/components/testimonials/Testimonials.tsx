import React from "react";
import "./testimonials.css";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

const data = [
  {
    avatars: avatar,
    name: "John Rawlings",
    review:
      "Testimonials currently not available. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus sit corporis saepe vero mollitia, itaque suscipit repellat adipisci reprehenderit ad beatae nesciunt, doloremque distinctio",
  },
  {
    avatars: avatar5,
    name: "John Rawlings",
    review:
      "Testimonials currently not available. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus sit corporis saepe vero mollitia, itaque suscipit repellat adipisci reprehenderit ad beatae nesciunt, doloremque distinctio",
  },
  {
    avatars: avatar6,
    name: "John Rawlings",
    review:
      "Testimonials currently not available. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus sit corporis saepe vero mollitia, itaque suscipit repellat adipisci reprehenderit ad beatae nesciunt, doloremque distinctio",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What my Clients say</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {data.map(({ avatars, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatars} alt={name} />
              </div>
              <h2 className="client_name">{name}</h2>
              <small className="client_review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
