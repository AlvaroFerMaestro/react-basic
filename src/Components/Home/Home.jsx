import "./Home.css";
import dragonBall from "../img/pngwing.com.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="principal">
        <h1>Bienvenido a la API de Dragon Ball realizada con React</h1>
        <button onClick={() => navigate("/characters")} className="botonInicio">
          Click aquí para comenzar
        </button>
        <div className="imagen-fondo">
          <img src={dragonBall} alt="dragon-ball" />
        </div>
      </div>
    </div>
  );
};

export default Home;
