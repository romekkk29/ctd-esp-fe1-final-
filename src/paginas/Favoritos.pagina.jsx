import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch,useSelector } from "react-redux";
import {eliminarFavoritos, guardarFavorito} from "../redux/slices/favoritos";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favoritos=useSelector((state)=>state.favoritos)
    const dispatch=useDispatch()
    const eliminar=()=>{
        dispatch(eliminarFavoritos())
    }
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button onClick={eliminar} className="danger">Eliminar todos los favoritos</button>
        </div>
        <GrillaPersonajes data={favoritos.favoritos}/>
    </div>
}

export default PaginaFavoritos