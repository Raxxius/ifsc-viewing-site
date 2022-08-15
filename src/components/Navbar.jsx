import Logo from '../resources/images/logo-ifsc.png'

function Navbar() {
    return (
      <div className="navbar">
            <img src={Logo} className="logo"/>
            <div className="menu">
                <p>Competitions</p>
                <p>Climbers</p>
                <p>News</p>
            </div>
      </div>
    );
  }

export default Navbar;