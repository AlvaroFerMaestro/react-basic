/* import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterById.css";

const CharacterById = () => {

    const { id } = useParams();
    const [character, setCharacters] = useState();

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters/" + {id}).then((res) => res.json()).then((res) => setCharacters(res))
    }, [])

  return (
    <div>{console.log(character)}</div>
  )
}

export default CharacterById */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterById.css";

const CharacterById = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching character:", error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CharacterDetail">
        <div className="carta">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.description}</p>
        </div>
    </div>
  );
};

export default CharacterById;
