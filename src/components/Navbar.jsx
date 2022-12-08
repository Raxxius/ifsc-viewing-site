import Logo from "../resources/images/logo-ifsc.png";
import Dropdown from "../resources/images/arrow-drop-down.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <div className="menu">
        <div className="nav-dropdown">
          <ul className="nav-dropbtn">
            Competitions <img src={Dropdown} alt="dropdown tag"></img>
            <li className="nav-dropdown-content">
              2022
              <ul className="nav-dropdown-side-content">
                <li className="nav-dropdown-side-option">Moscow</li>
                <li className="nav-dropdown-side-option">Kranj</li>
                <li className="nav-dropdown-side-option">Briancon</li>
                <li className="nav-dropdown-side-option">Chamonix</li>
                <li className="nav-dropdown-side-option">Villars</li>
                <li className="nav-dropdown-side-option">Innsbruck</li>
                <li className="nav-dropdown-side-option">Salt Lake</li>
                <li className="nav-dropdown-side-option">Meiringen</li>
              </ul>
            </li>
            <li className="nav-dropdown-content">
              2021
              <ul className="nav-dropdown-side-content">
                <li className="nav-dropdown-side-option">Moscow</li>
                <li className="nav-dropdown-side-option">Kranj</li>
                <li className="nav-dropdown-side-option">Briancon</li>
                <li className="nav-dropdown-side-option">Chamonix</li>
                <li className="nav-dropdown-side-option">Villars</li>
                <li className="nav-dropdown-side-option">Innsbruck</li>
                <li className="nav-dropdown-side-option">Salt Lake</li>
                <li className="nav-dropdown-side-option">Meiringen</li>
              </ul>
            </li>
            <li className="nav-dropdown-content">
              2020
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
