import Logo from "../resources/images/logo-ifsc.png";
import DropDown from "./DropDown";
import { useState } from "react";

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);

  /* Button activity */
  const handleShowList = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <div className="menu">
        <div className="nav-dropdown" onClick={handleShowList}>
          <DropDown changeEvent={props.changeEvent} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
