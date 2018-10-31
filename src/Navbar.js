import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="Meny-list NavbarColumn">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/nyinflyttad">Nyinflyttad</Link>
          </li>
          <li>
            <Link to="/Foretag">Företag</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
        </ul>
        <div className="NavbarColumn">
          <img className="Logo" src={Logo} alt="Logo" />
        </div>
        <div className="NavbarColumn" />
      </div>
    );
  }
}
export default Navbar;
