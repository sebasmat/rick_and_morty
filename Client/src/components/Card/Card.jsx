import style from './Card.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);


   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id))
      } else {
         setIsFav(true);
         dispatch(addFav({ id, name, status, species, gender, origin, image, onClose }))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         <div className={style.head_card}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => { onClose(id) }}>X</button>
         </div>

         <Link to={`/detail/${id}`} className={style.link} >
            <h3 className="card-name">{name}</h3>
         </Link>
         <h2>Status:{status}</h2>
         {/* <h2>Species:{species}</h2> */}
         {/* <h2>Gender:{gender}</h2> */}
         {/* <h2>Origin:{origin}</h2> */}
         <img src={image} alt='Imagen' />

      </div>

   );
}


