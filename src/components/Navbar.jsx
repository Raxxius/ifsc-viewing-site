import Logo from "../resources/images/logo-ifsc.png";
import Dropdown from "../resources/images/arrow-drop-down.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <div className="menu">
        <div className="nav-dropdown">
          <button className="nav-dropbtn">Competitions <img src={Dropdown} alt="dropdown tag"></img></button>
          <div className="nav-dropdown-content">
          <p>2022</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
