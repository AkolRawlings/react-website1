import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { BiDownArrowCircle } from "react-icons/bi";
function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <div className="text">
            <h5>Hi there, I'm</h5>
            <h1 className="main-text">Akol Jerry</h1>
            <h5 className="text-light">Full Stack Developer</h5>
          </div>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={me} alt="me" />
          </div>
          <div className="scroll_down">
            <a href="#contact">
              scroll down
              {/* <BiDownArrowCircle /> */}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
