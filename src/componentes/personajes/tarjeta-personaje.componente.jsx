import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch,useSelector } from "react-redux";
import {guardarFavorito} from "../../redux/slices/favoritos";
import { useState } from 'react';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character}) => {
    const dispatch=useDispatch()
    const [fav,setFav]=useState(false)
    const guardar=()=>{
        if(fav===false){
            setFav(true)
        }else{
            setFav(false)
        }
        
    }
    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <div onClick={guardar}><BotonFavorito  esFavorito={fav} /></div>
        </div>
    </div>
}

export default TarjetaPersonaje;