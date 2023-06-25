import Dropdown from "../resources/images/arrow-drop-down.svg";


function DropDown(props) {
  console.log(props)
  return (
    <nav className="nav-area">
      <ul>
        <li>
          <a href="#">Competitions <img src={Dropdown} /></a>
          <ul>
            <li>
              <a href="#">Lead</a>
              <ul>
                <li>
                  <a href="#" onClick={() => props.changeEvent(2)}>Moscow 2021</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Bouldering</a>
              <ul>
                <li>
                  <a href="#" onClick={() => props.changeEvent(1)}>Moscow 2021</a>
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


export default DropDown;
