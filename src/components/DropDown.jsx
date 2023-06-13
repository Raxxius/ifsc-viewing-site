import Dropdown from "../resources/images/arrow-drop-down.svg";
import { useState } from "react";

function DropDown(props) {
  return (
    <nav class="nav-area">
      <ul>
        <li>
          <a href="#">Competitions</a>
          <ul>
            <li>
              <a href="#">Lead</a>
              <ul>
                <li>
                  <a href="#">Moscow 2021</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Bouldering</a>
              <ul>
                <li>
                  <a href="#">Innsbruck 2021</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Climbers</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </nav>
  );
}

// function SubList(props) {
//   return (
//     <div className="nave-dropdown-side-content">
//       <li className="nav-dropdown-side-option">Moscow</li>
//     </div>
//   );
// }

// function DropDown(props) {
//   const className = props.showMenu ? "nav-dropdown-content" : "hidden";

//   return (
//     <ul className="nav-dropbtn">
//       <div className="nav-dropdown-wrapper">
//         <p>Competitions</p> <img src={Dropdown} alt="dropdown tag"></img>
//         <li className={className}>
//           <div className="nav-dropdown-side-wrapper">
//             <p>Lead Climbing</p>
//             <SubList />
//           </div>
//         </li>
//       </div>
//     </ul>
//   );
// }

export default DropDown;
