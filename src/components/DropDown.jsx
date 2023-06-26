import Dropdown from "../resources/images/arrow-drop-down.svg";
import Right from "../resources/images/arrow-right.svg"


function DropDown(props) {
  return (
    <nav className="nav-area">
      <ul>
        <li>
          <button>Competitions <img src={Dropdown} alt=""/></button>
          <ul>
            <li>
              <button>Lead <img src={Right} alt=""/></button>
              <ul>
                <li>
                  <button onClick={() => props.changeEvent(2)}>Moscow 2021</button>
                </li>
              </ul>
            </li>
            <li>
              <button>Bouldering <img src={Right} alt=""/></button>
              <ul>
                <li>
                  <button onClick={() => props.changeEvent(1)}>Moscow 2021</button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <button>Climbers</button>
        </li>
        <li>
          <button>News</button>
        </li>
      </ul>
    </nav>
  );
}


export default DropDown;
