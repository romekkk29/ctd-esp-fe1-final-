import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { get_character_page } from "../redux/slices/getCharacterSlice";
import { get_character_name } from "../redux/slices/filterName";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
 


const PaginaInicio = () => {
    const getCount=useSelector((state)=>state.page.value)
    const {characters2,loading2}=useSelector((state)=>state.filterByName)
    const dispatch=useDispatch()
    const limpiar=()=>{
        dispatch(get_character_name({name:"",page:1}))
    }
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={limpiar}>Limpiar Filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        {loading2?<h1>...Cargando...</h1>: <GrillaPersonajes data={characters2.results}/>}
        {characters2.error?<h1>...No se han encontrado resultados en tu busqueda...</h1>:''}
        <Paginacion />
    </div>
}

export default PaginaInicio