import SocialTwo from "./SocialLinksTwo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src="./images/backroads-logo.webp" className="nav-logo" alt="backroads" />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li>
        </ul>
        <SocialTwo />
      </div>
    </nav>
  );
};

export default Navbar;
