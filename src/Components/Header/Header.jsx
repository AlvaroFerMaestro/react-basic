import  dragonBallIcono from "../img/iconopng.png";
import { Link, NavLink, } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div className="Icono">
        <img src={dragonBallIcono} alt="dragon-ball" />
        </div>
      <nav>
        <ul>
            <li>
                <NavLink to="/" activeclassname= "active">Home</NavLink>
            </li>
            {/* <li>
                <NavLink to="/about" activeclassname= "active">About</NavLink>
            </li>    */}
            <li>
                <NavLink to="/characters" activeclassname= "active">Characters</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header