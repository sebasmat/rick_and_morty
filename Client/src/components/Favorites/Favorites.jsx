import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards, getFavs } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Favorites.module.css";
const Favorites = () => {
    const [aux, setAux] = useState(false);
    const {myFavorites} = useSelector(state => state);
    console.log(myFavorites);
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        setAux(true);
        dispatch(orderCards(event.target.value));
    }
    const handleFilter = (event) => {
        setAux(true);
        dispatch(filterCards(event.target.value));
    }
    useEffect(()=>{
        dispatch(getFavs()); 
    },[])
    
    return (
        <div className={style.fav_container}>
            <div>
                <select onChange={handleOrder}>
                    <option >Ordenar...</option>
                    <option value='A'>ascendente</option>
                    <option value='D'>descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option>Filtrar...</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            {myFavorites.map((character) => {
                return (
                    <div className={style.card}>
                        <Link to={`/detail/${character.id}`} >
                            <h3 className="card-name"> {character.name}</h3>
                        </Link>
                        <h2>Status:{character.status}</h2>
                        <h2>Species:{character.species}</h2>
                        <h2>Gender:{character.gender}</h2>
                        <h2>Origin:{character.origin}</h2>
                        <img src={character.image} alt='Imagen' />
                    </div>
                )
            })}
        </div>
    )
}
export default Favorites;