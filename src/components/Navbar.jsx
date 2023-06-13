import Logo from "../resources/images/logo-ifsc.png";
import DropDown from "./DropDown";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  /* Button activity */
  const handleShowList = () => {
    setShowMenu(!showMenu)
  }
  const handleCloseList = () => {
    setShowMenu(false)
  }

  return (
    <div className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <div className="menu">
        <div className="nav-dropdown" onClick={handleShowList}>
           <DropDown showMenu={showMenu}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
