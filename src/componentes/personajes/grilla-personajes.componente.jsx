import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({data}) => {

    return <>
    <div className="grilla-personajes">
        {data?data.map((element)=><TarjetaPersonaje key={element.id} character={element}/>):""}
    
    </div>
    </>
}
 
export default GrillaPersonajes;