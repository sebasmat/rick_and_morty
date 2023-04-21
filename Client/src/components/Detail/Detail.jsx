import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            });
        return setCharacter({});
    }, [id]);
    return (
        <div>
            {character.name ?
                <>  
                    <h3>{character.name}</h3>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.gender}</h3>
                    <h3>{character.origin.name}</h3>
                    <img src={character.image} alt= "Imagen"/>
                </> : <h4>Loading...</h4>}
        </div>
    )
}