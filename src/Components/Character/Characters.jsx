import { useEffect, useState } from "react";
import "./Characters.css";
import { Link } from "react-router-dom";

const Characters = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
     .then(res => res.json())
     .then(data =>{
       setCharacters(data.items);
       console.log(data.items);
     })
     
  }, []);

  return (
    <div className="Characters">
      {characters.map((characters) => (
        <Link key={characters.id} to={`/character/${characters.id}`}>
        <img  src={characters.image}/>
        </Link>
        ))} 
    </div>
  )
}
export default Characters