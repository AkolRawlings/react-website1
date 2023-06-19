import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <>
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/jerry-rawlings-907513201/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/settings/profile" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/jerry.rawlings.334" target="_blank">
          {" "}
          <BsFacebook />
        </a>
        <a href="https://twitter.com/MajorRawlings" target="_blank">
          {" "}
          <BsTwitter />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
